<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class TourDate extends Model
{
    use HasFactory;
    protected $table = 'tour_date';
    public $timestamps = false;

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    public function addDates($id,$date)
    {
        $this->tour_id = $id;
        $this->date = $date;
        $this->status = 1;
        $this->save();
    }
}
