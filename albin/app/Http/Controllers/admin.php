<?php

namespace App\Http\Controllers;

// use App\User;

class admin extends Controller
{

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function controlPanel()
	{
		return 'admin control panel';
	}

	/**
	 * [addDate description]
	 */
	public function addDate()
	{
		return 'admin/add date';
	}
}