<?php

namespace App\Controller\Admin;

use App\Entity\BuildingCost;
use App\Entity\ResourceType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class BuildingCostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return BuildingCost::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('resourceType')
                ->setLabel('Ressource')
                ->setFormattedValue(fn(?ResourceType $resource) => $resource?->getCode()?->value ?? ''),
            IntegerField::new('costs')->setLabel('Coût'),
        ];
    }
}