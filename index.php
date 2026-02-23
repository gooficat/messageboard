<!DOCTYPE html>
<?php
$db = new SQLite3("MessageBoard.db");

$db->exec("CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT NOT NULL,
		email TEXT NOT NULL,
		password TEXT NOT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	)");
?>

<html>
	<head>
		<title>Hello</title>
	</head>
	<body>
<?php if (!isset($_COOKIE["USER_NAME"])) {
    header("Location: login.php");
} else {
    header("location: profile.php");
} ?>
	<body>
</html>
