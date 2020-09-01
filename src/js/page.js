$(function() {
	function catalogSlider(){
		if($(window).width() < 992){
			$('.catalog__left').slick({
				slidesToShow: 5,
				infinite: false,
				prevArrow:'<div class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcYNAcIP///9BcYNAcINBcYRAcYP////iOsJTAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8LZrlaJgAAAOFJREFUGNMdj8FOwzAQRDes6DmJpZ5DLHG2MyLlA/wBSBCLY0vidX4ggXslw2ez7W2keTM7S1UP1GjfAsFWLcy4qYKzQC4L9d6iPq5bJtTGdNv6u5DjwY9/qQRSEDHmWRMVxlQSAjkYEbn4QDwck4jlQMbLlGaoi1EkwjrlfrJcB6h7UorhnwKJ7FcD1wQ6rLLrLm3xaYtzx8oNp0ky31tY8vp+UzS8inwaVfxQp326qGpcd5BSNKFw9y1yvv3G1Yveuf/mOIos6jK3jzqWbM+2tTl9UNdaGDxH3ezqqmH+Cv/0rD2w8q6L5gAAAABJRU5ErkJggg==" /> </svg></div>',
          		nextArrow:'<div class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="29px"> <image  x="0px" y="0px" width="18px" height="29px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdBAMAAABVtiGxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVBcYNBcYRAcINAcYP///9AcINBcYRBcYNAcYP///9Fip8HAAAABXRSTlMAAAAAAMJrBrEAAAABYktHRASPaNlRAAAAB3RJTUUH5AgHCS8ffGOOWwAAANpJREFUGNMVj8FOw0AQQycbwbkN4j7rUQrHJhV/sB8AQd7NGWkjzhEpfACov83k9mSP7LE0/RmDQZOc84QWQJKeWzsCIcnnPL9CLbqWmRXirn7flsk6d8OJNRssyeV4ZV3V3RBPnOvRKQK5bKsTJDxX0lM8HpW3jySGEY8sNcnBVBvm7UsQQ7T+h0UUZrFy+ZUOFp/453fhECKZ35NrzQsLB0/pkMm3vQP9db7BO0y3uq3t6J/eF1Ib3zYyc1+3bysZMCcuddLh4ZLkrhDQuKdsE/wxJ+sV6Jz+AVAxOTZlEPM0AAAAAElFTkSuQmCC" /> </svg></div>',
		  		responsive: [
		  			{
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 4,
				        variableWidth: false,
					  }
					},
					{
				      breakpoint: 560,
				      settings: {
				        slidesToShow: 3,
				        variableWidth: false,
					  }
					},
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        variableWidth: false,
					  }
					},
		  		]
			})
		}
	}
	$(window).resize(function(){
		catalogSlider()
	})
	catalogSlider()


	if($('.tovar__top').length){
		$('.tovar__slider__top').slick({
			fade: true,
			arrows: false,
			asNavFor: '.tovar__slider__bot',
		})

		$('.tovar__slider__bot').slick({
			slidesToShow: 4,
			asNavFor: '.tovar__slider__top',
			focusOnSelect: true,
			draggable: false,
		})
	}

	$(function() {
	var tab = $('#tabs .tabs-items > div'); 
		tab.hide().filter(':first').show(); 
		$('#tabs .tabs-nav a').click(function(){
			tab.hide(); 
			tab.filter(this.hash).show(); 
			$('#tabs .tabs-nav a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();

		$('.tabs-target').click(function(){
			$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
		});
	});

	$('.open1').click(function(){
		let openParent = $(this).closest('.tabs-item')
		openParent.find('.open1').hide()
		openParent.find('.open1__wrap').hide()
		openParent.find('.open2__wrap').fadeIn(200)
		openParent.find('.open2').fadeIn(200)
	})

	$('.open2').click(function(){
		let openParent = $(this).closest('.tabs-item')
		openParent.find('.open2').hide()
		openParent.find('.open2__wrap').hide()
		openParent.find('.open1__wrap').fadeIn(200)
		openParent.find('.open1').fadeIn(200)
	})

	//акции
	$('.akcii__slider').slick({
		prevArrow:'<div class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="39px"><image x="0px" y="0px" width="26px" height="39px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAnCAQAAAC7p5A2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCAYRGCIehffTAAABTElEQVRIx52Vu0sDQRCH54ziA6KComCXWrCwEKwV9A+QpBYf2FqltkphrxbWWgqCkMbCQsRW0FYrC4OQICiBcJ/FcdxOco/NzDZ7zH7M7v3mESDeNiUT0pZQZNQb2ZJ9mZcHOZMvwW8d8k1kJ5R8gBHqdIntkbliZIwGPRK7o1yElDnHtR+qSD6ywJVC2hxRyocqNBXSohp5spEVnhXyzkbsy0LWeVXIC2uJNx3Z5kMhTyy7/jSkRkshTSr6xCByQEch1yz2n+kXss6fQi6YHbyL+zHJKaED9GgwnvbmZDvDpYrR5ThLjnizxI1COuxlyx5rf6+QT3by0ksIWFXah7yxmZ/GwjS3Ksovu0XlYoxkepP57xl1MmaEMfeMWW6uJ8FUuYKpRwimbhTlydB9TzB1WMHUyyPBh54agmk+RUtNwsB7UDsz1x9ypvs/yommNHKwb+8AAAAASUVORK5CYII="></image></svg></div>',
	    nextArrow:'<div class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="39px"><image x="0px" y="0px" width="26px" height="39px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAnCAQAAAC7p5A2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCAYRFxfPri8/AAABMElEQVRIx7XVr0uDURTG8efdJmKYDoQJtmXBYBBMBg3+AaJZRBGbadm0YBYNyxoFQZjBKGIVtGqyTMEhTAdzX8OLuAPCed8Dnps/HO6950eCJBVU0ae6yhglSVXtalEvauoyo6LIPmm8so2yHDHJNT/Ro04hCypzwW/0aTDiI7HGO8NxRNlHRXZ4M+yEqofSbG3DWtR8JJZ4NOyWWR+Jee4Mu2fBR2KGG8OeWPGRqNEyrM26j8QUp4Z12PKRqHBs2Ad1++F/v88oDfpDbMABYx4SYo+eyddkwkdik45hZ0z7SKzybNhVWideGyzzwMDUyRyJ33IbdE22c8b/IVPgToHXy/1PgYoI1F6gygP9FOjcwIwITKPccy80YQOzPLQ1QvspsAlL+tKhyLdzk8h2/wZuvadJal9ZpAAAAABJRU5ErkJggg=="></image></svg></div>',	  	
		dots: true,
		responsive: [
			{
				breakpoint: 768,
			    settings: {
			       dots: false,
				}
			},
		]
	})
	
})