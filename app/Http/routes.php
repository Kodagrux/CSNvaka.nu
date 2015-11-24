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
$app->get('/', 'university@getHome');

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
	// $app->get('fillDatabase', 'App\Http\Controllers\university@fillDatabase');
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
$app->group(['prefix' => 'admin'], function($app){
	
	// 
	$app->get('/', 'App\Http\Controllers\admin@getSignIn');
	$app->post('/', 'App\Http\Controllers\admin@postSignIn');

	// 
	// $app->get('addDate', 'App\Http\Controllers\admin@addDate');

	$app->group(['middleware' => 'App\Http\Middleware\BasicAuth', 'prefix' => 'admin/cp'], function($app){

		$app->get('/', 'App\Http\Controllers\admin@getCP');

		$app->get('/delete/{id}', 'App\Http\Controllers\admin@deleteDate');

		$app->get('/edit/{id}', 'App\Http\Controllers\admin@editDate');
		$app->post('/edit/{id}', 'App\Http\Controllers\admin@postEditDate');

		$app->get('/add', 'App\Http\Controllers\admin@addDate');
		$app->post('/add', 'App\Http\Controllers\admin@postAddDate');

		$app->get('/generate', 'App\Http\Controllers\university@fillDatabase');

	});

});

/**
 * 
 */
// $app->group(['prefix' => 'api/gymnasie'], function($app){
// 	$app->get('nextDate', function ()  {
// 		return 'next date';
// 	});
// });