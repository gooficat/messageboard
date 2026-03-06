import { useState } from "react";
import { Post } from "../components/Post";
import { type PostType } from "../../shared/post";

function Feed() {
	const [posts, setPosts] = useState<PostType[]>([]);

	const url = new URL("/api/feed", window.location.origin);

	let pageNumber = url.searchParams.get("page") ?? "0";
	const perPage = url.searchParams.get("perPage") ?? "10";

	fetch(`/api/feed?start=${pageNumber}&count=${perPage}`)
		.then((response) => response.json())
		.then((data) => {
			setPosts(
				data.posts.map((post: PostType) => {
					return <Post key={post.id} post={post} />;
				}),
			);
		});
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
