document
	.querySelector("input#password_confirm")
	.addEventListener("input", () => {
		if (
			document.querySelector('input[name="password"]').textContent !=
			document.querySelector("input#password_confirm").textContent
		) {
			document.querySelector('input[type="submit"]').disabled = true;
		} else {
			document.querySelector('input[type="submit"]').disabled = false;
		}
	});

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	const handle = document.querySelector('input[name="handle"]').value;
	const password = document.querySelector('input[name="password"]').value;
	const passwordConfirm = document.querySelector(
		'input[id="password_confirm"]',
	).value;
	if (password !== passwordConfirm) {
		alert("Passwords do not match");
		return;
	}
	const name = document.querySelector('input[name="name"]').value;
	const email = document.querySelector('input[name="email"]').value;
	const data = {
		handle: handle,
		email: email,
		name: name,
		password: password,
	};
	fetch("/api/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.success) {
				document.cookie = `handle=${handle}; path=/;`;
				window.location.replace("/");
			} else {
				alert(data.error);
			}
		});
});
