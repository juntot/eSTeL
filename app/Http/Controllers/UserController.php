<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    //login
    public function logIn(){
        // $res= DB::select("select top 10 * from ESAT002");
    //    $res =  DB::select("exec spfunc_W_STL000L :param1, :param2",['000200000002', '123123']);
        
       $res =  DB::select("exec spfunc_W_STL000L :param1, :param2", [request('comp_id').''.request('username'), request('pass')]);
    //    $res= DB::select("select top 100 * from ESAT002 where USR_TYP > 5");
        return $res;
     }
}
