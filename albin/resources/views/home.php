<?php

?>
<!DOCTYPE html>
<html>
	<head>

		<!-- Meta -->
		<meta charset="utf-8" />
		<html lang="sv">
		<title>CSNvaka.nu</title>
		<meta name="author" content="Arvid Bräne, Albin Hübsch, Andreas Grünewald" />
		<meta name="keywords" content="Money, Payday, CSN, csnvaka, Half Life 3, csn, vaka, nedräkning, countdown, nästa, utbetalning, studiemedel, studielån, pengar, studiemedlet, datum" />
		<meta name="description" content="Vaka nedräkningen till nästa csn utbetalning" />
		<meta name="copyright" content="2015">
		<meta http-equiv="refresh" content="1000" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-title" content="CSNvaka">

		<!-- Stylesheets -->
		<link rel="stylesheet" type="text/css" href="css/style.css" />

		<!-- Fonts -->
		<link href='http://fonts.googleapis.com/css?family=Titillium+Web:200italic,200,300,300italic,400,400italic' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,400italic' rel='stylesheet' type='text/css'>

		<!-- Mobile -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

		<!-- Google Plus -->
	    <script type="text/javascript" src="https://apis.google.com/js/plusone.js">
	        {lang: 'sv'}
	    </script>

	</head>
	<body>

		<!-- Background Layer -->
		<div id="hero"></div>	


		<!-- Copywrite and Share -->
		<div id="logo"></div>


		<!-- Coundown Layer -->
		<div id="countdown-container"></div>

		<!-- CSN-betalning -->
		<div id="payout">
			Nu är du rik!
		</div>
			

		<!-- Copywrite and Share -->
		<div id="copywrite">
			<div id="share">
				<div class="float_left" id="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.csnvaka.nu" data-text="Jag CSN-vakar, joina vettja!" data-count="horizontal" data-via="csnvaka">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div>
	            <div class="float_left" id="facebook"><div class="fb-like" data-href="http://csnvaka.nu/" data-send="false" data-layout="button_count" data-width="1" data-show-faces="false"></div></div>
	            <div class="float_left" id="google"><g:plusone size="medium" href="http://csnvaka.nu"></g:plusone></div>
			</div>
			<p>
				Ett projekt av 
	            <a href="http://albinhubsch.se" title="Öppna Albins portfolio i ett nytt fönster" target="_blank">Albin H&uuml;bsch</a>, 
	            <a href="http://www.arvidbrane.se/" title="Öppna Arvids portfolio i ett nytt fönster" target="_blank">Arvid Br&auml;ne</a> & 
	            <a href="http://www.andreasgrunewald.se" title="Öppna Andreas portfolio i ett nytt fönster" target="_blank">Andreas Gr&uuml;newald</a>. <br/>
	            <a href="https://github.com/Kodagrux/CSNvaka.nu" title="Öppna GitHub" target="_blank">Gaffla oss på GitHub</a>!
	        </p>
		</div>
		
		<!-- Statistics Layer -->
		<div id="stats-container">
			<canvas id="myChart"></canvas>
		</div>



	</body>

	<!-- Scripts -->
	<script src="js/HackTimer/HackTimer.min.js" type="text/javascript"></script>
	<!-- <script src="js/user-management.js" type="text/javascript"></script>-->
	<script src="js/jquery-min.js" type="text/javascript"></script>
	<script src="js/Chart/Chart.min.js"></script>
	<script src="js/jquery.knob.js" type="text/javascript"></script>
	<script src="js/jquery.throttle.js" type="text/javascript"></script>
	<script src="js/jquery.classycountdown.js" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>

</html>