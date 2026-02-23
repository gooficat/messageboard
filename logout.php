<!DOCTYPE html>
<?php
session_start();
setcookie("USER_ID", "", time() - 3600);
setcookie("USER_NAME", "", time() - 3600);

session_unset();
session_destroy();
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
