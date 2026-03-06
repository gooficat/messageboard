import { useState } from "react";

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
			<form
				onSubmit={OnRegisterSubmit}
				className="flex-col flex max-w-sm gap-4"
			>
				{<p className="pal-text-err">{error}</p>}
				<input
					className="pal-bg-grey p-2 rounded-sm"
					type="text"
					name="username"
				/>
				<input
					className="pal-bg-grey p-2 rounded-sm"
					type="text"
					name="email"
				/>
				<input
					className="pal-bg-grey p-2 rounded-sm"
					type="password"
					name="password"
				/>
				<button
					className="pal-bg-highlight rounded-sm p-2"
					type="submit"
				>
					Register
				</button>
				<a className="text-center underline" href="/register">Register</a>
			</form>
		</div>
	);
}

export default Register;
