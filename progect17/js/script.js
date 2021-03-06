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


//---------------------------------фіксація меню
let headerElement = document.querySelector(".header");
let headElement = document.querySelector(".head__wrapper");
let animItems = document.querySelector("._anim-items");

if (animItems != 0){
	window.addEventListener('scroll', scrollFixed);

	function scrollFixed () {

		let headHight = headElement.offsetHeight; //висота фіксованого педера (зізна на різнихї пристроях)
		console.log(headHight + " - висота хедера");

		let animItemsHeight = animItems.offsetHeight; //висота  меню
		console.log(animItemsHeight + " - висота меню");

		animItemsOffset = offset(animItems).top; //позиція елемента фіксації зверху
		console.log(animItemsOffset + " - позиція елемента фіксації");

		let yofset = pageYOffset;
		console.log(yofset + " - пройдений скрол");
		if (pageYOffset >= (animItemsOffset - headHight)) {
			animItems.classList.add('_fixed');
			headerElement.classList.add('fixed__wrapper');
		}
		
		if (pageYOffset <= 140)
			{
				animItems.classList.remove('_fixed');
				headerElement.classList.remove('fixed__wrapper');
			}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	scrollFixed();
}
/////////////////////////////////////////

// import Swiper JS

new Swiper('.about-index-slider', {

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

	slidesPerView: 1,

	slidesPerGroup: 1,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});

new Swiper('.topprog-slider', {
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
	slidesPerView: 1,
	slidesPerGroup: 1,
})


new Swiper('.image-slider', {

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

	spaceBetween:17,

	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},

		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},

		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	}

})

new Swiper('.video-slider', {

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

	slidesPerView: 2,
	slidesPerGroup: 2,

	//slidesPerGroup: 3,

	spaceBetween: 17,

	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},

		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},

		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	}
})

new Swiper('.reviews-slider', {

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

	spaceBetween: 30,

	//autoHeight: true,

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


new Swiper('.video-reviews-slider',{

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

	slidesPerView: 2,

	spaceBetween: 30,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 1,
		},

		992: {
			slidesPerView: 2,
		},
	}
})

//////filter

$(function(){
	let filter = $("[data-filter]");
	filter.on("click", function(event) {
		event.preventDefault();
		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {

				let itemAnim = $(this).data('cat');

				if (itemAnim != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}

			});
		}

	});
});

//////////////////////////////
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	let clock = document.getElementById(id);
	let daysSpan = clock.querySelector('.days');
	let hoursSpan = clock.querySelector('.hours');
	let minutesSpan = clock.querySelector('.minutes');
	let secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		let t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);


//filter button
let filterLink = document.querySelectorAll("._filter");
for (let index = 0; index < filterLink.length; index++){
	let link = filterLink[index];
	link.addEventListener("click", function (e) {
		for (let index = 0; index < filterLink.length; index++) {
			let link = filterLink[index];
			link.classList.remove("_activ")
		}
		link.classList.add("_activ");
	});
};