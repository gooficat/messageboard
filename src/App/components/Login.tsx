function Login() {
	return (
		<div>
			<h1>Login</h1>
			<form className="flex flex-col gap-2">
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
