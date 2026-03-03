import { getSessionInfo } from "../session";

function SideNavItem(props: { label: string; href: string }) {
	return (
		<a
			href={props.href}
			className="text-gray-600 text-xl w-full border-gray-600 border-solid border-b font-bold p-2"
		>
			<div className="flex flex-row gap-2">
				<img
					src="https://placehold.co/32/transparent/fff?text=>>"
					alt=""
					className="rounded-full"
				/>
				{props.label}
			</div>
		</a>
	);
}

function SideNav() {
	return (
		<div className="flex flex-col gap-2 p-4 sticky top-0 align-center">
			<SideNavItem label="Home" href="/" />
			{/*<SideNavItem label="Search" href="/" />*/}
			{/*<SideNavItem label="Messages" href="/" />*/}
		</div>
	);
}

function SideBar() {
	return (
		<div className="flex flex-col max-h-screen sticky top-0 flex-1 bg-black justify-between p-4">
			<SideNav />
			<div className="p-4 flex gap-4">
				<img
					src={getSessionInfo().user.avatar}
					alt=""
					className="rounded-full w-12 h-12"
				/>
				<div className="block">
					<a href="/profile" className="text-xl text-gray-300">
						{getSessionInfo().user.name}
					</a>
					<p className="text-gray-600">
						@{getSessionInfo().user.handle}
					</p>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
