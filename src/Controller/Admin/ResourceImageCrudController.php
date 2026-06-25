<?php

namespace App\Controller\Admin;

use App\Entity\ResourceImage;
use App\Entity\ResourceType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use Imagine\Image\ImagineInterface;

class ResourceImageCrudController extends AbstractCrudController
{
    public const INDEX = 'index';
    public const BASE_PATH = 'assets/images/resources';
    public const PUBLIC_DIR = 'assets/images/resources';

    public function __construct(
        private SluggerInterface $slugger,
        private ImagineInterface $imagine
    ) {
    }

    public static function getEntityFqcn(): string
    {
        return ResourceImage::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Image de ressource')
            ->setEntityLabelInPlural('Images de ressources')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des images de ressources');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),

            AssociationField::new('resourceType')
                ->setLabel('Type de ressource'),

            Field::new('imageFile')
                ->setLabel('Image')
                ->setFormType(FileType::class)
                ->onlyOnForms(),

            ImageField::new('imagePath')
                ->setBasePath(self::BASE_PATH)
                ->onlyOnIndex(),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleImageUpload($entityInstance);

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleImageUpload($entityInstance);

        parent::updateEntity($entityManager, $entityInstance);
    }

    private function handleImageUpload(ResourceImage $entity): void
    {
        $imageFile = $entity->getImageFile();

        if (!$imageFile instanceof UploadedFile) {
            return;
        }

        $resourceType = $entity->getResourceType();

        if (!$resourceType) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Nom fichier ressource
        |--------------------------------------------------------------------------
        */

        $resourceName = strtolower($resourceType->getCode()->value);

        $filename = str_replace(
            '-',
            '_',
            $this->slugger
                ->slug($resourceName)
                ->lower()
                ->toString()
        );

        $extension = $imageFile->guessExtension() ?: 'png';

        $newFilename = $filename . '.' . $extension;

        /*
        |--------------------------------------------------------------------------
        | Dossier final
        |--------------------------------------------------------------------------
        */

        $targetDirectory = sprintf(
            '%s/%s',
            $this->getParameter('kernel.project_dir'),
            'public/' . self::PUBLIC_DIR
        );

        /*
        |--------------------------------------------------------------------------
        | Création dossier
        |--------------------------------------------------------------------------
        */

        if (!is_dir($targetDirectory)) {
            mkdir($targetDirectory, 0777, true);
        }

        /*
        |--------------------------------------------------------------------------
        | Fichier temporaire
        |--------------------------------------------------------------------------
        */

        $tempFile = sys_get_temp_dir() . '/' . uniqid() . '.' . $extension;

        $imageFile->move(
            dirname($tempFile),
            basename($tempFile)
        );

        /*
        |--------------------------------------------------------------------------
        | Compression image
        |--------------------------------------------------------------------------
        */

        $finalPath = $targetDirectory . '/' . $newFilename;

        $this->compressImage(
            $tempFile,
            $finalPath
        );

        /*
        |--------------------------------------------------------------------------
        | Suppression temp
        |--------------------------------------------------------------------------
        */

        if (file_exists($tempFile)) {
            unlink($tempFile);
        }

        /*
        |--------------------------------------------------------------------------
        | Sauvegarde DB
        |--------------------------------------------------------------------------
        */

        $entity->setImagePath($newFilename);
    }

    private function compressImage(
        string $sourcePath,
        string $destinationPath,
        int $quality = 75
    ): void {
        $image = $this->imagine->open($sourcePath);

        $image->save($destinationPath, [
            'jpeg_quality' => $quality,
            'png_compression_level' => 9,
        ]);
    }
}