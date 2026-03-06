import type { PostType } from "@/shared/post";
import { useState } from "react";

function Post({ post }: { post: PostType }) {
	const [userName, setUserName] = useState<string>("");

	fetch(`/api/user?id=${post.user_id}`)
		.then((res) => res.json())
		.then((data) => setUserName(data.user.username));

	return (
		<div className="pal-bg-grey p-6 rounded-lg mb-4 flex flex-col gap-2 h-lg">
			<a
				className="font-bold pal-text-highlight"
				href={`/profile?user=${userName}`}
			>
				@{userName}
			</a>
			{/*<hr />*/}
			<h3>{post.content}</h3>
			{/*<hr />*/}
			<p className="text-xs text-right pal-text-black">
				{post.created_at}
			</p>
		</div>
	);
}

export { Post };
