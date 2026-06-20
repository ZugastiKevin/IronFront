<?php

namespace App\Enum;

enum DeliveryStatus: string
{
    case WAITING = 'waiting';
    case PENDING = 'pending';
    case IN_TRANSIT = 'in_transit';
    case DELIVERED = 'delivered';

    public function label(): string
    {
        return match ($this) {
            self::WAITING => 'En attente',
            self::PENDING => 'Préparation',
            self::IN_TRANSIT => 'En transit',
            self::DELIVERED => 'Livré',
        };
    }
}