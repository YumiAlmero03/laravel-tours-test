<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TourDate; 
use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class Tour extends Model
{
    use HasFactory;
    protected $table = 'tour';
    public $timestamps = false;

    public function tour_date()
    {
        return $this->hasMany(TourDate::class);
    }
    public function booking()
    {
        return $this->hasMany(TourDate::class);
    }
    public function createTour($request)
    {

        $this->name = $request->name;
        $this->itinerary = $request->itinerary;
        $this->status = $request->status;
        $this->save();
        $id =$this->id;
        foreach (json_decode($request->date) as $value) {
            $data = new TourDate();
            $data->addDates($id,$value->date);
        }
        return $this;
    }

    public function editTour($request)
    {

        $this->name = $request->name;
        $this->itinerary = $request->itinerary;
        $this->status = $request->status;
        $this->save();
        foreach (json_decode($request->date) as $value) {
            if (isset($value->id)) {
                $date = TourDate::find($value->id);
                $date->status = $value->status;
                $date->save();
            } else {
                $date = new TourDate();
                $date->tour_id = $this->id;
                $date->date = $value->date;
                $date->status = $value->status;
                $date->save();
            }
        }
        return $this;
    }
}
