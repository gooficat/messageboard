<!DOCTYPE html>
<?php
unset($_COOKIE["USER_ID"]);
unset($_COOKIE["USER_NAME"]);
?>
<html>
	<head>
		<title>Logged out</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<h1>Logged out</h1>
		<a href="login.php">Log in again</a>
	</body>
</html>
