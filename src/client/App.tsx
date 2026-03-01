import "./App.css";
import { Feed } from "./components/Feed";
import { PostCardProps, PostCard } from "./components/PostCard";
import { RightSideBar } from "./components/RightSideBar";
import { SideNavBar } from "./components/SideNavBar";

const Posts: PostCardProps[] = [
	{
		userName: "John Doe",
		userHandle: "johndoe",
		content: "Hello, World!",
	},
	{
		userName: "Goofy Cat",
		userHandle: "gooficat",
		content: "Hello everyone this isn't Markiplier",
	},
];

function App() {
	return (
		<div
			className="p-0 bg-gray-800 flex justify-between min-h-screen m-auto h-screen"
			id="App"
		>
			<SideNavBar />
			<Feed posts={Posts} />
			<RightSideBar />
		</div>
	);
}

export default App;
