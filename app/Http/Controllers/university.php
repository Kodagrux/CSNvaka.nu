<?php

namespace App\Http\Controllers;

// use App\User;
use App\PayDate;


/**
 * 
 */
class university extends Controller
{

	/**
	 * [getHome description]
	 * @return [type] [description]
	 */
	public function getHome()
	{
		$date = PayDate::where('date', '>', date('Y-m-d'))->orderBy('date', 'asc')->first();
		
		return view('home')->with('nextDate', $date);
	}

	/**
	 * [nextDate description]
	 * @return [type] [description]
	 */
	public function nextDate()
	{
		// 
		$date = PayDate::where('date', '>', date('Y-m-d'))->orderBy('date', 'asc')->first();

		$response = strtotime($date->date);
		return $response;
	}

	/**
	 * [todayDate description]
	 * @return [type] [description]
	 */
	public function todayDate()
	{
		return time();
	}

	/**
	 * [previousDate description]
	 * @return [type] [description]
	 */
	public function previousDate()
	{
		$date = PayDate::where('date', '<', date('Y-m-d'))->orderBy('date', 'desc')->first();
		
		$response = new Response($date->date);
		return $response;
	}

	/**
	 * [fillDatabase description]
	 * @return [type] [description]
	 */
	public function fillDatabase()
	{
		$blacklist = array(7, 8); // Svartlistade månader då csn inte betalas ut

		$lastDBdate = PayDate::orderBy('date', 'desc')->first();

		$year = date('Y', strtotime($lastDBdate->date));
		$yearNow = date('Y');

		if ( (int)$year - (int)$yearNow > 3 ) {
			// Du får bara lägga in i databasen för 3 år framåt
			return redirect('admin/cp');
		}else{

			$k = (int)date('m', strtotime($lastDBdate->date));

			if ((int)date('m', strtotime($lastDBdate->date)) == 12) {
				$year = (string)((int)$year + 1);
				$k = 1;
			}

			for ($i=$k; $i <= 12; $i++) { 
				if (!in_array($i, $blacklist)) {
					$pd = new PayDate();
					if ($i < 10) {
						$m = '0'.$i;
					}else{
						$m = ''.$i;
					}
					$pd->date = date('Y-m-d', $this->generateFastPayDay($year, $m, '25'));
					$pd->save();
				}
			}

			return redirect('admin/cp');
		}
	}

	/**
	 * Funktionen genererar utbetalningsdatum för löning/csn. Alltså alltid före
	 * den 25 varje månad, om 25 är en lördag eller söndag. Notera att den är väldigt
	 * dum med eftersom den inte tar hänsyn till helgdagar som typ julafton etc.
	 * 
	 * @return [type] [description]
	 */
	private function generateFastPayDay($year, $month, $day)
	{
		$wd = date("w", strtotime($year.'-'.$month.'-'.$day));

		if ($wd == 0 || $wd == 6) {
			return $this->generateFastPayDay($year, $month, $day-1);
		}else{
			return strtotime($year.'-'.$month.'-'.$day);
		}
	}

	/**
	 * Funktionen genererar utbetalningsdatum för barnbidrag. Alltså alltid efter
	 * den 25 varje månad, om 25 är en lördag eller söndag. Notera att den är väldigt
	 * dum med eftersom den inte tar hänsyn till helgdagar som typ julafton etc.
	 * 
	 * @return [type] [description]
	 */
	private function generateSlowPayDay($year, $month, $day)
	{
		$wd = date("w", strtotime($year.'-'.$month.'-'.$day));

		if ($wd == 0 || $wd == 6) {
			return $this->generateSlowPayDay($year, $month, $day+1);
		}else{
			return strtotime($year.'-'.$month.'-'.$day);
		}
	}
}