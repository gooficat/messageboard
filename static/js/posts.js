export class Post extends HTMLElement {
	constructor() {
		super();
		this.postContent = document.createElement("div.post-content");
	}

	connectedCallback() {
		this.innerHTML = `
			<user-desc></user-desc>`;
		this.appendChild(this.postContent);
	}

	setContent(content) {
		this.postContent.innerText = content;
	}
}

export class PostList extends HTMLElement {
	static observedAttributes = ["posts"];
	constructor() {
		super();
		this.posts = [];
	}

	connectedCallback() {
		this.render();
	}

	updatePostsContent() {
		this.innerHTML = "";
		this.posts.forEach((post) => {
			const postEl = document.createElement("post-el");
			postEl.setContent(post.content);
			this.appendChild(postEl);
		});
	}

	render() {
		this.updatePostsContent();
	}

	addPost(post) {
		this.posts.push(post);
		this.render();
	}

	addPosts(posts) {
		this.posts = this.posts.concat(posts);
		this.render();
	}
}

customElements.define("post-el", Post);
customElements.define("post-list", PostList);
