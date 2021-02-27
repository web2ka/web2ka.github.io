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
	let menu = document.querySelector(".menu__link");
	let body = document.querySelector("body");
	burger.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			body.classList.toggle("_lock")
		}
	});
	let list = document.querySelector(".menu__link");
	list.addEventListener("click", function (e) {
		if (unlock) {
			//body_lock(delay);
			burger.classList.toggle("_active");
			menu.classList.toggle("_active");
			body.classList.toggle("_lock")
		}
	});
};

//слайдер

let pageSlider = new Swiper('.page', {
	//свої класи
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	//вертикальний слайдер
	direction: 'vertical',

	//кількість слайдів для показу
	slidesPerView: 'auto',

	//керування клавіатурою
	keyboard: {
		enabled: true,

		onlyInViewport: true,

		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	watchOverflow: true,

	speed: 800,

	observer: true,

	observerParents: true,

	observerSliderChildren: true,

	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},

	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",

		draggable: true
	},

	init: false,

	//включаємо функцію виділення активного меню

	on: {
		init: function () {
			menuSlider()
		},

		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
	},
});

//виділення меню
let menuLinks = document.querySelectorAll('.menu__item');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault()
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__item._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

pageSlider.init();