class SideBar extends HTMLElement {
	static observedAttributes = ["src"]

	constructor() {
		super()
		// this.innerText = "Hello"
	}
}

class ClickableIcon extends HTMLElement {
	constructor() {
		super()
		this.img = document.createElement("img")
	}

	connectedCallback() {
		this.img.src = this.getAttribute("src")
		this.appendChild(this.img)
	}
}

window.customElements.define("side-bar", SideBar)
window.customElements.define("clickable-icon", ClickableIcon)

