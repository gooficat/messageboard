<!DOCTYPE html>
<html>
	<head>
		<title>Register</title>
	</head>
	<body>
		<h1>Welcome</h1>

<h3>

<?php

try {
	if ($_SERVER['REQUEST_METHOD'] == "POST") {
		$db = new SQLite3("MessageBoard.db");

		$register_check_exist_query = $db->prepare("SELECT * FROM users WHERE email = ?");
		$register_check_exist_query->bindValue(1, $_POST["email"]);

		if ($register_check_exist_query->execute()->fetchArray()) {
			echo "Error: Email already in use.";
		}
		else {
			echo "Sign up message";
		}
	}
	else {
		
	}


} catch (Exception $e) {
	echo $e->getMessage();
}

?>
</h3>

		<form method="post">
			<input type="text" name="email" placeholder="email">
			<input type="text" name="username">
			<input type="password" name="password">
			<input type="submit">
		</form>	
	</body>
</html>
