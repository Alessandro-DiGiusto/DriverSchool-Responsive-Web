(function($) {
    "use strict";

    /*----------------
	Mobile Menu
	------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

    /*---------------------
     -Menu Stick active js 
     --------------------- */

    var sticker = $(".sticker");

    if (sticker[0]) {

        $(window).on("scroll", function() {
            var wind_scr = $(window).scrollTop();
            var window_width = $(window).width();
            var head_w = sticker.height();
            if (window_width >= 10) {
                if (wind_scr < 400) {
                    if (sticker.data('stick') === true) {
                        sticker.data('stick', false);
                        sticker.stop(true).animate({
                            opacity: 0
                        }, 300, function() {
                            sticker.removeClass('stick slideDown');
                            sticker.stop(true).animate({
                                opacity: 1
                            }, 300);
                        });
                    }
                } else {
                    if (sticker.data('stick') === false || typeof sticker.data('stick') === 'undefined') {
                        sticker.data('stick', true);
                        sticker.stop(true).animate({
                            opacity: 0
                        }, 300, function() {
                            sticker.addClass('stick slideDown');
                            $('.sticker.stick').stop(true).animate({
                                opacity: 1
                            }, 300);
                        });
                    }
                }
            }
        });
    };
    /*---------------------
     One Page Nav active js 
     --------------------- */
    var top_offset = $('.menu').height() - -40;
    $('.menu ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    /*---------------------
     About carousel active js 
     --------------------- */
    $(".about-owl-cursole").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        items: 1,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],

    });

    /*---------------------
    Counter active js 
    --------------------- */
    $('.counterup').counterUp({
        delay: 10,
        time: 1000
    });

    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 300000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
    /*---------------------
    venobox video active js 
    --------------------- */
    $('.venobox').venobox();
    /*---------------------
    Venobox Gallery active js 
    --------------------- */
    $('.venobox_custom').venobox({
        framewidth: '700px', // default: ''
        frameheight: '500px', // default: ''
        border: '2px', // default: '0'
        bgcolor: '#fff', // default: '#fff'
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true // default: false
    });
    /*---------------------
    Isotope active js 
    --------------------- */
    $('.image_loded').imagesLoaded(function() {

        if ($.fn.isotope) {
            var $portfolio = $('.gallery_items');
            $portfolio.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
            });
            $('.filter-menu li').on('click', function() {
                $('.filter-menu li').removeClass('current_menu_item');
                $(this).addClass('current_menu_item');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector,
                });
            });
        };

    });
    /*---------------------
    Testimonial active js 
    --------------------- */
    $(".testimonial_list").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        transitionStyle: "backSlide",
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    /*---------------------
    Team active js 
    --------------------- */
    $(".team-cursole").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        items: 4,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],

    });
    /*---------------------
    Blog active js 
    --------------------- */
    $(".blog_cursole").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [767, 1],

    });
    /*---------------------
    Course active js 
    --------------------- */
    $(".course_cursole").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [767, 1],

    });
    /*---------------------
    Course info active js 
    --------------------- */
    $(".course_info_cursole").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        items: 1,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],

    });


    /*---------------------
    scrollUp active js 
    --------------------- */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 1000, // Speed back to top (ms)
        easingType: 'linear',
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
        zIndex: 2147483647 // Z-Index for the overlay
    });
    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

	

})(jQuery);