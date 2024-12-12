<?php

use Fruitcake\Cors\HandleCors;

class Middleware
{
    // Daftar middleware lainnya...
    
    protected $routeMiddleware = [
        // Middleware lainnya...
        'cors' => HandleCors::class,
    ];
}
