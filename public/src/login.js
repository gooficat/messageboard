import { render } from "https://esm.sh/preact";
import { html } from "./shared.js";
import { InputText } from "./components/input-text.js";

class FormTextBox {
	constructor(props) {
		this.props = props;
	}

	render() {
		return html`<input type="text" ...${props} />`;
	}
}

render(
	html`<div
		id="App"
		class="flex flex-col items-center gap-4 justify-center h-screen bg-gray-600"
	>
		<form
			method="POST"
			action="/login"
			class="flex flex-col w-sm p-4 gap-4 bg-gray-500 rounded-xl"
		>
			<${InputText} placeholder="Username" name="username" />
			<${InputText}
				placeholder="Password"
				name="password"
				type="password"
			/>

			<button type="submit">Login</button>
		</form>
	</div>`,
	document.body,
);
