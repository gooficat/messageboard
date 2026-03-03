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
		<div className="flex flex-col gap-2 p-4 w-full align-center">
			<SideNavItem label="Home" href="/" />
			<SideNavItem label="Search" href="/" />
			<SideNavItem label="Messages" href="/" />
		</div>
	);
}

function SideBar() {
	return (
		<div className="flex flex-col flex-1 bg-black justify-between p-4">
			<SideNav />
			<div className="p-4 flex gap-4">
				<img
					src="https://placehold.co/48/gray/black?text=P"
					alt=""
					className="rounded-full"
				/>
				<div className="block ">
					<h3 className="text-xl text-gray-300">User Name</h3>
					<p className="text-gray-600">@username</p>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
