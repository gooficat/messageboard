import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { type PostType } from "../../shared/post";

function Feed() {
	const [posts, setPosts] = useState<React.ReactNode[]>([]);

	const url = new URL("/api/feed", window.location.origin);

	let pageNumber = url.searchParams.get("page") ?? "0";
	const perPage = url.searchParams.get("perPage") ?? "10";

	useEffect(() => {
		fetch(`/api/feed?start=${pageNumber}&count=${perPage}`)
			.then((response) => response.json())
			.then((data) => {
				if (!data.success) {
					return;
				}
				setPosts(
					data.posts.map((post: PostType) => {
						return <Post key={post.id} post={post} />;
					}),
				);
			});
	}, [pageNumber, perPage]);

	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen p-4 gap-4 max-w-md mx-auto">
			<a href="/create">Create Post</a>
			<a href="/logout">Log out</a>
			<div className="block">{posts}</div>
		</div>
	);
}

export default Feed;
