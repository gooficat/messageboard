<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
	</head>
	<body>
		<h1>Welcome Back</h1>
		<h3>

			<?php

				try {
					
				} catch (Exception $e) {
					echo $e->getMessage();
				}

			?>
		</h3>

		<form method="post">
			<input type="text" name="username">
			<input type="password" name="password">
			<input type="submit">
		</form>	
	</body>
</html>
