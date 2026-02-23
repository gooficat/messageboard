<!DOCTYPE html>
<?php
	session_start();
?>
<html>
	<head>
		<title><?php echo $_SESSION["USER_NAME"]; ?>'s profile</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<a href="logout.php">Log out</a>
	</body>
</html>
