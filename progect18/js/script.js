function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

//menu

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
			body.classList.toggle("_lock")
		}
	});
};

//end menu

//slider
new Swiper('.swiper-container', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	slidesPerView: 6,
	spaceBetween: 5,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});
