import Post from "./components/Post";
import SideBar from "./components/SideBar";
import "./index.css";

const testPosts = [
	{
		user: {
			name: "Goofy Cat",
			handle: "gooficat",
		},
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus lorem nec diam consectetur mattis. Etiam pulvinar sem id dapibus ornare. Donec vulputate, justo ac accumsan sagittis, ligula augue ullamcorper purus, eget auctor nunc lectus in turpis. Aliquam nec felis massa. Vestibulum et orci in ante pulvinar fermentum ut bibendum est. Nulla mattis, massa ac luctus fringilla, urna sem rhoncus nisl, a ultrices tellus elit sed libero. Ut hendrerit, arcu eget pharetra dapibus, turpis leo bibendum orci, quis elementum nunc mi quis leo. Integer porta vestibulum nisl, at porttitor mi facilisis malesuada.",
		date: "24/12/2025",
	},
	{
		user: {
			name: "Goofier Cat",
			handle: "goofiercat",
		},
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus lorem nec diam consectetur mattis. Etiam pulvinar sem id dapibus ornare. Donec vulputate, justo ac accumsan sagittis, ligula augue ullamcorper purus, eget auctor nunc lectus in turpis. Aliquam nec felis massa. Vestibulum et orci in ante pulvinar fermentum ut bibendum est. Nulla mattis, massa ac luctus fringilla, urna sem rhoncus nisl, a ultrices tellus elit sed libero. Ut hendrerit, arcu eget pharetra dapibus, turpis leo bibendum orci, quis elementum nunc mi quis leo. Integer porta vestibulum nisl, at porttitor mi facilisis malesuada.",
		date: "24/12/2024",
	},
];

function Content() {
	return (
		<div className="block flex-4 min-w-lg max-w-xl bg-black justify-between border-l border-r border-gray-600">
			{testPosts.map((post, index) => (
				<Post post={post} key={index} />
			))}
		</div>
	);
}

export function App() {
	return (
		<div className="flex w-full h-full justify-around">
			<SideBar />
			<Content />
			<div className="flex-1 bg-black" /*placeholder*/></div>
		</div>
	);
}

export default App;
