<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    |
    | You can configure your CORS options here. These options determine the
    | behavior of CORS requests and what headers are sent to allow them.
    |
    */

    'paths' => ['api/*'], // Tentukan path yang memerlukan CORS

    'allowed_methods' => ['*'], // Mengizinkan semua metode HTTP (GET, POST, PUT, DELETE, dll)

    'allowed_origins' => ['*'], // Mengizinkan semua asal (domain). Anda bisa membatasi sesuai kebutuhan

    'allowed_headers' => ['*'], // Mengizinkan semua header

    'exposed_headers' => [], // Menentukan header mana yang harus diekspos

    'max_age' => 0, // Menentukan cache untuk preflight request

    'supports_credentials' => false, // Apakah mendukung kredensial (cookies atau header Authorization)
];
