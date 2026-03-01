import { UserBadge } from "./UserBadge";

type SideNavBarItemProps = {
	name: string;
	link: string;
	logo: string;
};

export function SideNavBarItem({ name, link, logo }: SideNavBarItemProps) {
	return (
		<a
			href={link}
			className="gap-2 flex left-0 m-2 hover:bg-purple-600 p-2 rounded-4xl"
		>
			<img src={logo} className="rounded-4xl" />
			{name}
		</a>
	);
}

export function SideNavBar() {
	return (
		<div
			id="SideNavBar"
			className="flex-1 bg-linear-120  from-purple-800 to-purple-700 block h-screen"
		>
			<nav className="gap-4 p-4 text-white">
				<SideNavBarItem
					name="Home"
					logo="https://placehold.co/24"
					link="#"
				/>
				<SideNavBarItem
					name="Search"
					logo="https://placehold.co/24"
					link="#"
				/>
			</nav>
			<hr className="border-gray-600 m-2" />
			<UserBadge
				userAvatar="https://placehold.co/40"
				userName="Goofy Cat"
				userHandle="gooficat"
			/>
		</div>
	);
}
