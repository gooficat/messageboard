<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<h1>Welcome Back</h1>
		<h3>
			<?php try {
       if ($_SERVER["REQUEST_METHOD"] == "POST") {
           $db = new SQLite3("MessageBoard.db");

           $login_find_user_query = $db->prepare(
               "SELECT * FROM users WHERE username = ?",
           );
           $login_find_user_query->bindValue(1, $_POST["username"]);

           $login_find_user_result = $login_find_user_query->execute();

           $user_row = $login_find_user_result->fetchArray();
           if ($user_row) {
               if ($user_row["password"] != $_POST["password"]) {
                   echo "Incorrect password.";
               } else {
                   session_start();
                   setcookie(
                       "USER_ID",
                       $user_row["id"],
                       time() + 86400 * 30,
                       "/",
                   );
                   setcookie(
                       "USER_NAME",
                       $user_row["username"],
                       time() + 86400 * 30,
                       "/",
                   );
                   #$_COOKIE["USER_ID"] = $user_row["id"];
                   #$_COOKIE["USER_NAME"] = $user_row["username"];
                   header("location: profile.php");
               }
           } else {
               echo "Unknown username";
           }
       }
   } catch (Exception $e) {
       echo $e->getMessage();
   } ?>
		</h3>

		<form method="post">
			<input type="text" name="username">
			<input type="password" name="password">
			<input type="submit">
		</form>
		<a href="register.php">Register</a>
	</body>
</html>
