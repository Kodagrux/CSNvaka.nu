<?php

?>
<!DOCTYPE html>
<html>
	<head>

		<!-- Meta -->
		<meta charset="utf-8" />
		<html lang="sv">
		<title>CSNvaka.nu | Nästa CSN-utbetalning kommer <?=$nextDate->date?></title>

		<!-- Favicon -->
		<link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32" />
		<link rel="icon" type="image/png" href="img/favicon-16x16.png" sizes="16x16" />
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="img/apple-touch-icon-57x57.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144x144.png" />
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href="img/apple-touch-icon-60x60.png" />
		<link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon-precomposed" sizes="76x76" href="img/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon-precomposed" sizes="152x152" href="img/apple-touch-icon-152x152.png" />
		<link rel="icon" type="image/png" href="img/favicon-196x196.png" sizes="196x196" />
		<link rel="icon" type="image/png" href="img/favicon-96x96.png" sizes="96x96" />
		<link rel="icon" type="image/png" href="img/favicon-128.png" sizes="128x128" />

		<meta name="msapplication-TileColor" content="#5396A6" />
		<meta name="msapplication-TileImage" content="img/mstile-144x144.png" />
		<meta name="msapplication-square70x70logo" content="img/mstile-70x70.png" />
		<meta name="msapplication-square150x150logo" content="img/mstile-150x150.png" />
		<meta name="msapplication-wide310x150logo" content="img/mstile-310x150.png" />
		<meta name="msapplication-square310x310logo" content="img/mstile-310x310.png" />


		<meta name="author" content="Arvid Bräne, Albin Hübsch, Andreas Grünewald" />
		<meta name="keywords" content="Money, Payday, CSN, csnvaka, Half Life 3, vaka, nedräkning, countdown, nästa, utbetalning, studiemedel, studielån, pengar, studiemedlet, datum, lån" />
		<meta name="description" content="Var med och vaka till nästa utbetalning av CSN den <?=$nextDate->date?>!" />
		<meta name="copyright" content="<?php echo date("Y"); ?>">
	
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-title" content="CSNvaka">
		<meta name="application-name" content="CSNvaka"/>

		<!-- Chrome, Firefox OS and Opera -->
		<meta name="theme-color" content="#5396A6">
		<!-- Windows Phone -->
		<meta name="msapplication-navbutton-color" content="#5396A6">
		<!-- iOS Safari -->
		<meta name="apple-mobile-web-app-status-bar-style" content="#5396A6">

		<!-- Facebook Open Graph tags -->
		<meta property="og:title" content="CSNvaka.nu | Nästa CSN-utbetalning kommer <?=$nextDate->date?>" />
		<meta property="og:site_name" content="CSNvaka.nu"/>
		<meta property="og:url" content="http://csnvaka.nu" />
		<meta property="og:description" content="Var med och vaka till nästa utbetalning av CSN den <?=$nextDate->date?>!" />
		<meta property="fb:app_id" content="[FB_APP_ID]" />
		<meta property="og:type" content="article" />


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
		<img id="logo" src="img/logo.png" alt="Logo"/>


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
	<script src="js/jquery-min.js" type="text/javascript"></script>
	<script src="js/Chart/Chart.min.js"></script>
	<script src="js/jquery.knob.js" type="text/javascript"></script>
	<script src="js/jquery.throttle.js" type="text/javascript"></script>
	<script src="js/jquery.classycountdown.min.js" type="text/javascript"></script>
	<script src="js/main.min.js" type="text/javascript"></script>

</html>