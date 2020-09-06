
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {

	slidesPerView: 1,
	loop: true,


  	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  },

  autoplay: {
  	delay: 2500,
  	disableOnInteraction: false,
  },


  breakpoints: {
        769: {
            slidesPerView: 2,
        }
    }
})



const animItems = document.querySelectorAll("._anim-items");

let rowTop 			= document.querySelector(".row-top");
let rowTopHight 	= rowTop.offsetHeight;

if (document.documentElement.clientWidth > 750){
	if(animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll (){
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;

				const animStart = 4;

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