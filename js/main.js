$(document).ready(function(){
  $('.header-slider').slick({
    vertical: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>'
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
		nextArrow: '<button type="button" class="product-next"><img src="img/product-next.svg" alt=""></button>'
	});
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,		
	});
});