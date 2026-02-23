<!DOCTYPE html>
<?php
session_start();

if (!isset($_COOKIE["USER_NAME"])) {
    header("Location: login.php");
}

$db = new SQLite3("MessageBoard.db");
?>

<html>
	<head>
		<title><?php echo $_COOKIE["USER_NAME"]; ?>'s profile</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	    <h2><?php echo $_COOKIE["USER_NAME"]; ?>'s profile</h2>
					<a href="post.php">Make a post</a>
		<a href="logout.php">Log out</a>
<?php
$fetch_posts_query = $db->prepare(
    "SELECT * FROM posts WHERE user_id = ? limit 10",
);
$fetch_posts_query->bindValue(1, $_COOKIE["USER_ID"]);
$posts = $fetch_posts_query->execute();
while ($post = $posts->fetchArray()) {
    echo "<div class='post'>";
    echo "<p>" . $post["content"] . "</p>";
    echo "<p>" . $post["created_at"] . "</p>";
    echo "</div>";
}
?>

	</body>
</html>
