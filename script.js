$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky-navbar");
        } else {
            $('.navbar').removeClass("sticky-navbar");
        }

        // Show/hide scroll-up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("visible");
        } else {
            $('.scroll-up-btn').removeClass("visible");
        }
    });

    // Scroll to top functionality
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        // Remove smooth scroll on button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items
    $('.navbar .menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active-menu");
        $('.menu-btn i').toggleClass("active-icon");
    });

    // Smooth scrolling effect for menu links
    $('.navbar .menu-item li a').click(function() {
        // Smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Typing text animation
    new Typed(".typing", {
        strings: ["Web Developer.", "Trader."],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-effect-2", {
        strings: ["Web Developer", "Trader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel initialization
    $('.carousel-container').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
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
