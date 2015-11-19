<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Här registreras alla våra routes i appen.
|
*/

// Frontpage
$app->get('/', function(){
	return view('home');
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
	$app->get('/', 'App\Http\Controllers\admin@getSignIn');
	$app->post('/', 'App\Http\Controllers\admin@postSignIn');

	$app->get('cp', 'App\Http\Controllers\admin@getCP');

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