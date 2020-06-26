$(document).ready(function(){
	$('.slider').slick();

$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');

	});

$('.header__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');

        });

});


