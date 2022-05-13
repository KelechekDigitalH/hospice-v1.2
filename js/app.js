/*******Burger******/


document.querySelector('.burger').addEventListener('click', function(){

	document.querySelector('.burger','.menu').classList.toggle('active');
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
