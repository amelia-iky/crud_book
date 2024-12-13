<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Book extends Model
{
    protected $table = 'books';
    protected $fillable = ['title', 'author', 'year'];

    // Primary key
    public $incrementing = false;

    // Key type
    protected $keyType = 'string';

    // Set UUID as primary key
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = "ID-" . substr((string) Str::uuid(), 0, 5);
            }
        });
    }
}
