$(document).ready(function() {
	
	var goToBlog = function(){
		if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
		currentWidth = $('.panel-cover').width();
		if (currentWidth < 1100) {
			$('.panel-cover').addClass('panel-cover--collapsed');
			$('.content-wrapper').addClass('animated slideInRight');
		} else {
			$('.panel-cover').css('max-width',currentWidth);
			$('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 1000, swing = 'swing', function() {} );
		}
  	}
	
	$('body').removeClass('no-js');

	$('a.blog-button').click(goToBlog);



	if (window.location.hash && window.location.hash == "#blog") {
	$('.panel-cover').addClass('panel-cover--collapsed');
	}

	$('.btn-mobile-menu').click(function() {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown');
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
	});

	$('.navigation-wrapper .blog-button').click(function() {
		$('.navigation-wrapper').toggleClass('visible');
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
	});

	goToBlog();
});