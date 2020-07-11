<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
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

     

    // V1 ==============================START HERE================================
    public function getSession($dbname=null, $gameid = null, $session_id=null){
        // DB::disconnect(); 
        // Config::set('database.mysql.database', $dbname); 
        // // DB::purge();
        // DB::reconnect();
        
        // $db_arr = array('epai_lucky7' => '01', 'epai_pcso' => '02', 'epai_peryahan' => '03');
        $db_arr = array('stl_epai' => '01', 'stl' => '02', 'epai_peryahan' => '03');
        $dbname = array_search($dbname, $db_arr);
        
        // return $dbname;
        Config::set("database.connections.mysql", [
                "driver" => "mysql",
                "host" => "localhost",
                "database" => $dbname,
                "username" => "root",
                "password" => ""
        ]);
        
        try {
            DB::connection()->getPdo();
        }catch (\Exception $e) {
            die("Could not connect to the database.  Please check your configuration. error:");
        }
        
        // return[$gameid, $session_id];
        $res = DB::select('select count(sessionid) as session from tbladminaccounts where sessionid = :sessionid', [$session_id]);
        
        return $res;
    }



    public function getSummaryGrid($dbname=null, $gameid = null){
        if($gameid == 'all'){
            $res = DB::select("select sum(straight) as straight, sum(rumble) as rumble, sum(total) as total, 
                                sum(incoming) as incoming, sum(sms_out) as sms_out, sum(email_out) as email_out  
                                FROM tblgamestatistic");
        }else{
            $res = DB::select("select straight, rumble, total, incoming, sms_out, email_out  
                                FROM tblgamestatistic  
                                WHERE  gameid =:gameid", [$gameid]);
        }
        
        return $res;
    }
    // '2020-05-14'

    public function getTopCombi($dbname=null, $gameid = null){
        if($gameid == 'all'){
            $res = DB::select("SELECT combination, gameid, countbet, straight, rumble, total 
                                FROM tblgamesummary order by total DESC limit 10");
        }else{
            $res = DB::select("SELECT combination, gameid, countbet, straight, rumble, total 
                                FROM tblgamesummary 
                                WHERE gameid =:gameid order by total DESC limit 10", [$gameid]);
        }
        
        return $res;
    }

    

    // cutoff
    public function getCutOFf($dbname= null, $gameid = ''){
        if($gameid == 'all'){
            $res = DB::select("
                select distinct ucase(concat(date_format(datedraw,'%M %d, %Y'), ' - ', drawsched)) as drawdate,
                    case when drawsched='11AM' 
                        then ucase(concat(date_format(CAST(cutoff_eleven_am AS TIME),'%r'), ' - ',
                        date_format(CAST(end_cutoff_eleven_am AS TIME),'%r'))) 
                    when drawsched='4PM' then ucase(concat(date_format(CAST(cutoff_four_pm AS TIME),'%r'), ' - ',
                        date_format(CAST(end_cutoff_four_pm AS TIME),'%r'))) 
                    when drawsched='9PM' then ucase(concat(date_format(CAST(cutoff_nine_pm AS TIME),'%r'), ' - ',
                        date_format(CAST(end_cutoff_nine_pm AS TIME),'%r'))) end as cutofftime, case 
                    when drawsched='11AM' then if(current_timestamp>=concat(datedraw,' ',cutoff_eleven_am),true,false) 
                    when drawsched='4PM' then if(current_timestamp>=concat(datedraw,' ',cutoff_four_pm),true,false) 
                    when drawsched='9PM' then if(current_timestamp>=concat(datedraw,' ',cutoff_nine_pm),true,false) 
                        end as cutoffdraw from tblgameprofile where actived=1
                ");
        }else{

        $res = DB::select("
            select distinct ucase(concat(date_format(datedraw,'%M %d, %Y'), ' - ', drawsched)) as drawdate,
                case when drawsched='11AM' 
                    then ucase(concat(date_format(CAST(cutoff_eleven_am AS TIME),'%r'), ' - ',
                    date_format(CAST(end_cutoff_eleven_am AS TIME),'%r'))) 
                when drawsched='4PM' then ucase(concat(date_format(CAST(cutoff_four_pm AS TIME),'%r'), ' - ',
                    date_format(CAST(end_cutoff_four_pm AS TIME),'%r'))) 
                when drawsched='9PM' then ucase(concat(date_format(CAST(cutoff_nine_pm AS TIME),'%r'), ' - ',
                    date_format(CAST(end_cutoff_nine_pm AS TIME),'%r'))) end as cutofftime, case 
                when drawsched='11AM' then if(current_timestamp>=concat(datedraw,' ',cutoff_eleven_am),true,false) 
                when drawsched='4PM' then if(current_timestamp>=concat(datedraw,' ',cutoff_four_pm),true,false) 
                when drawsched='9PM' then if(current_timestamp>=concat(datedraw,' ',cutoff_nine_pm),true,false) 
                    end as cutoffdraw from tblgameprofile where actived=1 and gameid=:gameid
            ", [$gameid]);
        }
        return $res;

    }



    // players stat
    public function playerStat($dbname=null, $gameid = null, $currentdate = null){
        date_default_timezone_set("Asia/Hong_Kong");
        $date = date('Y-m-d');

        if($gameid == 'all'){

            $total_player = DB::select("SELECT COUNT(*) as total_player FROM tblsubscriber where blocked = 0");
            $total_played = DB::select("SELECT COUNT(distinct userid) as total_played FROM tblgametransaction");
            $total_login = DB::select("SELECT COUNT(distinct userid) as total_login FROM tblloginsession 
                    where date_format(timein,'%Y-%m-%d') = :current_date", [$date]);
            
            $total_newplayer = DB::select("SELECT COUNT(*) as total_newplayer FROM tblsubscriber
                        where date_format(dateregistered,'%Y-%m-%d') = :current_date", [$date]);

            $totalplayer = $total_player[0]->total_player;
            $total_offline = $totalplayer - $total_login[0]->total_login;

            if($total_player[0]->total_player > 0 && $total_played[0]->total_played && $total_login[0]->total_login && $total_newplayer[0]->total_newplayer > 0)
            {
                
                return [[
                    'total_player'=> $total_player[0]->total_player, 
                    'total_played' => round((($total_played[0]->total_played)/$totalplayer)*100, 2),
                    'total_login' => round((($total_login[0]->total_login)/$totalplayer)*100, 2),
                    'total_offline' => round((($total_offline)/$totalplayer)*100, 2),
                    'total_newplayer' => round((($total_newplayer[0]->total_newplayer)/$totalplayer)*100, 2),

                    // val
                    'total_played_val' => ($total_played[0]->total_played),
                    'total_login_val' => ($total_login[0]->total_login),
                    'total_offline_val' => ($total_offline),
                    'total_newplayer_val' => ($total_newplayer[0]->total_newplayer),
                ]];
            }else{
                return [[
                    'total_player'=> $total_player[0]->total_player, 
                    'total_played' => $total_played[0]->total_played,
                    'total_login' => $total_login[0]->total_login,
                    'total_offline' => $total_offline,
                    'total_newplayer' => $total_newplayer[0]->total_newplayer,

                    // val
                    'total_played_val' => ($total_played[0]->total_played),
                    'total_login_val' => ($total_login[0]->total_login),
                    'total_offline_val' => ($total_offline),
                    'total_newplayer_val' => ($total_newplayer[0]->total_newplayer),
                    
                ]];
            }
        
        }else{
            $total_player = DB::select("SELECT COUNT(*) as total_player FROM tblsubscriber where blocked = 0");
            $total_played = DB::select("SELECT COUNT(distinct userid) as total_played FROM tblgametransaction where gameid=:gameid", [$gameid]);
            $total_login = DB::select("SELECT COUNT(DISTINCT userid) as total_login FROM tblloginsession tblsession
                            inner join tblsubscriber tblsubcr
                            where date_format(tblsession.timein,'%Y-%m-%d') = :current_date and tblsubcr.blocked=0", [$date]);
            
            $total_newplayer = DB::select("SELECT COUNT(*) as total_newplayer FROM tblsubscriber
                        where date_format(dateregistered,'%Y-%m-%d') = :current_date", [$date]);
            $totalplayer = $total_player[0]->total_player;
            $total_offline = $totalplayer - $total_login[0]->total_login;

            if($total_player[0]->total_player > 0 && $total_played[0]->total_played && $total_login[0]->total_login && $total_newplayer[0]->total_newplayer > 0)
            {
                
                return [[
                    'total_player'=> $total_player[0]->total_player, 
                    'total_played' => round((($total_played[0]->total_played)/$totalplayer)*100, 2),
                    'total_login' => round((($total_login[0]->total_login)/$totalplayer)*100, 2),
                    'total_offline' => round((($total_offline)/$totalplayer)*100, 2),
                    'total_newplayer' => round((($total_newplayer[0]->total_newplayer)/$totalplayer)*100, 2),
                    
                    // val
                    'total_played_val' => ($total_played[0]->total_played),
                    'total_login_val' => ($total_login[0]->total_login),
                    'total_offline_val' => ($total_offline),
                    'total_newplayer_val' => ($total_newplayer[0]->total_newplayer),
                ]];
            }else{
                return [[
                    'total_player'=> $total_player[0]->total_player, 
                    'total_played' => $total_played[0]->total_played,
                    'total_login' => $total_login[0]->total_login,
                    'total_offline' => $total_offline,
                    'total_newplayer' => $total_newplayer[0]->total_newplayer,
                    
                    // val
                    'total_played_val' => ($total_played[0]->total_played),
                    'total_login_val' => ($total_login[0]->total_login),
                    'total_offline_val' => ($total_offline),
                    'total_newplayer_val' => ($total_newplayer[0]->total_newplayer),
                ]];
            }
            
        }


        // end
    }

    // Current Transaction
    public function currentTransaction($dbname=null, $gameid = null){
        if($gameid == 'all'){
            $res = DB::select("select userid, transactionno, gameid, combination, straight, rumble, datetrn, sms_sent, email_sent
                from tblgamebets order by datetrn desc");
        }else{
            $res = DB::select("select userid, transactionno, gameid, combination, straight, rumble, datetrn, sms_sent, email_sent
                from tblgamebets
                where gameid = :gameid order by datetrn desc",[$gameid]);
        }
        
        return $res;
    }

    // public function topBets(){
    //     $res = DB::select("select id, userid as account, transactionno,transactionseries,datedraw,draw, 
    //                 (select gamename from tblgameprofile where gameid = a.gameid) as category, combination, straight, rumble, datetrn as timeposted, 
    //                 sms_sent, email_sent, printed, appreference 
    //                 from tblgamebets a where id > 523 and gameid=SWER3")+" order by id asc limit 500");
    //     return $res;
    // }


    

    
}
