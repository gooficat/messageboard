fetch("/api/feed", {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		handle: document.cookie.split("handle=")[1].split(";")[0],
	}),
})
	.then((response) => response.json())
	.then((data) => {
		const feed = document.getElementById("feed");
		data.forEach((message) => {
			const div = document.createElement("div");
			div.innerHTML = `
				<h3>${message.title}</h3>
				<p>${message.content}</p>
			`;
			feed.appendChild(div);
		});
	});
