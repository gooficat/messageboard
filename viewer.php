<!DOCTYPE html>

<?php
session_start();

if (!isset($_COOKIE["USER_NAME"])) {
    header("Location: login.php");
}

$db = new SQLite3("MessageBoard.db");

$url = $_SERVER["REQUEST_URI"];

$post_id = parse_url($url, PHP_URL_QUERY);

if (!isset($post_id)) {
    header("Location: index.php");
}
?>

<html>
<head>
    <title>Message Board</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <br><br>
    <div class="post">
        <?php
        $post = $db->querySingle(
            "SELECT * FROM posts WHERE id = $post_id",
            true,
        );
        echo "<div class=\"post\">";
        echo "<p>" . $post["content"] . "</p>";
        echo "<p>" . $post["created_at"] . "</p>";
        echo "</div>";
        ?>
    </div>
<?php
$find_user_query = $db->prepare("SELECT * FROM users WHERE id = :id");
$find_user_query->bindValue(":id", $post["user_id"]);
$user = $find_user_query->execute()->fetchArray();

echo "<a href=\"user.php?id=" .
    $post["user_id"] .
    "\">Go to " .
    $user["username"] .
    "'s profile</a>";
?>
</body>

</html>
