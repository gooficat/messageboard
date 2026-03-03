async function getPosts(from, num) {
	const response = await fetch("/api/profile", {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
			handle: new URL(window.location.href).searchParams.get("handle"),
			from: from,
			num: num,
		}),
	});
	const data = await response.json();
	if (data.success) {
		return { posts: data.posts, handle: data.handle };
	}
}

const profile = await getPosts(0, 10);
console.log(profile);

profile.posts.forEach((post) => {
	console.log(post);
});
