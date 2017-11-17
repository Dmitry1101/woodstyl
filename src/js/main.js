$(document).ready(function() {
	$('.gall__list').lightGallery({
	    thumbnail: false,
	    // animateThumb: false,
	    selector: '.gall__it-zoom',
	    // showThumbByDefault: false
	});

	$('.m-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  prevArrow: ".m-slider__prev",
	  nextArrow: ".m-slider__next",
		dots: true,
		appendDots: ".m-slider__dots",
	});
	// alert('wewe');
});


$(window).on('load',function(){
	$('body').addClass('loaded');
});
