const slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper(slider, {
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 10,

        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
})