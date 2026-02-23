<!DOCTYPE html>
<?php
	session_start();
	try {
		$db = new SQLite3('MessageBoard.db');

		$db->close();

	} catch (Exception $e) {
		echo "Error: " . $e->getMessage();
	}
?>
<html>
	<head>
		<title>Message Board</title>
		<link rel="stylesheet" href="css/style.css"/>
	</head>
	<body>
		<h1>Hello</h1>
		<form action="register.php" method="POST">
			<div class="form-group">
				<label>Username</label>
				<input type="text" name="name" class="form-entry">
				<label>Email</label>
				<input type="text" name="email" class="form-entry">
				<label>Password</label>
				<input type="password" name="password" class="form-entry">
				<input type="submit" class="button-go">
			</div>
		</form>
	</body>
</html>
