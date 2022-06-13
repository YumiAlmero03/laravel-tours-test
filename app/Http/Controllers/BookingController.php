<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking; 
use App\Models\Invoice; 

class BookingController extends Controller
{
    public function index()
    {
        $data = Booking::with(['tour','invoice','book_passenger' => function($query){
            $query->whereHas('passenger', function ($query) {
                    $query->where('status', 1);
            });
        }])->paginate();
        return $data->toJson(JSON_PRETTY_PRINT);
    }
    public function show($id)
    {
        $data = Booking::find($id);
        $data->tour = json_encode($data->tour);
        $data->invoice = json_encode($data->invoice);
        $data->passengers = json_encode($data->book_passenger->load('passenger'));

        return response()->json($data, 200);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required|max:255',
        ]);
        $data = new Booking();
        if ($data->createBook($request)) {
            return response()->json([$data, 'status' => 200]);
        } else {
            return response()->json($data, 500);
        }
    }
    public function update(Request $request, $id)
    {
        $data = Booking::find($id);
        if ($data->editBook($request)) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        }
    }

    public function invoice(Request $request)
    {
        $data = Invoice::updateOrCreate([
            'booking_id' => $request->booking
        ],[
            'amount' => $request->amount,
            'status' => $request->status,
        ]);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        }
    }

    public function invoiceView($id)
    {
        $data = Invoice::findOrFail($id);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        }
    }

}
