function Post(props: {
	post: {
		user: { name: string; handle: string };
		content: string;
		date: string;
	};
}) {
	return (
		<div className="border-gray-600 border-b p-2">
			<div className="p-4 flex gap-2 items-center">
				<img src="https://placehold.co/48" className="rounded-full" />
				<div className="">
					<h1 className=" text-white font-bold">
						{props.post.user.name}
					</h1>
					<p className="text-gray-600">@{props.post.user.handle}</p>
				</div>
			</div>
			<hr className="border-gray-600" />
			<p className="text-gray-600 p-2">{props.post.content}</p>
			<div className="">{props.post.date}</div>
		</div>
	);
}

export default Post;
