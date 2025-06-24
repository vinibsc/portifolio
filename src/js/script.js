const swiper = new Swiper ('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


    breakpoints: {
    0:{
        slidesPerView: 1
    },
    760: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }

  

});

console.log("Swiper initialized");