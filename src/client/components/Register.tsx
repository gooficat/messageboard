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
			response.text().then((text) => {
				console.log(text);
				if (response.ok) {
					window.location.href = "/";
				} else {
					setError(text);
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
				<a className="text-center underline" href="/register">Register</a>
			</Form>
		</div>
	);
}

export default Register;
