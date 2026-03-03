import { html } from "../shared.js";

export class InputText {
	constructor(props) {
		this.props = props;
	}

	render() {
		return html`<input
			type="text"
			...${this.props}
			class="border-1 rounded-sm border-gray-400 p-1 text-center"
		/>`;
	}
}
