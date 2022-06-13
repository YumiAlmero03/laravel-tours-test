<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class Invoice extends Model
{
    use HasFactory;
    protected $table = 't_invoice';
    public $timestamps = false;
    protected $fillable = ['booking_id', 'amount', 'status'];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}
