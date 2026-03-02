import { render } from "https://esm.sh/preact";
import { html } from "./shared.js";
import { LeftBar } from "./components/left-bar.js";
import { Feed } from "./components/feed.js";

render(
	html`<div id="App" class="flex">
		<${LeftBar} />
		<${Feed} />
	</div>`,
	document.body,
);
