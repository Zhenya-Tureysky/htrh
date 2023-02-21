new Swiper('.info__swiper', {
	slidesPerView: 1,
  	spaceBetween: 30,
	navigation: {
		nextEl: '.info__button-prev',
	    prevEl: '.info__button-next',
	},
});

new Swiper('.possibilities__swiper', {
	slidesPerView: 3,
  	spaceBetween: 30,
	navigation: {
		nextEl: '.possibilities__button-prev',
	    prevEl: '.possibilities__button-next',
	},
	breakpoints: {
	    0: {
	        slidesPerView: 1,
	    },
	    800: {
	        slidesPerView: 2,
	    },
	    1250: {
	        slidesPerView: 3,
	    },
	},
});