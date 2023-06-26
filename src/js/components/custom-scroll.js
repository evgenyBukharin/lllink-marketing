import Swiper, { Scrollbar, Mousewheel, Grid } from "swiper";
Swiper.use([Scrollbar, Mousewheel, Grid]);

const swiper = new Swiper(document.querySelector(".hero__slider"), {
	spaceBetween: 13,
	watchSlidesProgress: true,
	slideVisibleClass: "hero__slide-visible",
	mousewheel: true,
	scrollbar: {
		el: ".hero__scrollbar",
		draggable: true,
	},
	breakpoints: {
		1151: {
			slidesPerView: 5,
		},
		769: {
			slidesPerView: 4,
		},
	},
});

const swiper1 = new Swiper(document.querySelector(".activity__slider-1"), {
	spaceBetween: 50,
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-1",
		draggable: true,
	},
	breakpoints: {
		1151: {
			slidesPerView: 7,
		},
		769: {
			slidesPerView: 6,
		},
	},
});

const swiper2 = new Swiper(document.querySelector(".activity__slider-2"), {
	slidesPerView: 2,
	spaceBetween: 25,
	mousewheel: true,
	direction: "vertical",
	scrollbar: {
		el: ".activity__scrollbar-2",
		draggable: true,
	},
});

const swiper3 = new Swiper(document.querySelector(".activity__slider-3"), {
	slidesPerView: 2,
	spaceBetween: 25,
	mousewheel: true,
	direction: "vertical",
	scrollbar: {
		el: ".activity__scrollbar-3",
		draggable: true,
	},
});

const swiper4 = new Swiper(document.querySelector(".activity__slider-4"), {
	slidesPerView: 3,
	spaceBetween: 50,
	direction: "vertical",
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-4",
		draggable: true,
	},
});
