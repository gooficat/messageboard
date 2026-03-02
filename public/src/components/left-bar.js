import { html } from "../shared.js";

class FeedNavItem {
	constructor(props) {
		this.props = props;
	}

	render() {
		return html`<div>
			<a href="${this.props.href}" class="px-4 py-2 text-gray-200"
				>${this.props.label}</a
			>
			<hr class="my-2 border-gray-300" />
		</div>`;
	}
}

export class LeftBar {
	render() {
		return html`<div
			id="left-bar"
			class="flex-1 bg-gray-400 block min-h-screen p-4 flex-col flex justify-between"
		>
			<div id="left-bar-nav">
				<${FeedNavItem} href="/" label="Home" />
				<${FeedNavItem} href="/search" label="Search" />
				<${FeedNavItem} href="/profile" label="Profile" />
			</div>

			<div id="left-bar-footer">
				<a href="/logout" class="px-4 py-2 text-gray-200">Logout</a>
			</div>
		</div>`;
	}
}
