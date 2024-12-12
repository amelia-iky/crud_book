<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/books', 'BookController@index');
$router->get('/books/{id}', 'BookController@show');
$router->post('/books', 'BookController@store');
$router->put('/books/{id}', 'BookController@update');
$router->delete('/books/{id}', 'BookController@destroy');


