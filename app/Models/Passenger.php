<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class Passenger extends Model
{
    use HasFactory;
    protected $table = 'passenger';
    public $timestamps = false;
    
}
