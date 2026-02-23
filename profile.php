<!DOCTYPE html>
<?php
session_start();

if (!isset($_COOKIE["USER_NAME"])) {
    header("Location: login.php");
}

$db = new SQLite3("MessageBoard.db");

$url = $_SERVER["REQUEST_URI"];

$username = parse_url($url, PHP_URL_QUERY);
?>


<html>
	<head>
		<title><?php echo $username; ?>'s profile</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	    <h2><?php echo $username; ?>'s profile</h2>
					<a href="post.php">Make a post</a>
		<a href="logout.php">Log out</a>
<?php
$fetch_user_id_query = $db->prepare("SELECT id FROM users WHERE username = ?");
$fetch_user_id_query->bindValue(1, $username);

$fetch_user_id = $fetch_user_id_query->execute();
$fetch_user_id_array = $fetch_user_id->fetchArray();
if (!$fetch_user_id_array) {
    echo "<h2>User not found</h2>";
    exit();
} else {
    $user_id = $fetch_user_id_array[0];
}

$fetch_posts_query = $db->prepare(
    "SELECT * FROM posts WHERE user_id = ? limit 10",
);
$fetch_posts_query->bindValue(1, $user_id);
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
