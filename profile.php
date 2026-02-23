<!DOCTYPE html>
<?php session_start(); ?>
<html>
	<head>
		<title><?php echo $_COOKIE["USER_NAME"]; ?>'s profile</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	    <h2><?php echo $_COOKIE["USER_NAME"]; ?>'s profile</h2>
		<a href="logout.php">Log out</a>
	</body>
</html>
