import { html } from "../shared.js";

export class Post {
	constructor(props) {
		this.post = props.post;
	}

	render() {
		return html`<div
			id="Post"
			class="bg-gray-400 p-5 rounded-lg max-w-md gap-2 flex flex-col drop-shadow-lg"
		>
			<div class="post-header flex items-center gap-2 ">
				<img
					src="https://placehold.co/32x32"
					class="w-8 rounded-full"
				/>
				<div class="post-header-info">
					<h3 class="font-bold text-md">${this.post.user.name}</h3>
					<p class="text-xs">@${this.post.user.username}</p>
				</div>
			</div>
			<hr class="border-gray-300" />
			<div class="post-content">
				<p>${this.post.content}</p>
			</div>
			<div class="post-footer">
				<p class="text-xs">${this.post.timeStamp}</p>
			</div>
		</div>`;
	}
}
