<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Passenger; 
use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class BookingPassanger extends Model
{
    use HasFactory;
    protected $table = 'booking_passangers';
    public $timestamps = false;

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
    
    public function passenger()
    {
        return $this->belongsTo(Passenger::class);
    }
    public function addPassenger($id,$value)
    {
        $data = new Passenger();
        $data->given_name = $value->passenger->given_name;
        $data->surname = $value->passenger->surname;
        $data->email = $value->passenger->email;
        $data->mobile = $value->passenger->mobile;
        $data->passport = $value->passenger->passport;
        $data->birth_date = $value->passenger->birth_date;
        $data->status = 1;
        $data->save();
        $passenger_id = $data->id;

        $this->booking_id = $id;
        $this->passenger_id = $passenger_id;
        $this->special_request = $value->special_request;
        $this->save();
    }

    public function editPassenger($value)
    {
        $data = Passenger::find($value->passenger->id);
        $data->given_name = $value->passenger->given_name;
        $data->surname = $value->passenger->surname;
        $data->email = $value->passenger->email;
        $data->mobile = $value->passenger->mobile;
        $data->passport = $value->passenger->passport;
        $data->birth_date = $value->passenger->birth_date;
        $data->status = $value->passenger->status;
        $data->save();
        $passenger_id = $data->id;

        $this->passenger_id = $passenger_id;
        $this->special_request = $value->special_request;
        $this->save();
    }
}
