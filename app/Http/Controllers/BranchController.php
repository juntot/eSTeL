<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class BranchController extends Controller
{
    //
    public function getBranch(){
        $data = DB::select("spfunc_G003 '0002', '', '', '', '','2'");
        return $data;
    }
}
