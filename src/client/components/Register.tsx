import { useState } from "react";
import { Form, FormEntry, FormSubmit } from "./Forms";

function Register() {
	const [error, setError] = useState("");

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
			response.json().then((json) => {
				console.log(json);
				if (json.success) {
					cookieStore.set({ name: "sessionId", value: json.sessionId, path: "/" });
					console.log(document.cookie);
					window.location.href = "/";
				} else {
					setError(json.message);
				}
			});
		});
	}

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Form onSubmit={OnRegisterSubmit}>
				{<p className="pal-text-err">{error}</p>}
				<FormEntry name="username" />
				<FormEntry name="email" type="email" />
				<FormEntry name="password" type="password" />
				<FormSubmit text="Register" />
				<a className="text-center underline" href="/login">Login</a>
			</Form>
		</div>
	);
}

export default Register;
