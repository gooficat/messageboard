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
							$register_check_exist_query_username = $db->prepare("SELECT * FROM users WHERE username = ?");
							$register_check_exist_query_username->bindValue(1, $_POST["username"]);
							if ($register_check_exist_query_username->execute()->fetchArray()) {
								echo "Error: Username already in use.";
							}
							else {
								echo "Sign up message";
								$register_query = $db->prepare("INSERT INTO USERS (email, username, password) VALUES (?, ?, ?)");
								$register_query->bindValue(1, $_POST["email"]);
								$register_query->bindValue(2, $_POST["username"]);
								$register_query->bindValue(3, $_POST["password"]);
								
								$register_result = $register_query->execute();
							}
						}
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
