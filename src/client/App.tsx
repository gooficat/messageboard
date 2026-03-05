import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Login from "./components/Login";
import Register from "./components/Register";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/feed" element={<>Feed</>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<></>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
