<!DOCTYPE html>
<html>
<head>
	<title>CSNvaka admin</title>

	<link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">

</head>
<body>
	<section class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3 text-center">
				<h1>csnvaka admin</h1>
			</div>
		</div>
		<div class="row" style="margin-top:40px;">
			<form method="post" action="" class="col-md-4 col-sm-8 col-md-offset-4 col-sm-offset-2">
			  <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
			  <div class="form-group">
			    <label for="password">Password</label>
			    <input type="password" name="password" class="form-control" id="password" placeholder="Password">
			  </div>
			  <button type="submit" class="btn btn-default">Submit</button>
			</form>
		</div>
	</section>
</body>
</html>