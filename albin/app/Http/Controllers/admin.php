<?php

namespace App\Http\Controllers;

use App\PayDate;

// use App\User;

class admin extends Controller
{

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