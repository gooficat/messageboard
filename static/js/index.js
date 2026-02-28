import "./header.js";
import "./posts.js";

const postList = document.createElement("post-list");

document.body.appendChild(document.createElement("header-el"));
document.body.appendChild(postList);

postList.addPosts([
	{ content: "Hello, world" },
	{ content: "Hello, world 2!" },
]);
