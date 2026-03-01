export type UserBadgeProps = {
	userAvatar: string;
	userName: string;
	userHandle: string;
};

export function UserBadge({
	userAvatar,
	userName,
	userHandle,
}: UserBadgeProps) {
	return (
		<div id="UserBadge" className="flex items-center gap-2 p-4">
			<img src={userAvatar} className="rounded-full w-10 h-10" />
			<div className="block">
				<h3 className="font-bold text-sm text-white">{userName}</h3>
				<p className="text-xs text-gray-500">@{userHandle}</p>
			</div>
		</div>
	);
}
