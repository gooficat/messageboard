import { useState } from "react";
import { Form, FormEntry, FormSubmit } from "../components/Forms";

function Login() {
	const [error, setError] = useState("");

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
			response.json().then((json) => {
				if (json.success) {
					console.log(json.sessionId);
					cookieStore.set({ name: "sessionId", value: json.sessionId, path: "/" }).then(() => {
						cookieStore.get("sessionId").then((id) => console.log(id))
						window.location.href = "/";
					});
				} else {
					setError(json.message);
				}
			});
		});
	}

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Form onSubmit={OnLoginSubmit}>
				{<p className="pal-text-err">{error}</p>}
				<FormEntry name="username" />
				<FormEntry name="password" type="password" />
				<FormSubmit text="Login" />
				<a className="text-center underline" href="/register">Register</a>
			</Form>
		</div>
	);
}

export default Login;
