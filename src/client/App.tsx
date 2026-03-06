import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function NavFromRoot() {
	if (0) {
		return <Navigate to="/feed" />
	}
	else {
		return <Navigate to="/login" />
	}
}

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={NavFromRoot()} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
