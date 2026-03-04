function Register() {
	return (
		<div className="flex flex-col items-center text-gray-300 p-4">
			<h1 className="text-2xl font-bold">Register</h1>
			<form
				className="flex flex-col gap-2 p-4 max-w-sm"
				action="/api/user/register"
				method="POST"
			>
				<input
					type="text"
					name="username"
					placeholder="Username"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
				<button className="bg-emerald-700" type="submit">
					Register
				</button>
			</form>
			<a href="/login" className="text-sm underline">
				or Login here
			</a>
		</div>
	);
}

export default Register;
