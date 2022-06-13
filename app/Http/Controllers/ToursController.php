<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour; 

class ToursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Tour::paginate();
        return response()->json($data, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'itinerary' => 'required',
        ]);
        $data = new Tour();
        if ($data->createTour($request)) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $data = Tour::find($id);
        if (isset($data->tour_date)) {
            $data->tourdates = json_encode($data->tour_date);
        }
        return response()->json($data, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = Tour::find($id);
        if ($data->editTour($request)) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        }
    }

}
