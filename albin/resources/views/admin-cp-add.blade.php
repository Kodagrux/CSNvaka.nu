<!DOCTYPE html>
<html>
<head>
	<title>CSNvaka admin</title>

	<link rel="stylesheet" href="{{{ url() }}}/bootstrap/css/bootstrap.min.css">

	<style>
		header{
			background: #333;
		}

		header a{
			display: block;
			padding: 14px 14px;
			float: left;
		}

		header a:hover{
			text-decoration: none;
			background: #222;
		}
	</style>

</head>
<body>
	<header class="navbar-top">
		<div class="container">
			<div class="row">
				<div class="col-xs-3 navbar-right">
					<nav class="navbar-header navbar-right">
						<a href="{{{ url() }}}">csnvaka.nu</a>
					</nav>
				</div>
			</div>
		</div>
	</header>

	<section class="container" style="margin-top: 30px;">
		<div class="row">
			<div class="col-md-5">
				<h1>Lägg till datum</h1>
			</div>
		</div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-md-12">
				<form action="" method="post" class="form-inline">
					<input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
					<div class="form-group">
						<label class="sr-only" for="exampleInputEmail3">Datum</label>
						<input type="date" class="form-control" id="datum" name="date" placeholder="Datum">
					</div>
					<button type="submit" class="btn btn-default">Lägg till</button>
				</form>
			</div>
		</div>
	</section>
</body>
</html>