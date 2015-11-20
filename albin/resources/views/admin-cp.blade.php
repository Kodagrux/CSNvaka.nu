<!DOCTYPE html>
<html>
<head>
	<title>CSNvaka admin</title>

	<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">

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
						<a href="#">csnvaka.nu</a>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<section class="container" style="margin-top: 30px;">
		<div class="row">
			<div class="col-md-5">
				<h1>Utbetalnigsdatum</h1>
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
									<a href="./edit/{{$date->id}}">
										<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>	
										Redigera
									</a> 
									<a href="./delete/{{$date->id}}" style="margin-left: 20px;">
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
</body>
</html>