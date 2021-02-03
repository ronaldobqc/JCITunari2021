(function($) {
	'use strict';	
		  
	$(document).ready(function(){
		
		/* Home Slider */
		$('.active-hslider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  arrows: false
		});		
		
	// sticky menu - start
	  var headerId = $(".sticky-header");
	  $(window).on('scroll' , function() {
		var amountScrolled = $(window).scrollTop();
		if ($(this).scrollTop() > 50) {
		  headerId.removeClass("not-stuck");
		  headerId.addClass("stuck");
		} else {
		  headerId.removeClass("stuck");
		  headerId.addClass("not-stuck");
		}
	  });

  
		// Menu Scroll 
		$('#navigation').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
		
		// Active Slick Nav 
		$('#navigation').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9658;",
			closedSymbol: "&#9660;" 	
		});
	
		// Preloader - start

	  $(window).on('load', function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	  });
	  // Preloader - end
	  // --------------------------------------------------
		  
	    // scroll down btn
		$("#scroll-down-btn a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
		});	    
		
		// CTA btn
		$("#cta-btn").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
		});
  
		  
		/* Portfolio */
		$('#work-section').imagesLoaded(function() {

			var $grid = $('.portfolio-grid').isotope({
			  // set itemSelector so .grid-sizer is not used in layout
			  itemSelector: '.portfolio-item',
			  percentPosition: true,
			});
			
			$('.work_menu li a').on('click', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
			
			 // FILTER MENU ACTIVE CLASS ADDITION  
			$('.work_menu li').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
			
		});
		
		/* Portfolio Section */
		 $('.venobox').venobox({
			 
		 });
		 
		/* Video Section */
		$('.popup-video').venobox({
			framewidth: '960px',        // default: ''
			frameheight: '540px',       // default: ''
			border: '0',             // default: '0'
			bgcolor: '#222',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
			numeratio: true,            // default: false
			infinigall: true            // default: false
		});
  
		/* Testimonials */
		 $(".testimonial-slider").owlCarousel({
			items: 3,
			margin: 30,
			nav:false,
			dots: true,
			loop:false,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,	
				},
				600:{
					items:1,
				},
				1000:{
					items:3,
				}
			}
		 });		
		 
		 /* Clients */
		 $(".client-slider").owlCarousel({
			items: 5,
			margin: 30,
			dots: false,
			loop:true,
			autoplay:true,
			smartSpeed:1000,
			autoplayTimeout:3500,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:false
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:5,
					loop:false
				}
			}
		 });
		
	});


		  
	/*START Pricing JS*/
	$('.pricing-tab-switcher').on('click', function() {
		$(this).toggleClass('active');

		$('.pricing-tab-content').toggleClass('change-subs-duration');
	});
	/*END Pricing JS */
	
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------

	AOS.init();
		 
})(jQuery);