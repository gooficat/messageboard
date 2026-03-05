function OnRegisterSubmit(event: React.SubmitEvent<HTMLFormElement>) {
	event.preventDefault();
	const data = new FormData(event.target as HTMLFormElement);
	const credentials = {
		username: data.get("username"),
		email: data.get("email"),
		password: data.get("password"),
	};
	fetch("/api/register", {
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

function Register() {
	return (
		<>
			<form onSubmit={OnRegisterSubmit}>
				<input type="text" name="username" />
				<input type="text" name="email" />
				<input type="password" name="password" />
				<button type="submit">Register</button>
			</form>
		</>
	);
}

export default Register;
