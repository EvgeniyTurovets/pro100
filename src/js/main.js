
$(function(){

	//меню каталога
	$('.sub-menu > a').hover(function(){
		if($(window).width() > 991){
			$('.sub-menu').addClass('active')
			$('.sub-menu__wrap').addClass('active')
		}
		
	})
	$('.sub-menu__wrap').mouseleave(function(){
		if($(window).width() > 991){
			$('.sub-menu').removeClass('active')
			$('.sub-menu__wrap').removeClass('active')
		}
	})
	$('.sub-menu > a').click(function(){
		if($(window).width() < 991){
			$(this).next('.sub-menu__wrap').addClass('active')

			return false
		}
	})

	$('.sub-menu__back').click(function(){
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
	

	$('.slider1__wrap').slick({
		  slidesToShow: 3,
		  variableWidth: true,
		  arrows: true,
		  infinite: false,
		  dots: false,
		  prevArrow:'<div class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcYNAcIP///9BcYNAcINBcYRAcYP////iOsJTAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8LZrlaJgAAAOFJREFUGNMdj8FOwzAQRDes6DmJpZ5DLHG2MyLlA/wBSBCLY0vidX4ggXslw2ez7W2keTM7S1UP1GjfAsFWLcy4qYKzQC4L9d6iPq5bJtTGdNv6u5DjwY9/qQRSEDHmWRMVxlQSAjkYEbn4QDwck4jlQMbLlGaoi1EkwjrlfrJcB6h7UorhnwKJ7FcD1wQ6rLLrLm3xaYtzx8oNp0ky31tY8vp+UzS8inwaVfxQp326qGpcd5BSNKFw9y1yvv3G1Yveuf/mOIos6jK3jzqWbM+2tTl9UNdaGDxH3ezqqmH+Cv/0rD2w8q6L5gAAAABJRU5ErkJggg==" /> </svg></div>',
          nextArrow:'<div class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcINAcYP///9AcINBcYRBcYNAcYP///9Fip8HAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8ffGOOWwAAANpJREFUGNMVj8FOw0AQQycbwbkN4j7rUQrHJhV/sB8AQd7NGWkjzhEpfACov83k9mSP7LE0/RmDQZOc84QWQJKeWzsCIcnnPL9CLbqWmRXirn7flsk6d8OJNRssyeV4ZV3V3RBPnOvRKQK5bKsTJDxX0lM8HpW3jySGEY8sNcnBVBvm7UsQQ7T+h0UUZrFy+ZUOFp/453fhECKZ35NrzQsLB0/pkMm3vQP9db7BO0y3uq3t6J/eF1Ib3zYyc1+3bysZMCcuddLh4ZLkrhDQuKdsE/wxJ+sV6Jz+AVAxOTZlEPM0AAAAAElFTkSuQmCC" /> </svg></div>',
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		        slidesToShow: 1,
		        variableWidth: false,
		      }
		    },

		    
		  ]
	})
	$('.brand__wrap').slick({
		  slidesToShow: 5,
		  arrows: true,
		  infinite: false,
		  dots: false,
		  prevArrow:'<div class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcYNAcIP///9BcYNAcINBcYRAcYP////iOsJTAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8LZrlaJgAAAOFJREFUGNMdj8FOwzAQRDes6DmJpZ5DLHG2MyLlA/wBSBCLY0vidX4ggXslw2ez7W2keTM7S1UP1GjfAsFWLcy4qYKzQC4L9d6iPq5bJtTGdNv6u5DjwY9/qQRSEDHmWRMVxlQSAjkYEbn4QDwck4jlQMbLlGaoi1EkwjrlfrJcB6h7UorhnwKJ7FcD1wQ6rLLrLm3xaYtzx8oNp0ky31tY8vp+UzS8inwaVfxQp326qGpcd5BSNKFw9y1yvv3G1Yveuf/mOIos6jK3jzqWbM+2tTl9UNdaGDxH3ezqqmH+Cv/0rD2w8q6L5gAAAABJRU5ErkJggg==" /> </svg></div>',
          nextArrow:'<div class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcINAcYP///9AcINBcYRBcYNAcYP///9Fip8HAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8ffGOOWwAAANpJREFUGNMVj8FOw0AQQycbwbkN4j7rUQrHJhV/sB8AQd7NGWkjzhEpfACov83k9mSP7LE0/RmDQZOc84QWQJKeWzsCIcnnPL9CLbqWmRXirn7flsk6d8OJNRssyeV4ZV3V3RBPnOvRKQK5bKsTJDxX0lM8HpW3jySGEY8sNcnBVBvm7UsQQ7T+h0UUZrFy+ZUOFp/453fhECKZ35NrzQsLB0/pkMm3vQP9db7BO0y3uq3t6J/eF1Ib3zYyc1+3bysZMCcuddLh4ZLkrhDQuKdsE/wxJ+sV6Jz+AVAxOTZlEPM0AAAAAElFTkSuQmCC" /> </svg></div>',
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		       
		      }
		    },
		     {
		      breakpoint: 560,
		      settings: {
		        slidesToShow: 2,
		       
		      }
		    },

		    
		  ]
	})

	$('.header__contact-last').click(function(){
		$('#map').fadeIn()
		return false;
	})
	$('.map__close').click(function(){
		$('#map').fadeOut()
	})
	$('#map').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".map__wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('#map').fadeOut()
		}
	});



	//адаптивная шапка
	function adaptiveHead(){
	 if($(window).width() < 992){
	 	$('.mob-header__menu').append( $('.header__menu .menu') );

	 	if($('.menu__catalog').length){
		 	$('.menu__catalog').slick({
		 		slidesToShow: 5,
		 		arrows: true,
			  	infinite: false,
		 		prevArrow:'<div class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcYNAcIP///9BcYNAcINBcYRAcYP////iOsJTAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8LZrlaJgAAAOFJREFUGNMdj8FOwzAQRDes6DmJpZ5DLHG2MyLlA/wBSBCLY0vidX4ggXslw2ez7W2keTM7S1UP1GjfAsFWLcy4qYKzQC4L9d6iPq5bJtTGdNv6u5DjwY9/qQRSEDHmWRMVxlQSAjkYEbn4QDwck4jlQMbLlGaoi1EkwjrlfrJcB6h7UorhnwKJ7FcD1wQ6rLLrLm3xaYtzx8oNp0ky31tY8vp+UzS8inwaVfxQp326qGpcd5BSNKFw9y1yvv3G1Yveuf/mOIos6jK3jzqWbM+2tTl9UNdaGDxH3ezqqmH+Cv/0rD2w8q6L5gAAAABJRU5ErkJggg==" /> </svg></div>',
	          	nextArrow:'<div class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcINAcYP///9AcINBcYRBcYNAcYP///9Fip8HAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8ffGOOWwAAANpJREFUGNMVj8FOw0AQQycbwbkN4j7rUQrHJhV/sB8AQd7NGWkjzhEpfACov83k9mSP7LE0/RmDQZOc84QWQJKeWzsCIcnnPL9CLbqWmRXirn7flsk6d8OJNRssyeV4ZV3V3RBPnOvRKQK5bKsTJDxX0lM8HpW3jySGEY8sNcnBVBvm7UsQQ7T+h0UUZrFy+ZUOFp/453fhECKZ35NrzQsLB0/pkMm3vQP9db7BO0y3uq3t6J/eF1Ib3zYyc1+3bysZMCcuddLh4ZLkrhDQuKdsE/wxJ+sV6Jz+AVAxOTZlEPM0AAAAAElFTkSuQmCC" /> </svg></div>',
			  	responsive: [
				  	{
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 4,
				       
				      }
				    },
				    {
				      breakpoint: 560,
				      settings: {
				        slidesToShow: 3,
				       
				      }
				    },
				    {
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				       
				      }
				    },

			  	]
		 	})
		 }
	 	
	 }else{
	 	$('.header__menu .wrap').append( $('.mob-header__menu .menu') );
	 	
	 }

	}
	adaptiveHead()
	$(window).resize(function(){
		adaptiveHead()
	})


	$('.burger').click(function(){
		$(this).toggleClass('active')
		$('.mob-header').fadeToggle()
		$('.mob-header').toggleClass('active')
	})

	$('.mob-header').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".mob-header__menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.burger').click()
		}
	});


	

	$('.header__call').click(function(){
		$('.backcall').fadeIn();
		return false;
	})
	$('.map__close.backcall__close').click(function(){
		$('.backcall').fadeOut();
	})

	$('.backcall').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".backcall__wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.backcall').fadeOut();
		}
	});


	$('.backcall__wrap').submit(function(event){
		event.preventDefault();
		$('.backcall__wrap2').fadeIn()
	})

	//маска телефона
	$(".phone").mask("+7(999) 999-99-99");
	 
})	


