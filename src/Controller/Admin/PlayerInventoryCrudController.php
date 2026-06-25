<?php

namespace App\Controller\Admin;

use App\Entity\Player;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;

class PlayerInventoryCrudController extends AbstractCrudController
{
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return Player::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Inventaire Joueur')
            ->setEntityLabelInPlural('Inventaires Joueurs')
            ->setPageTitle(
                Crud::PAGE_INDEX,
                'Gestion des inventaires joueurs'
            )
            ->setDefaultSort([
                'id' => 'ASC'
            ]);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function configureFields(string $pageName): iterable
    {
        return [

            IdField::new('id')
                ->onlyOnIndex(),

            AssociationField::new('user')
                ->setLabel('Joueur')
                ->setCrudController(UserCrudController::class),

            AssociationField::new('game')
                ->setLabel('Partie')
                ->setCrudController(GameCrudController::class),

            AssociationField::new('faction')
                ->setLabel('Faction')
                ->setCrudController(FactionCrudController::class),

            CollectionField::new('playerInventories')
                ->useEntryCrudForm(PlayerInventoryItemCrudController::class),
        ];
    }
}