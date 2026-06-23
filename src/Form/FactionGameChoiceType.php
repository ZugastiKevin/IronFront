<?php
namespace App\Form;
use App\Entity\Faction;
use App\Entity\Game;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
class FactionGameChoiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('game', EntityType::class, [
                'label' => 'Partie à rejoindre',
                'class' => Game::class,
                'choice_label' => 'label',
                'choice_attr' => function (Game $game) {
                    return [
                        'data-description' => $game->getDescription() ?? 'Partie #' . $game->getId(),
                    ];
                },
                'expanded' => true,
                'multiple' => false,
                'required' => true,
                'mapped' => false,
            ])
            ->add('faction', EntityType::class, [
                'label' => 'Faction à rejoindre',
                'class' => Faction::class,
                'choice_label' => 'label',
                'placeholder' => false,
                'choice_attr' => function (Faction $faction) {
                    return [
                        'data-description' => $faction->getDescription() ?? '',
                    ];
                },
                'expanded' => true,
                'multiple' => false,
                // Non requis ici : un player existant sur la game choisie n'a pas besoin de faction.
                // La présence de la faction est vérifiée manuellement dans le controller
                // uniquement quand un nouveau player doit être créé.
                'required' => false,
                'mapped' => false,
                'data' => $options['faction_data'] ?? null,
            ])
        ;
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
            'faction_data' => null,
        ]);
    }
}