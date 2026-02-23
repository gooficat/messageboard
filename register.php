<!DOCTYPE html>
<html>
	<head>
<?php
	session_start();

	if ($_SESSION["LOGGED_IN"] || $_SERVER['REQUEST_METHOD'] != 'POST') {
		echo "<script>
				window.location.href = '.';
			</script>";
		exit;
	}

	$db = new SQLite3("MessageBoard.db");
	
	

?>

	<link rel="stylesheet" href="css/style.css">
	</head>
	<body>


	</body>
</html>
