export class NavMenu extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
				<a href="#">Home</a>
				<a href="#">Profile</a>
			`;
	}
}

export class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
				<img src="https://placehold.co/48" alt="Logo" class="logo">
		`;
		this.appendChild(document.createElement("nav-menu"));
	}
}
customElements.define("nav-menu", NavMenu);
customElements.define("header-el", Header);
