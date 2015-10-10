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
	 * [nextDate description]
	 * @return [type] [description]
	 */
	public function nextDate()
	{
		// 
		$date = PayDate::where('date', '>', date('Y-m-d'))->orderBy('date', 'asc')->first();
		return strtotime($date->date);
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
		return strtotime($date->date);
	}

	/**
	 * [fillDatabase description]
	 * @return [type] [description]
	 */
	public function fillDatabase()
	{
		$blacklist = array(7, 8); // Svartlistade månader då csn inte betalas ut

		if ((int)date('n') == 12 && (int)date('j') == 27) {
			// Du är ok att köra
			$year = date('Y');
			for ($i=1; $i <= 12; $i++) { 
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
		}else{
			return 'no no';
		}

		return 'done';
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