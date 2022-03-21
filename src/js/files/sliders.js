/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Lazy, Navigation, Pagination} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/


// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];

			if (!slider.classList.contains('swiper')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				//добавляем навигпцию в контейнер

				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper');

				/*if(document.querySelector('._swiper_nav')) {
                    let navElement = slider.querySelector('._swiper_nav');
                    slider.appendChild(navElement);
                }
                if(document.querySelector('._swiper_pagination')){
                    let paginationElement = slider.querySelector('._swiper_pagination');
                    slider.appendChild(paginationElement);
                }*/


				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_bild_callback();
	}

	function sliders_bild_callback(params) {
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	function swiperFirstScreen(){
		if (document.querySelectorAll('.project .swiper').length > 0) {
			document.querySelectorAll('.project .swiper').forEach((slider) => {
				console.log(slider);
				new Swiper(slider, {
					modules: [Navigation, Lazy],
					lazy: {
						loadPrevNext: true,
						elementClass: 'lazyAll'
					},
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: `.project-nav-next`,
						prevEl: `.project-nav-prev`,
					},
					//следит за изменениями , и если что-то произойдет обновится
					observer: true,
					//следит за родительскими элементами, табы например
					observeParents: true,
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: false,
					//если кликнуть по любоиу слайду , он станет активным
					slideToClickedSlide: true,
					// если слайдов мало , скроется навигация, рагиниция
					watchOverflow: true,
					speed: 800,
				});
			})
		}
	}
	swiperFirstScreen();
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
