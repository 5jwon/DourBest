new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    autoplay : true,
    loop:true,
});


new Swiper(".swiper2", {
	slidesPerView: 1,
	spaceBetween: 10,
	loopAdditionalSlides : 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	lazy : {
		loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
	},
	breakpoints: {
		400: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	},
	
});
1


new Swiper(".review", {
    pagination: {
		el: ".swiper-pagination",
		draggable: true,
	},
});