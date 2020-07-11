<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/api/test', 'HomeController@getTest');
Route::get('/api/test2', 'HomeController@getTest2');
Route::get('/api/getmac', 'HomeController@getMAC');

Route::post('/api/login', 'UserController@logIn');

// accounts
Route::post('/api/add_operator', 'AccountController@addOperator');
Route::post('/api/update_operator', 'AccountController@updateOperator');

Route::get('/api/get_gencoor', 'AccountController@getGenCoor');
Route::post('/api/add_gencoor', 'AccountController@addGenCoor');
Route::post('/api/update_gencoor', 'AccountController@updateGenCoor');

Route::get('/api/get_coor/{userid?}', 'AccountController@getCoor');
Route::post('/api/add_coor', 'AccountController@addCoor');
Route::post('/api/update_coor', 'AccountController@updateCoor');


Route::get('/api/get_player_coor/{coorid?}', 'AccountController@getPlayer');

Route::get('/api/add_accounting', 'AccountController@addAccounting');
Route::get('/api/add_treasury', 'AccountController@addTreasury');
Route::get('/api/add_accounts', 'AccountController@addAccounts');
Route::get('/api/add_operation', 'AccountController@addOperation');




// Branch
Route::get('/api/get_branch', 'BranchController@getBranch');




// V1
// url/compid/branchcode/gametype/sessionid

Route::get('/{dbname?}/{gameid?}/{key?}', function () {
    return view('welcome');
});


Route::get('/{dbname?}/{gameid?}/api/get_session/{session_id?}', 'HomeController@getSession');

Route::get('/{dbname?}/{any?}/api/summary_grid/{draw_date?}', 'HomeController@getSummaryGrid');
Route::get('/{dbname?}/{any?}/api/top_combi/{date?}/{gametype?}/{drawtime?}', 'HomeController@getTopCombi');

Route::get('/{dbname?}/{any?}/api/get_cutoff/{gameid?}', 'HomeController@getCutOFf');
Route::get('/{dbname?}/{any?}/api/player_stat/{gameid?}', 'HomeController@playerStat');

Route::get('/{dbname?}/{any?}/api/current_trans/{gameid?}', 'HomeController@currentTransaction');