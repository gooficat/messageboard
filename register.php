<!DOCTYPE html>
<html>
	<head>
<?php
	if (isset($_SESSION["LOGGED_IN"]) || $_SERVER['REQUEST_METHOD'] != 'POST') {
		header("location: index.php");
		exit;
	}

	$db = new SQLite3("MessageBoard.db");
	
	$_SESSION["USER_NAME"] = $_POST["name"];
	
	$check_exists_q = $db->prepare('SELECT * FROM users WHERE name = ?');
	$check_exists_q->bindValue(1, $_POST["name"], SQLITE3_TEXT);
	
	$existing_users = $check_exists_q->execute();
	
	$users_row = $existing_users->fetchArray(SQLITE3_NUM);

	if ($users_row != false) {
		header("location: index.php");
		exit;
	}
	
	$insert_q = $db->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');

	$insert_q->bindValue(1, $_POST['name'], SQLITE3_TEXT);
	$insert_q->bindValue(2, $_POST['email'], SQLITE3_TEXT);
	$insert_q->bindValue(3, $_POST['password'], SQLITE3_TEXT);

	$insert_q->execute();	

	$db->close();
?>

	<link rel="stylesheet" href="css/style.css">
	</head>
	<body>

	<h1><?php echo $_SESSION["USER_NAME"]; ?></h1>

	</body>
</html>
