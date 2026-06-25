<?php

namespace App\Controller\Admin;

use App\Entity\PlayerInventory;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class PlayerInventoryItemCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PlayerInventory::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('resourceType'),
            IntegerField::new('quantity'),
        ];
    }
}