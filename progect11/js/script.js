
 const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {

	slidesPerView: 1,
	spaceBetween: 10,

	navigation: {
    	nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        769: {
            slidesPerView: 2,
        }
    }
})

  /* var galleryThumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

    });


    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },


      thumbs: {
        swiper: galleryThumbs
      }
 });
 */



//menu

let unlock = true;
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

const animItems = document.querySelectorAll("._anim-items");

let rowTop 			= document.querySelector(".row-top");
let rowTopHight 	= rowTop.offsetHeight;


	if(animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll (){
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;

				const animStart = 7;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				console.log(animItem);

					if (animItemHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animStart;
					}

					if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
						if (!animItem.classList.contains('fixed__container')){
							animItem.classList.add('_fixed');
						
						} else {
							if (animItem.classList.contains('fixed__container') && pageYOffset > rowTopHight){
								animItem.classList.add('_fixed');
							} else 
									{
									animItem.classList.remove('_fixed');
									}
						}
					}else{
						if (!animItem.classList.contains('_anim-no-hide')) {
							animItem.classList.remove('_fixed');	
						}
						//animItem.classList.remove('_fixed');
					}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
		animOnScroll();
	}



function filter() {

	/*filter */
	let filter = document.querySelector("[data-filter]");

	filter.on("click", function(event){
		event.preventDefault();

		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function() {
				let workCat = $(this).data('cat');
				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			})
		}

	});
};


