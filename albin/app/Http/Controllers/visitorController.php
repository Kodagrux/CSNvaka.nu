<?php

namespace App\Http\Controllers;

// use App\User;
use App\Visitor;
use Illuminate\Http\Response;


/**
 * 
 */
class visitorController extends Controller
{
	/**
	 * [nextDate description]
	 * @return [type] [description]
	 */
	public function setVisitor()
	{
		// 
		$uid = uniqid('_csnvaka', true);

		$response = new Response($uid);
		$response->withCookie(cookie('CVUID', $uid, 720));

		$v = new Visitor();
		$v->session = $uid;
		$v->save();

		return $response;
	}

	/**
	 * [getVisitors description]
	 * @return [type] [description]
	 */
	public function getVisitors()
	{
		$count = Visitor::all()->count();
		return $count;
	}

	/**
	 * [updateVisitor description]
	 * @param  [type] $cvuid [description]
	 * @return [type]        [description]
	 */
	public function updateVisitor($cvuid)
	{
		// 
		$v = Visitor::where('session', $cvuid)->first();
		$v->touch();

		$dn = date('Y-m-d H:i:s', time()-20);
		$v2 = Visitor::where('updated_at', '<', $dn)->delete();

		$count = Visitor::all()->count();
		
		return $count;
	}
}