
$(function(){

	//меню каталога
	$('.sub-menu > a').hover(function(){
		$('.sub-menu').addClass('active')
		$('.sub-menu__wrap').addClass('active')
	})
	$('.sub-menu__wrap').mouseleave(function(){
		$('.sub-menu').removeClass('active')
		$('.sub-menu__wrap').removeClass('active')
	})

	//слайдер на главной
	let mainSlider = $('.main-slider__wraper').slick({
		arrows: false,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 5000,
  		dots: true,
	})

	$('.main-slider__next').click(function(){
		mainSlider.slick('slickNext');
	})

	$('.main-slider__prev').click(function(){
		mainSlider.slick('slickPrev');
	})
	

})


