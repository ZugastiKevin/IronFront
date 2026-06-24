<?php

namespace App\Controller\Admin;

use App\Entity\ResourceType;
use App\Enum\ResourceCode;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ResourceTypeCrudController extends AbstractCrudController
{
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return ResourceType::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Type de Ressource')
            ->setEntityLabelInPlural('Types de Ressources')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des types de ressources');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('label')->setLabel('Nom'),
            ChoiceField::new('code')
                ->setLabel('Code')
                ->setChoices(
                    array_combine(
                        array_map(fn(ResourceCode $c) => $c->value, ResourceCode::cases()),
                        ResourceCode::cases()
                    )
                ),
            TextField::new('color')->setLabel('Couleur')->setHelp('La couleur associée au type de ressource (optionnel).')->setRequired(false),
            IntegerField::new('rarity')->setLabel('Rareté')->setHelp('0=Comune, 1=Rare, 2=Treš rare. Plus la valeur est élevée, plus le dépôt est rare.')->setRequired(true),
        ];
    }
}