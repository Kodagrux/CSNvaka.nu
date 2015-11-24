<?php

namespace App\Http\Controllers;

use App\PayDate;
use \App\AdmUser;
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

		$admuser = AdmUser::where('password', $pass)->firstOrFail();

		return redirect('admin/cp')->withCookie(cookie('CVADM', 'true', 20));
	}

	/**
	 * [controlPanel description]
	 * @return [type] [description]
	 */
	public function getCP(Request $request)
	{

		$dates = PayDate::where('date', '>=', date('Y-m-d'))->orderBy('date', 'asc')->get();

		return view('admin-cp')->with('dates', $dates);
	}

	/**
	 * [deleteDate description]
	 * @return [type] [description]
	 */
	public function deleteDate($id)
	{
		$pd = PayDate::findOrFail($id)->delete();
		return redirect('admin/cp');
	}

	/**
	 * [editDate description]
	 * @return [type] [description]
	 */
	public function editDate($id)
	{	
		$paydate = PayDate::find($id);
		return view('admin-cp')->with('paydate', $paydate);
	}

	/**
	 * [editDate description]
	 * @return [type] [description]
	 */
	public function postEditDate($id, Request $request)
	{	
		$paydate = PayDate::find($id);
		$paydate->date = $request->date;
		$paydate->save();

		return redirect('admin/cp');
	}

	/**
	 * [addDate description]
	 */
	public function addDate()
	{
		return view('admin-cp-add');
	}

	/**
	 * [addDate description]
	 */
	public function postAddDate(Request $request)
	{
		$paydate = new PayDate();
		$paydate->date = $request->date;
		$paydate->save();

		return redirect('admin/cp');
	}
}