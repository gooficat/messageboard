class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<h1>Message Board</h1>
<nav>
    <a href="/">Home</a>
    <a href="login">Login</a>
</nav>
`;
  }
}

customElements.define("message-board-header", Header);
