<?php

namespace App\Http\Controllers;

// use App\User;
use App\Visitor;
use Illuminate\Http\Response;
use Illuminate\Http\Request;


/**
 * 
 */
class visitorController extends Controller
{
	/**
	 * [nextDate description]
	 * @return [type] [description]
	 */
	public function setVisitor(Request $request)
	{

		// Fetch cookie
		$cvuid_val = $request->cookie('CVUID');

		// Check if cookie exists
		if (isset($cvuid_val)) {
			$u = Visitor::where('session', '=', $cvuid_val)->first();

			// Check if user is alive
			if ($u != Null && $u->count() > 0) {
				$uid = $cvuid_val;
				$u->touch(); //touch user to keep alive
			}else{
			// Create new user cause seems dead
				$uid = uniqid('_csnvaka', true);
				$v = new Visitor();
				$v->session = $uid;
				$v->save();
			}
		}else{
			// Create new user, cause totaly new :)
			$uid = uniqid('_csnvaka', true);
			$v = new Visitor();
			$v->session = $uid;
			$v->save();
		}

		// Create response with cookie
		$response = new Response($uid);
		$response->withCookie(cookie('CVUID', $uid, 720));

		return $response;
	}

	/**
	 * [getVisitors description]
	 * @return [type] [description]
	 */
	public function getVisitors()
	{
		$dn = date('Y-m-d H:i:s', time()-20);
		$v2 = Visitor::where('updated_at', '<', $dn)->delete();
		
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

		// TODO
		// 
		// Fixa bättre kakhantering. Just nu lagras id i klartext i javascriptvariabel.
		// Hämta istället den krypterade kakan som innehåller user id. 
		// 
		// 
		$v = Visitor::where('session', $cvuid)->first();
		$v->touch();

		$dn = date('Y-m-d H:i:s', time()-10);
		$v2 = Visitor::where('updated_at', '<', $dn)->delete();

		$count = Visitor::all()->count();
		return $count;
	}
}