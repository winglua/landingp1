$(document).ready(function() {
	$(".brand-slider.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
	  	nav: true,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
      
  	});
  	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.counter').counterUp({
    	delay: 30,
	    time: 1000
	});
});

$( document ).ready(function() {
    new WOW().init();
});