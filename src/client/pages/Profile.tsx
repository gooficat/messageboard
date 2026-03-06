import { useEffect, useState } from "react";
import { type PostType } from "@/shared/post";
import { Post } from "../components/Post";

async function getPosts(
	user: string,
	start: number,
	count: number,
): Promise<PostType[]> {
	const res = await fetch(
		`/api/profile?user=${user}&start=${start}&count=${count}`,
		{
			method: "GET",
		},
	);
	const json = await res.json();
	if (json.success) {
		return json.posts;
	} else {
		if (json.invalidSession) {
			window.location.href = "/login";
		}
		return [];
	}
}

async function getUserParam(params: URLSearchParams) {
	return (
		params.get("user") ??
		((await cookieStore.get("username")) ?? { value: null }).value
	);
}

function Profile() {
	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		const params = new URLSearchParams(window.location.href.split("?")[1]);
		getUserParam(params).then((user) => {
			if (!user) {
				window.location.href = "/login";
			} else {
				console.log(user);
				getPosts(user as string, 0, 10).then(setPosts);
			}
		});
	}, []);

	return (
		<>
			<h1>Profile</h1>
			<ul>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</ul>
		</>
	);
}

export default Profile;
