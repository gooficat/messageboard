class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<h1>Message Board</h1>
<nav>
    <a href="index.html">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="login.html">Login</a>
</nav>
`;
  }
}

customElements.define("message-board-header", Header);
