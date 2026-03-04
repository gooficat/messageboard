import Login from "./components/Login";
import Post from "./components/Post";
import Register from "./components/Register";
import SideBar from "./components/SideBar";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
	Navigate,
} from "react-router-dom";
import "./index.css";
import Feed from "./components/Feed";
import { getSessionInfo } from "./session";

function RootRedirect() {
	return (
		<Route
			path="/"
			element={
				getSessionInfo().user.avatar !== "" ? (
					<Navigate to="/feed" />
				) : (
					<Navigate to="/login" />
				)
			}
		/>
	);
}

export function App() {
	return (
		<div className="flex w-full min-h-screen justify-around bg-black">
			<SideBar />
			<div className="block flex-4 min-w-lg max-w-xl justify-between border-l border-r border-gray-600">
				<BrowserRouter>
					<Routes>
						<RootRedirect />
						<Route path="/feed" element={<Feed />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</BrowserRouter>
			</div>
			<div className="flex-1" />
		</div>
	);
}

export default App;
