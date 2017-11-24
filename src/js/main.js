$(document).ready(function() {
	
	$('body').addClass('loaded');

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

		
	// (function(){
		
	// 	$('body').on('click','.txt-blck-2',function(){
	// 		// $(this).text( objj.sum );
	// 		console.log(objj);
	// 	})

	// 	var objj =	{
	// 		name : "Sweety",
	// 		surname: "Douglas",
	// 		el: $('.sect-title.c-grn.txt-cent'),
	// 		init: function(){
	// 			this.sum = this.name + ' ' + this.surname;
	// 		}
	// 		// clicked: 
	// 	}

	// 	objj.init();

	// })();

	// alert('wewe');
});


// $(window).on('load',function(){
// 	$('body').addClass('loaded');
// });
