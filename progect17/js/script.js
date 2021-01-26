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

//---------------------------------

const animItems = document.querySelectorAll("._anim-items");//

let rowTop = document.querySelector(".row-top");
let rowTopHight = rowTop.offsetHeight;


if (animItems.length > 0) {//
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {//
		for (let index = 0; index < animItems.length; index++) {//
			const animItem = animItems[index];//
			const animItemHeight = animItem.offsetHeight;//
			const animItemOffset = offset(animItem).top;

			const animStart = 1;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			console.log(animItem);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				if (!animItem.classList.contains('fixed__container')) {
					animItem.classList.add('_fixed');

				} else {
					if (animItem.classList.contains('fixed__container') && pageYOffset > rowTopHight) {
						animItem.classList.add('_fixed');
					} else {
						animItem.classList.remove('_fixed');
					}
				}
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_fixed');
				}
				animItem.classList.remove('_fixed');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

/////////////////////////////////////////

// import Swiper JS


const swiper = new Swiper('.image-slider', {

	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	slidesPerView: 3,

	slidesPerGroup: 3,

	spaceBetween:30,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	}

})