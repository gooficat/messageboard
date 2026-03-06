import { useState } from "react";

type PostType = {
	user_id: number;
	content: string;
	created_at: string;
};

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
	const [posts, setPosts] = useState();
	const params = new URLSearchParams(window.location.href.split("?")[1]);

	getUserParam(params).then((user) => {
		if (!user) {
			window.location.href = "/login";
		} else {
			console.log(user);
			getPosts(user as string, 0, 10).then((posts) => {
				// setPosts();

				posts.forEach((post) => {
					console.log(
						`${post.user_id}, ${post.content}, ${post.created_at}`,
					);
				});
			});
		}
	});

	return (
		<>
			<h1>Profile</h1>
			<ul>{posts}</ul>
		</>
	);
}

export default Profile;
