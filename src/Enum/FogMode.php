<?php

namespace App\Enum;

enum FogMode: string
{
    case ENABLED = 'enabled';
    case DISABLED = 'disabled';
    case DEBUG = 'debug';
}