<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    //
    public function getTest(){
    // Users
    //    $res= DB::select("select top 100 * from ESAT002 where USR_TYP > 5");

    // accounts
        $res= DB::select("select top 10 * from ESAT002  where COMP_ID != '88888' and USR_TYP = 2 ");
        dd($res);
        

    }

    public function getTest2(){
        // $res= DB::select("exect exec vw_W_0001");
        $res= DB::select("select * FROM spvwfunc_0001('4')");
        dd($res);
    }

    public function getMAC(){
        // $mac = system('arp -an');
        $mac = exec('getmac');
        echo $mac;
    }

     

    // V1
    public function getSummaryGrid($gameid = null){
        $res = DB::select("select straight, rumble , total , incoming , sms_out , email_out  
                                FROM tblgamestatistic  
                                WHERE  gameid =:gameid", [$gameid]);
        return $res;
    }
    // '2020-05-14'

    public function getTopCombi($gameid = null){
        // $res = DB::select("SELECT userid, transactionno, gameid, combination, straight, rumble, datetrn, sms_sent, email_sent FROM tblgamebets order by datetrn DESC LIMIT 100", [$date]);

        $res = DB::select("SELECT combination, gameid, countbet, straight, rumble, total 
                                FROM tblgamesummary 
                                WHERE gameid =:gameid order by total DESC limit 10", [$gameid]);
        return $res;
    }

    

    // cutoff
    public function getCutOFf(){
        $res = DB::select("SELECT 
                drawsched, datedraw,
                cutoff_eleven_am, end_cutoff_eleven_am, cutoff_four_pm, 
                end_cutoff_four_pm, cutoff_nine_pm, end_cutoff_nine_pm 
            FROM tblgameprofile where gamename='STL SWER3'");
        return $res;

    }



    // players stat
    public function playerStat($gameid = null, $currentdate = null){
        date_default_timezone_set("Asia/Hong_Kong");
        $date = date('Y-m-d');

        $total_player = DB::select("SELECT COUNT(*) as total_player FROM tblsubscriber where blocked = 0");
        $total_played = DB::select("SELECT distinct COUNT(userid) as total_played FROM tblgametransaction where gameid=:gameid", [$gameid]);
        $total_login = DB::select("SELECT distinct COUNT(userid) as total_login FROM tblloginsession 
                where date_format(timein,'%Y-%m-%d') = :current_date", [$date]);
        
        $total_newplayer = DB::select("SELECT COUNT(*) as total_newplayer FROM tblsubscriber
                    where date_format(dateregistered,'%Y-%m-%d') = :current_date", [$date]);
        $totalplayer = $total_player[0]->total_player;
        return [[
            'total_player'=> $total_player[0]->total_player, 
            'total_played' => round((($total_played[0]->total_played)/$totalplayer)*100, 2),
            'total_login' => round((($total_login[0]->total_login)/$totalplayer)*100, 2),
            'total_newplayer' => round((($total_newplayer[0]->total_newplayer)/$totalplayer)*100, 2),
        ]];
    }



    // public function topBets(){
    //     $res = DB::select("select id, userid as account, transactionno,transactionseries,datedraw,draw, 
    //                 (select gamename from tblgameprofile where gameid = a.gameid) as category, combination, straight, rumble, datetrn as timeposted, 
    //                 sms_sent, email_sent, printed, appreference 
    //                 from tblgamebets a where id > 523 and gameid=SWER3")+" order by id asc limit 500");
    //     return $res;
    // }


    // Current Transaction
    public function currentTransaction($gameid = null){
        $res = DB::select("select userid, transactionno, gameid, combination, straight, rumble, datetrn, sms_sent, email_sent
                from tblgamebets
                where gameid = :gameid order by datetrn desc limit 100",[$gameid]);
        return $res;
    }

    
}
