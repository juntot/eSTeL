<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    //
    public function getTest(){
       $res= DB::select("select top 10 * from ESAT001");
        dd($res);
    }
    
}
