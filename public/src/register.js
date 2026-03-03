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
