<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AccountController extends Controller
{
    // Get Oprator
    public function getOperator(){

    }

    //Add Operator
    public function addOperator(){
        $data = DB::table('employee')->insert(request()->except(['isDisable', 'image']));
    }

    // Update Operator
    public function updateOperator(){
        DB::table('users')
              ->where('id', 1)
              ->update(['options->enabled' => true]);
    }


    // Get GEN COor
    public function getGenCoor(){
        $res= DB::select("select * FROM spvwfunc_0001('', '3', 0)",
        [
            '',
            '3',
            0
        ]);
        return $res;

     }
        


    //Add GEN COOR
    public function addGenCoor(){
        dd(request()->all());
        // $data = DB::select("exec spfunc_W_STL004R 
        // '0002','001','00000001','0002','001','12345678910','kris','kris', 'kris.tops@gmail.com','M','S','F','3'");
        $data = DB::select("exec spfunc_W_STL004R
                    :parmcompid, 
                    :parmbrcd, 
                    :parmuserid, 
                    :parmrcompid, 
                    :BranchCode, 
                    :MobileNo, 
                    :FirstName, 
                    :LastName, 
                    :parmemladd, 
                    :parmgndr, 
                    :parmmtrlstat, 
                    :parmctznshp, 
                    :parmusertype",
                    request()->all());
        return $data;
    }




    // Update GEN COOR
    public function updateGenCoor(){
        DB::table('users')
              ->where('id', 1)
              ->update(['options->enabled' => true]);
    }

    
    // GET COOR
    public function getCoor($compid_userid){
        $res= DB::select("select * FROM spvwfunc_0001(:param1, :param2, :param3)",
        [
            $compid_userid,
            '3',
            '1'
        ]);
        return $res;
    }

    //Add COOR
    public function addCoor(){
        $data = DB::select("exec spfunc_W_STL004R
                    :parmcompid, 
                    :parmbrcd, 
                    :parmuserid, 
                    :parmrcompid, 
                    :parmrbrcd, 
                    :MobileNo, 
                    :FirstName, 
                    :LastName, 
                    :parmemladd, 
                    :parmgndr, 
                    :parmmtrlstat, 
                    :parmctznshp, 
                    :parmusertype",
                    request()->all());
        return $data;
    }

    // Update COOR
    public function updateCoor(){
        DB::table('users')
              ->where('id', 1)
              ->update(['options->enabled' => true]);
    }



     // GET COOR
     public function getPlayer($compid_userid){
        $res= DB::select("select * FROM spvwfunc_0001(:param1, :param2, :param3)",
        [
            $compid_userid,
            '4',
            '1'
        ]);
        return $res;
    }
}
