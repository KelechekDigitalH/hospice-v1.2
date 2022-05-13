/*******Burger******/


document.querySelector('.burger').addEventListener('click', function () {
	mainBg.classList.toggle("main-bg");
	document.querySelector('.burger', '.menu').classList.toggle('active');
	document.querySelector('.menu').classList.toggle("open");
});
// END BURGER SCRIPTS


// NEED HELP PAGE SCRIPTS
const accordionHeader = document.querySelectorAll('.programs-first-kids-hospice__inner__all-accordions__accordion__header');

accordionHeader.forEach(accordionHeader => {
	accordionHeader.addEventListener('click', event => {
		const currentActiveHeader = document.querySelector('.programs-first-kids-hospice__inner__all-accordions__accordion__header.active');
		if (currentActiveHeader && currentActiveHeader !== accordionHeader) {
			currentActiveHeader.classList.toggle('active');
			currentActiveHeader.nextElementSibling.style.maxHeight = 0;
		}

		accordionHeader.classList.toggle('active');
		const accordionBody = accordionHeader.nextElementSibling;

		if (accordionHeader.classList.contains('active')) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
		} else {
			accordionBody.style.maxHeight = 0;
		}
	});
});
// END NEED HELP PAGE SCRIPTS


// LEGAL-ENTITY PAGE SCRIPTS
// const accordionEntity = document.querySelectorAll('.blc-programs-toggle__inner__all-accordions__accordion__header');

// accordionEntity.forEach(accordionEntity => {
// 	accordionEntity.addEventListener('click', event => {
// 		const currentActiveHeader = document.querySelector('.blc-programs-toggle__inner__all-accordions__accordion__header.active');
// 		if (currentActiveHeader && currentActiveHeader !== accordionEntity) {
// 			currentActiveHeader.classList.toggle('active');
// 			currentActiveHeader.nextElementSibling.style.maxHeight = 0;
// 		}

// 		accordionEntity.classList.toggle('active');
// 		const accordionBody = accordionEntity.nextElementSibling;

// 		if (accordionEntity.classList.contains('active')) {
// 			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
// 		} else {
// 			accordionBody.style.maxHeight = 0;
// 		}
// 	});
// });
const accordionEntity = document.querySelectorAll('.blc-programs-toggle__inner__all-accordions__accordion__header');

accordionEntity.forEach(accordionEntitys => {
	accordionEntitys.addEventListener('click', event => {
		const currentActiveHeader = document.querySelector('.blc-programs-toggle__inner__all-accordions__accordion__header.active');
		if (currentActiveHeader && currentActiveHeader !== accordionEntitys) {
			currentActiveHeader.classList.toggle('active');
			currentActiveHeader.nextElementSibling.style.maxHeight = 0;
		}

		accordionEntitys.classList.toggle('active');
		const accordionBody = accordionEntitys.nextElementSibling;

		if (accordionEntitys.classList.contains('active')) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
		} else {
			accordionBody.style.maxHeight = 0;
		}
	});
});
// END LEGAL-ENTITY SCRIPTS




//Main ourkids slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	speed: 500,
	slidesToScroll: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	   el: ".swiper-pagination",
	   clickable: true,
	},
	navigation: {
	   nextEl: ".swiper-button-next",
	   prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		300: {
			slidesPerView: 'auto',
			spaceBetween: 30
		},
		500: {
			slidesPerView: 1,
			spaceBetween: 70
		},
		672: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		700: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50
		},
		885: {
			slidesPerView: 3,
			spaceBetween: 8
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1192: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
 });


//slider mainpage our-sponsors
$(document).ready(function () {
	$('.blc-sponsor_slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 900,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 2
			}
		}
		]
	});
});
