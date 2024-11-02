$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky-navbar");
        } else {
            $('.navbar').removeClass("sticky-navbar");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-to-top-btn').addClass("visible");
        } else {
            $('.scroll-to-top-btn').removeClass("visible");
        }
    });

    // slide-up script
    $('.scroll-to-top-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu-item li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu-item').toggleClass("active-menu");
        $('.menu-btn i').toggleClass("active-icon");
    });

    // typing text animation script
    var textAnimation1 = new Typed(".typing-effect", {
        strings: ["Web Developer.", "Trader."],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    var textAnimation2 = new Typed(".typing-effect-2", {
        strings: ["Web Developer", "Trader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel-container').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
