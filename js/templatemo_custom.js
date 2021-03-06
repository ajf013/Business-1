
"use strict";

jQuery(document).ready(function($){
	
	


	function toolTipInit() {
	
		$('.menu li a').tooltip({
			placement: 'right'
		});
	}
	
	toolTipInit();



	$('#Grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });



	$("html").niceScroll({
		cursorcolor : '#a71e2b',
		cursorborder : 0,
		zindex : 99999,
	});

	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});




	$('.menu-toggle-btn').click(function(){
        $('.responsive_menu').stop(true,true).slideToggle();
    });

    $(".responsive_menu a").click(function(){
        	$('.responsive_menu').hide();
        });


    
	$(".toggle-filter").click(function(){
		$(".filter-controls").slideToggle();
		return false;
	});



	$(".main_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).slideDown(600);
		$("#menu-container .homepage").hide();
		return false;
	});

	$(".main_menu a.homebutton").click(function(){
		$("#menu-container .homepage").show();
		return false;
	});

	$(".main_menu .show-1").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-homepage.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-2").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-about.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-3").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-gallery.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-4").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-services.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-5").click(function(){
		loadScript();
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg-contact.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});


	$('.services .header .service-header').hover(function () {
	    var t = $(this);
	    t.find('h4').hide();
	    $(this).parent().find('.header-bg').stop(true, true).animate({
	        width: '100%'
	    }, 'fast', function () {
	        t.find('h4').addClass('active').fadeIn('fast')
	    })
	}, function () {
	    var t = $(this);
	    t.find('h4').hide();
	    t.parent().find('.header-bg').stop(true, true).animate({
	        width: 60
	    }, 'fast', function () {
	        t.find('h4').removeClass('active').fadeIn('fast')
	    });
	});

});