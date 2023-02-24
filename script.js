let menuBtn = document.getElementById("menu-icon");
let menu = document.querySelector(".header-nav");
let menuBg = document.querySelector(".login-form__div");

let close = (menuBtn, menu, menuBg) => {
	menuBtn.src = "./icon-menu.svg";
	menuBtn.classList.remove("opened");
	menu.style.display = "none";
	menuBg.style.display = "none";
	menuBtn.style.position = "static";
};

let open = (menuBtn, menu, menuBg) => {
	menuBtn.src = "./icon-menu-close.svg";
	menuBtn.classList.add("opened");
	menu.style.display = "flex";
	menuBtn.style.position = "fixed";
	menuBg.style.display = "block";
};

menuBtn.addEventListener("click", () => {
	if (menuBtn.classList.contains("opened")) {
		close(menuBtn, menu, menuBg);
		menuBtn.classList.add("closed");
	} else {
		open(menuBtn, menu, menuBg);
	}
});
