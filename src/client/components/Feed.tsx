import { PostCard, PostCardProps } from "./PostCard";

import { Component } from "react";

const testContent: string = "Hello, World!";

type FeedProps = {
	posts: PostCardProps[];
};

export function Feed({ posts }: FeedProps) {
	return (
		<div id="Feed" className="flex-3 bg-gray-400 p-4">
			{posts.map((post, index) => (
				<PostCard key={index} {...post} />
			))}
		</div>
	);
}
