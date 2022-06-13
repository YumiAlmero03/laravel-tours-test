<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BookingPassanger; 
use Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class Booking extends Model
{
    use HasFactory;
    protected $table = 't_booking';
    public $timestamps = false;

    public function book_passenger()
    {
        return $this->hasMany(BookingPassanger::class);
    }
    public function invoice()
    {
        return $this->hasOne(Invoice::class);
    }
    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
    public function createBook($request)
    {
        $this->tour_date = $request->date;
        $this->tour_id = $request->tour_id;
        $this->status = 0;
        $this->save();
        $id = $this->id;

        foreach (json_decode($request->passengers) as $value) {
            $data = new BookingPassanger();
            $data->addPassenger($id,$value);
        }
        return $this;
    }
    public function editBook($request)
    {

        $this->tour_date = $request->date;
        $this->tour_id = $request->tour_id;
        $this->status = $request->status;
        $this->save();
        $id = $this->id;
        foreach (json_decode($request->passengers) as $value) {
            if (isset($value->id)) {
                $data = BookingPassanger::find($value->id);
                $data->editPassenger($value);
            } else {
                $data = new BookingPassanger();
                $data->addPassenger($id,$value);
            }
        }
        return $this;
    }
}
