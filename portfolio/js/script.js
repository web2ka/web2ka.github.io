
let unlock = true;
let burger = document.querySelector(".navbar__burger");	

if (burger != null) {	
	let deley = 500;
	let menu = document.querySelector(".navbar__menu");
	let body = document.querySelector("body");
	burger.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			body.classList.toggle("_lock")
		}
	});
	let list = document.querySelector(".navbar__list");
	list.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			body.classList.toggle("_lock");
		}
	});
};