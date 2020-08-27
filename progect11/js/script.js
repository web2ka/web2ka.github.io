const animItems = document.querySelectorAll("._anim-items");


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
					animItem.classList.add('_fixed');
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


//const scroll = document.

//let rowTop 			= document.querySelector(".row-top");
//let rowTopHight 	= rowTop.offsetHeight;

//let rowBottom 		= document.querySelector(".row-bottom");
//let rowBottomHeight = rowBottom.offsetHeight;

//let scroll = rowBottom.scrollTop;
//window.addEventListener('scroll', update); 
//	function update() {
//  console.log(window.pageYOffset);
//	if (window.pageYOffset >= rowTopHight){
//		rowBottom.classList.toggle("_fixed");
//	} else {
//		rowBottom.classList.remove("_fixed");
//	}
//};