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
	const you = params.get("user");
	if (!you) {
		const me = await cookieStore.get("user");
		if (me) {
			return me.value;
		}
		return null;
	}
	return you;
}

function Profile() {
	const [posts, setPosts] = useState<PostType[]>([]);
	const [followedUnfollowed, setFollowedUnfollowed] = useState<string>("");
	const [error, setError] = useState<string>("");
	const params = new URLSearchParams(window.location.href.split("?")[1]);

	useEffect(() => {
		const doFetch = async () => {
			const user = await getUserParam(params);
			const userId = (
				await (await fetch(`/api/user?name=${user}`)).json()
			).user.id;
			const myId = (await cookieStore.get("userId"))?.value;
			const res = await fetch(
				`/api/following?myId=${myId}&userId=${userId}`,
			);
			const json = await res.json();
			if (json.success) {
				setFollowedUnfollowed(json.followed ? "unfollow" : "follow");
			} else {
				setError(json.message);
			}
		};
		doFetch();
	}, []);

	const toggleFollow = () => {
		if (followedUnfollowed === "follow") {
			setFollowedUnfollowed("unfollow");
		} else {
			setFollowedUnfollowed("follow");
		}
	};

	const followUnfollow = async () => {
		const user = await getUserParam(params);
		const userId = (await (await fetch(`/api/user?name=${user}`)).json())
			.user.id;
		const sessionId = (await cookieStore.get("sessionId"))?.value;
		const myId = (await cookieStore.get("userId"))?.value;
		// console.log(userId, sessionId, myId);
		const res = await fetch(
			`/api/${followedUnfollowed}?` +
				`sessionId=${sessionId}` +
				`&myId=${myId}` +
				`&userId=${userId}`,
		);
		const json = await res.json();
		if (json.success) {
			toggleFollow();
		} else {
			setError(json.message);
		}
		// console.log(json);
	};

	useEffect(() => {
		getUserParam(params).then((user) => {
			if (!user) {
				window.location.href = "/login";
			} else {
				// console.log(user);
				getPosts(user as string, 0, 10).then(setPosts);
			}
		});
	}, []);

	return (
		<>
			<h1>Profile</h1>
			<a href="/">Home</a>
			<br />
			{error && <p className="pal-text-err">{error}</p>}
			<button onClick={followUnfollow}>{followedUnfollowed}</button>
			<ul>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</ul>
		</>
	);
}

export default Profile;
