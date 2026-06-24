<?php

namespace App\Controller\Admin;

use App\Entity\Building;
use App\Entity\Chunk;
use App\Entity\Player;
use App\Enum\BuildingStatus;
use App\Service\CoordinateService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class BuildingCrudController extends AbstractCrudController
{
    private CoordinateService $coordinateService;

    public function __construct(CoordinateService $coordinateService)
    {
        $this->coordinateService = $coordinateService;
    }
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return Building::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Bâtiment')
            ->setEntityLabelInPlural('Bâtiments')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des bâtiments');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('coordinates')->setLabel('Coordonnées (Lat,Lng)')->setHelp('Copiez/collez ici depuis le jeu au format : 45.123,5.456')->onlyOnForms(),
            NumberField::new('latitudeBuild')->hideOnForm(),
            NumberField::new('longitudeBuild')->hideOnForm(),
            IntegerField::new('level')->setLabel('Niveau'),
            ChoiceField::new('status')
                ->setChoices(BuildingStatus::cases()),
            AssociationField::new('buildingType')->setLabel('Type de Bâtiment'),
            TextField::new('playerPseudo')
                ->setLabel('Joueur'),
            TextField::new('gameLabel')
                ->setLabel('Partie'),
            AssociationField::new('chunk')->setLabel('Chunk')->hideOnForm(),
        ];
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof Building) {
            $lat = $entityInstance->getLatitudeBuild();
            $lng = $entityInstance->getLongitudeBuild();
            
            // Recalcul de l'ID du chunk
            $chunkId = $this->coordinateService->getChunkId($lat, $lng);
            
            // Récupération ou création du Chunk
            $chunkRepo = $entityManager->getRepository(Chunk::class);
            $chunk = $chunkRepo->findOrCreate($chunkId);
            
            $entityInstance->setChunk($chunk);
        }
        
        parent::updateEntity($entityManager, $entityInstance);
    }
}