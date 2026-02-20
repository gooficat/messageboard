class Icon extends HTMLElement {
	static observedAttributes = ["src"]

	constructor() {
		super()
		this.img = document.createElement("img")
	}

	connectedCallback() {
		this.img.src = this.getAttribute("src")
		this.appendChild(this.img)
	}
}


customElements.define("icon-el", Icon)
