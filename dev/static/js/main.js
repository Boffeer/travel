$(document).ready(function () {
    svg4everybody({});
});


// slider-services
$(document).ready(function () {
	$('.service-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
});

// slider-tours
$(document).ready(function () {
	$('.tours-slider').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});

// burger
$(document).ready(function() {
	$('.burger').click(function(){
		$(this).toggleClass('burger--active');
		$('.nav__menu').toggleClass('nav-menu--active')
	})
});
