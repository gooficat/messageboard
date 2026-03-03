if (!document.cookie.split("handle=")[1].split(";")[0]) {
	window.location.replace("login.html");
}

const username = document.cookie.split("handle=")[1].split(";")[0];
console.log(document.cookie);
document.querySelectorAll(".content-username").forEach((element) => {
	element.textContent = username;
});
