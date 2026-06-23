<?php

namespace App\Infrastructure;

use App\Domain\Events\EventPublisher;
use App\Entity\Notification;
use App\Entity\Player;
use Doctrine\ORM\EntityManagerInterface;

final class DatabaseEventPublisher implements EventPublisher
{
    public function __construct(
        private readonly EntityManagerInterface $em
    ) {
    }

    public function publish(Player $player, string $type, array $payload = []): void {

        $notification = new Notification();

        $notification->setPlayer($player);
        $notification->setType($type);
        $notification->setPayload($payload);

        $this->em->persist($notification);
    }
}