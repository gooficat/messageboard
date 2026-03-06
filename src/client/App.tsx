import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Logout from "./pages/Logout";

function NavFromRoot() {
	cookieStore.get("sessionId").then((cookie) => {
		if (cookie !== null) {
			window.location.href = "/feed";
		}
		else {
			window.location.href = "/login";
		}
	});
	return <></>
}

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavFromRoot />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
