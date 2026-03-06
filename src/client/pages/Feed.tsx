function Feed() {
	const posts = ""; //fetch("/api/feed");
	return (
		<>
			<h1>Feed</h1>
			<a href="/create">Create Post</a>
			<br />
			<a href="/logout">Log out</a>
			{posts}
		</>
	);
}

export default Feed;
