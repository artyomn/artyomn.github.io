( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){

		$('.loader').fadeOut(200);
		$('body').addClass('body-loaded');

    	var wow = new WOW({
		    offset: 0,          
		    mobile: false
		  }
		);
		wow.init();
	});

	var navbar=$('.js-navbar');
	var navbarAffixHeight=0



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbarAffixHeight + 1)
            }, 1000);
            return false;
        }
    });



    /*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 12
	  }
	});

	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated fadeInDown');
  			navbar.find('.js-brand-hinge').addClass('animated hinge');
		}
	});

	navbar.on('affix-top.bs.affix', function() {
	  	navbar.removeClass('animated fadeInDown');
	  	navbar.find('.js-brand-hinge').removeClass('animated hinge');
	  	$('.navbar-collapse').collapse('hide');
	});

	if (navbar.hasClass('affix')){
		navbar.find('.js-brand-hinge').addClass('animated hinge');
	}



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar.addClass('affix');
  		navbar.find('.js-brand-hinge').addClass('animated hinge');
	});

	$('.navbar-collapse').on('hide.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
  			navbar.find('.js-brand-hinge').removeClass('animated hinge');
		}
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  navbarAffixHeight + 1
	});
	
})(jQuery);