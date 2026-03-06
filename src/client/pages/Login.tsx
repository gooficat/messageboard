import { useState } from "react";
import { Form, FormEntry, FormSubmit, storeUser } from "../components/Forms";

function Login() {
	const [error, setError] = useState("");

	async function OnLoginSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		const credentials = {
			username: data.get("username"),
			password: data.get("password"),
		};
		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});
		const json = await response.json();
		if (json.success) {
			storeUser(json);
			window.location.replace("/");
		} else {
			setError(json.message);
		}
	}

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Form onSubmit={OnLoginSubmit}>
				{<p className="pal-text-err">{error}</p>}
				<FormEntry name="username" />
				<FormEntry name="password" type="password" />
				<FormSubmit text="Login" />
				<a className="text-center underline" href="/register">
					Register
				</a>
			</Form>
		</div>
	);
}

export default Login;
