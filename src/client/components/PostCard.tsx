import { Component } from "react";

export type PostCardProps = {
	userName: string;
	userHandle: string;
	content: string;
};

export function PostCard({ userName, userHandle, content }: PostCardProps) {
	return (
		<div className="post-card bg-gray-500 rounded-2xl flex flex-col gap-4 p-4 drop-shadow-lg mb-4">
			<div className="post-card-header flex items-center gap-2">
				<img src="https://placehold.co/48" className="rounded-4xl" />
				<div className="post-card-user-info block">
					<h4 className="text-gray-300">{userName}</h4>
					<p className="text-xs text-gray-400">@{userHandle}</p>
				</div>
			</div>
			<hr className="border-gray-400" />
			<p className="post-card-content text-gray-200 text-xs">{content}</p>
		</div>
	);
}
