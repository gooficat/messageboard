import type { PostType } from "@/shared/post";
import { useState } from "react";

function Post({ post }: { post: PostType }) {
	const [userName, setUserName] = useState<string>("");

	fetch(`/api/user?id=${post.user_id}`)
		.then((res) => res.json())
		.then((data) => setUserName(data.user.username));

	return (
		<div>
			<hr />
			<a href={`/profile?user=${userName}`}>@{userName}</a>
			<h3>{post.content}</h3>
			<hr />
			<h3>{post.created_at}</h3>
			<hr />
		</div>
	);
}

export { Post };
