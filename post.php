<!DOCTYPE html>
<?php
if (!isset($_COOKIE["USER_NAME"])) {
    header("Location: login.php");
}

$db = new SQLite3("MessageBoard.db");

$db->exec("CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $make_post_query = $db->prepare(
        "INSERT INTO posts (user_id, content) VALUES (?, ?)",
    );
    $make_post_query->bindValue(1, $_COOKIE["USER_ID"]);
    $make_post_query->bindValue(2, $_POST["content"]);
    $make_post_query->execute();

    header("Location: profile.php?" . $_COOKIE["USER_NAME"]);
}
?>
<html>
	<head>
		<title>Make a new post</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
 <h1>Make a new post</h1>
	    <form method="post">
			<textarea name="content" rows="8" cols="80"></textarea>
			<input type="submit" value="Post">
		</form>
	<body>
</html>
