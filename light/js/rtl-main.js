/*-----------------------------------------------------------
 * Template Name    : Anna | Bootstrap 5 Portfolio Photography Template
 * Author           : Spacecodes
 * Version          : 1.0.0
 * Created          : April 2021
 * File Description : Main js file of the template
 *------------------------------------------------------------
 */

/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function() {

    "use strict";

    menuOverlay();
    magnificPopup();
    themeSwitcher();
    scrollTop();
});

$(window).on('load', function() {
    $(".preloader").fadeOut(800);
    workGallery();
});

// MENU OVERLAY
function menuOverlay() {

    "use strict";

    $(".menu-wrapper").click(function() {
        $('.overlay-menu').toggleClass("show");
    });
};

// CAROUSEL CLIENT
$(".owl-carousel").owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    margin: 33,
    nav: false,
    autoplay: false,
    center: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass: true,
    autoHeight: true,
});

// GALLERY
function workGallery() {

    "use strict";

    var filter = $("#work-nav-filter"),
        items = $(".work-items");
    items.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    });

    filter.find("a").on("click", function() {
        var selector = $(this).attr("data-filter");
        return filter.find("a").removeClass("active"), $(this).addClass("active"), items.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
}

// MAGNIFICPOPUP
function magnificPopup() {

    "use strict";

    $(".zoom").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-fade",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
}

function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                },
                callbacks: {
                    open: function() {
                        $.fn.pagepiling.setKeyboardScrolling(false);
                      
                    },
                    close: function() {
                        $.fn.pagepiling.setKeyboardScrolling(true);
                    }
                  }
            });
        });
    }
}

// THEME SWITCH
function themeSwitcher() {

    "use strict";

    $('.theme-switch').click(function() {
        $("body").toggleClass('dark-theme');
    });
}

// SCROLL TO TOP 
function scrollTop() {

    "use strict";

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('.chevron-button').fadeIn();
        } else {
            $('.chevron-button').fadeOut();
        }
    });
    $('.chevron-button').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}