import { render } from "https://esm.sh/preact";
import { html } from "./shared.js";

import { App } from "./App.js";

render(html`<${App} />`, document.body);
