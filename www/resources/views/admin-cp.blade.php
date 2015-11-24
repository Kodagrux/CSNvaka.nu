<!DOCTYPE html>
<html>
<head>
	<title>CSNvaka admin</title>

	<link rel="stylesheet" href="{{{ url() }}}/bootstrap/css/bootstrap.min.css">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

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

		.navbar-top h1{
			font-size: 12px;
			color: white;
			padding: 0;
			margin: 0;
		}
	</style>

</head>
<body>
	<header class="navbar-top">
		<div class="container">
			<div class="row">
				<div class="col-xs-6">
					<nav class="navbar-header navbar-left">
						<h1>CSNVAKA Admin</h1>
					</nav>
				</div>
				<div class="col-xs-3 navbar-right">
					<nav class="navbar-header navbar-right">
						<a href="{{{ url() }}}">csnvaka.nu</a>
					</nav>
				</div>
			</div>
		</div>
	</header>
	
	<!-- Editera datum -->
	@if(isset($paydate))
	<section class="container" style="margin-top: 30px;">
		<div class="row">
			<div class="col-md-5">
				<h1>Redigera datum</h1>
			</div>
		</div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-md-12">
				<form action="" method="post" class="form-inline">
					<input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
					<div class="form-group">
						<label class="sr-only" for="datum">Datum</label>
						<input type="date" class="form-control" id="datum" name="date" placeholder="Datum" value="{{{$paydate->date}}}">
					</div>
					<button type="submit" class="btn btn-default">Uppdatera</button>
				</form>
			</div>
		</div>
	</section>
	@endif

	<!-- UTBETALNINGSDATUM -->
	@if(isset($dates))
	<section class="container" style="margin-top: 30px;">
		<div class="row">
			<div class="col-md-8">
				<h1 class="text-left">Kommande utbetalnigsdatum</h1>
			</div>
			<div class="col-md-4" style="padding-top:36px;">
				<a class="btn btn-default pull-right" style="margin:0 4px;" href="{{{ url() }}}/admin/cp/generate" role="button">Autogenerera datum</a>
				<a class="btn btn-default pull-right" style="margin:0 4px;" href="{{{ url() }}}/admin/cp/add" role="button">Lägg till datum</a>
			</div>
		</div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-md-12">
				<table class="table table-hover table-striped">
					<thead>
						<tr>
							<th>#id</th>
							<th>Datum</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						@foreach($dates as $date)
							<tr>
								<th>{{ $date->id }}</th>
								<td>{{ $date->date }}</td>
								<td class="text-right">
									<a href="{{{ url() }}}/admin/cp/edit/{{$date->id}}">
										<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>	
										Redigera
									</a> 
									<a href="{{{ url() }}}/admin/cp/delete/{{$date->id}}" style="margin-left: 20px;">
										<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>	
										Ta bort
									</a>
								</td>
							</tr>
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
	</section>
	@endif
</body>
</html>