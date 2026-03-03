document.getElementById("submit").addEventListener("click", () => {
	const handle = document.getElementById("handle").value;
	const password = document.getElementById("password").value;
	fetch("/api/login", {
		method: "POST",
		body: JSON.stringify({ handle, password }),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.success) {
				document.cookie = `handle=${handle}; path=/;`;
				window.location.replace("/");
				console.log("Yo");
			} else {
				alert(json.error);
			}
		});
});
