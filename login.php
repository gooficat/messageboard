<!DOCTYPE html>
<html>
	<head>
<?php
	if ((isset($_SESSION['LOGGED_IN']) && $_SESSION['LOGGED_IN'] == true) || $_SERVER['REQUEST_METHOD'] != 'POST') {
		header("location: index.php");
		exit;
	}

	$db = new SQLite3("MessageBoard.db");	
?>

	<link rel="stylesheet" href="css/style.css">
	</head>
	<body>


	</body>
</html>
