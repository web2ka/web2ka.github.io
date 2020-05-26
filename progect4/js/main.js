$(function(){

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></butoon',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></butoon',
		infinite: false,
	});

	$('select').styler();

	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});

});