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
			// $response = new Response('');
			// $response->withCookie(cookie('CVADM', 'true', 30));

			// return 'hej';

			return redirect('admin/cp')->withCookie(cookie('CVADM', 'true', 30));

			// return $response;
		}else{
			return 'wrong password';
		}
	}

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function getCP(Request $request)
	{
		// return 'admin control panel';
		$adm = $request->cookie('CVADM');

		if ($adm == 'true') {
			return view('admin-cp');
		}else{
			return redirect('admin');
		}
	}

	/**
	 * [addDate description]
	 */
	public function addDate()
	{
		return 'admin/add date';
	}
}