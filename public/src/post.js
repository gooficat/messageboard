const form = document.getElementById("post-form");
const bodyInput = form.querySelector("textarea");
const submitButton = form.querySelector("#submit");

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	const body = bodyInput.value;

	fetch("/api/post", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			handle: document.cookie.split(";")[0].split("=")[1],
			content: body,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success) {
				window.location.replace("/");
			} else {
				console.error(data.error);
			}
		});
});
