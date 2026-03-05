function OnLoginSubmit(event: React.SubmitEvent<HTMLFormElement>) {
	event.preventDefault();
	const data = new FormData(event.target as HTMLFormElement);
	const credentials = {
		username: data.get("username"),
		password: data.get("password"),
	};
	fetch("/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((response) => {
		response.text().then((text) => {
			console.log(text);
		});
	});
}

function Login() {
	return (
		<>
			<form onSubmit={OnLoginSubmit}>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<button type="submit">Login</button>
			</form>
		</>
	);
}

export default Login;
