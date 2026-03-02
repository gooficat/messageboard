import { html } from "../shared.js";
import { Post } from "./post.js";

export class Feed {
	constructor() {
		// test post
		this.posts = [
			{
				user: {
					name: "John Doe",
					username: "johndoe",
				},
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				timeStamp: "02/03/2026",
			},
		];
	}

	render() {
		return html`<div
			id="Feed"
			class="block p-4 bg-gray-500 min-h-screen flex-4"
		>
			${this.posts.map((post) => html`<${Post} post=${post} />`)}
		</div>`;
	}
}
