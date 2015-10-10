<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Frontpage
$app->get('/', function(){
	return 'csnvaka.se';
});

/**
 * 
 */
$app->group(['prefix' => 'api/university'], function($app){
	
	// 
	$app->get('nextDate', 'App\Http\Controllers\university@nextDate');

	// 
	$app->get('todayDate', 'App\Http\Controllers\university@todayDate');

	// 
	$app->get('previousDate', 'App\Http\Controllers\university@previousDate');

	// 
	$app->get('fillDatabase', 'App\Http\Controllers\university@fillDatabase');
});

/**
 * 
 */
$app->group(['prefix' => 'api/visitor'], function($app){
	
	// 
	$app->get('setVisitor', 'App\Http\Controllers\visitorController@setVisitor');

	// 
	$app->get('updateVisitor/{cvuid}', 'App\Http\Controllers\visitorController@updateVisitor');

	// 
	$app->get('getVisitors', 'App\Http\Controllers\visitorController@getVisitors');
});

/**
 * 
 */
$app->group(['middleware' => 'App\Http\Middleware\BasicAuth', 'prefix' => 'admin'], function($app){
	
	// 
	$app->get('/', 'App\Http\Controllers\admin@controlPanel');

	// 
	$app->get('addDate', 'App\Http\Controllers\admin@addDate');

});

/**
 * 
 */
// $app->group(['prefix' => 'api/gymnasie'], function($app){
// 	$app->get('nextDate', function ()  {
// 		return 'next date';
// 	});
// });