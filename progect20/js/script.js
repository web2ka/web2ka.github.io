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
let burger = document.querySelector(".menu__burger");
if (burger != null) {
	let deley = 500;
	let head = document.querySelector(".header__head");
	let logo = document.querySelector(".header__logo");
	let menu_phone = document.querySelector(".menu__phone");
	let phone_contact = document.querySelector(".menu__phone-contact");
	let phone_icon = document.querySelector(".menu__phone-icon");
	let menu = document.querySelector(".menu__link");
	let body = document.querySelector("body");
	burger.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			head.classList.toggle("_active");
			logo.classList.toggle("_active");
			menu_phone.classList.toggle("_active");
			phone_contact.classList.toggle("_active");
			phone_icon.classList.toggle("_active");
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			//body.classList.toggle("_lock")
		}
	});
	let list = document.querySelector(".menu__link");
	list.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			head.classList.toggle("_active");
			logo.classList.toggle("_active");
			menu_phone.classList.toggle("_active");
			phone_contact.classList.toggle("_active");
			phone_icon.classList.toggle("_active");
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			//body.classList.toggle("_lock")
		}
	});
};

//slider

new Swiper('.services-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 3,
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
});

new Swiper('.car-park-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 4,
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},

		1100: {
			slidesPerView: 4,
		}
	},
});


new Swiper('.reviews-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 4,
	watchOverflow: true,
	spaceBetween: 30,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},

	},
});