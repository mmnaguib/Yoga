/*global $*/

$(function () {
    'use strict';
    var scrollBtn = $('#scroll-to-top');
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 700) {
			scrollBtn.show();
		} else {
			scrollBtn.hide();
		}
	});
    
    scrollBtn.click(function () {
		$('html,body').animate({scrollTop: 0}, 600);
	});
    
    $('html').niceScroll({
        cursorcolor: '#6900d1'
    });
    
    $('.nav-link').click(function () {
        $(this).parent().addClass('active-home').siblings().removeClass('active-home');
    });

});