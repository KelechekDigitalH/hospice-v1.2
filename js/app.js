/*******Burger******/

document.querySelector('.burger').addEventListener('click', function () {
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


// INDIVIDUALS PAGE SCRIPTS
// window.forEach(window => {
window.addEventListener("load", function () {
	const btn = document.querySelector(".individuals_link");
	const window = document.querySelector(".btn-modal");
	const windowClose = document.querySelector(".off");

	btn.addEventListener("click", function () {
		window.classList.toggle("active");
	});

	windowClose.addEventListener("click", function () {
		window.classList.remove("active");

	});
});


window.addEventListener("load", function () {
	const btn2 = document.querySelector(".individuals_link2");
	const window2 = document.querySelector(".btn-modal2");
	const windowClose2 = document.querySelector(".off2");

	btn2.addEventListener("click", function () {
		window2.classList.toggle("active");
	});

	windowClose2.addEventListener("click", function () {
		window2.classList.remove("active");

	});
});

window.addEventListener("load", function () {
	const btn3 = document.querySelector(".individuals_link3");
	const window3 = document.querySelector(".btn-modal3");
	const windowClose3 = document.querySelector(".off3");

	btn3.addEventListener("click", function () {
		window3.classList.toggle("active");
	});

	windowClose3.addEventListener("click", function () {
		window3.classList.remove("active");

	});
});

window.addEventListener("load", function () {
	const btn4 = document.querySelector(".individuals_link4");
	const window4 = document.querySelector(".btn-modal4");
	const windowClose4 = document.querySelector(".off4");

	btn4.addEventListener("click", function () {
		window4.classList.toggle("active");
	});

	windowClose4.addEventListener("click", function () {
		window4.classList.remove("active");

	});
});
// });


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
