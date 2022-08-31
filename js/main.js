$(document).ready(function () {
	$('.header-slider').slick({
		vertical: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			}
		]
	});

	$('.product__name').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		arrows: true,
		focusOnSelect: true,
		asNavFor: '.product__content',
		vertical: true,
		prevArrow: '<button type="button" class="product-prev"><img src="img/product-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="product-next"><img src="img/product-next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 891,
				settings: {
					vertical: false,
					slidesToShow: 3,
					arrows: false,
					dots: true,
					centerPadding: '25px'
				}
			},
			{
				breakpoint: 521,
				settings: {
					vertical: false,
					slidesToShow: 1,
					arrows: false,
					dots: true,
					centerPadding: '25px'
				}
			}
		]
	});
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
});