<?php

namespace App\Http\Controllers;

use App\PayDate;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

// use App\User;

class admin extends Controller
{

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function getSignIn()
	{		
		return view('admin-login');
	}

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function postSignIn(Request $request)
	{
		$pass = $request->input('password');

		if ($pass == 'asd') {
			// Create response with admin cookie
			$response = new Response();
			$response->withCookie(cookie('CVADM', 'true', 30));

			// return 'hej';

			// return response()->withCookie(cookie('CVADM', 'hej', 30))->view('admin-cp');

			return $response;
		}else{
			return 'wrong password';
		}
	}

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function controlPanel()
	{
		// return 'admin control panel';

		
		return view('admin-login');
	}

	/**
	 * [addDate description]
	 */
	public function addDate()
	{
		return 'admin/add date';
	}
}