(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button

    $(document).ready(function(){
        $(".back-to-top").hide();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });

    $(document).ready(function() {
        $(".closeRegButton, .regButton").hide();
    
        let closeButtonClicked = false;
        let footerReached = false;
        let showButtonsTimeout;
    
        const checkScroll = () => {
            const scrollPos = $(window).scrollTop();
            const windowHeight = $(window).height();
            const footerTop = $('.footer').offset().top;
            const distanceToFooter = footerTop - scrollPos - windowHeight;
    
            // Determine if the footer is reached
            footerReached = distanceToFooter <= 0;
    
            if (scrollPos > 300 && !footerReached && !closeButtonClicked) {
                $(".closeRegButton, .regButton").fadeIn('fast');
            } else {
                $(".closeRegButton, .regButton").fadeOut('fast');
            }
        };
    
        // Hide buttons and set a timer to show them again
        $('.closeRegButton').click(function(e) {
            e.preventDefault(); // This line prevents the default anchor action
            closeButtonClicked = true;
            $(".closeRegButton, .regButton").fadeOut('fast');
        
            clearTimeout(showButtonsTimeout); // Clear any existing timer
        
            // Set new timer
            showButtonsTimeout = setTimeout(() => {
                closeButtonClicked = false; // Allow buttons to show again after 1 minute
                // Check immediately if conditions are met for showing
                // Ensure this is run only when necessary, e.g., outside of footer
                if ($(window).scrollTop() > 300 && !footerReached) {
                    $(".closeRegButton, .regButton").fadeIn('fast');
                }
            }, 30000); // 30 sec delay
        });
    
        $(window).scroll(checkScroll);
        checkScroll(); // Initial check on page load
    
        // For showing the button even if the user is not scrolling after closing it
        if (!footerReached && !closeButtonClicked) {
            clearTimeout(showButtonsTimeout);
            showButtonsTimeout = setTimeout(() => {
                if (!footerReached && !closeButtonClicked) {
                    $(".closeRegButton, .regButton").fadeIn('fast');
                }
            }, 30000); // 30 sec minute
        }
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        autoplayTimeout:12000,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
    
        let today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1, // Month is zero-based
            yyyy = today.getFullYear(),
            dayMonth = new Date(yyyy, 6, 13, 10, 30, 0),
            event = dayMonth;
    
        today = new Date(yyyy, mm - 1, dd); // Using new Date object
    
        if (today > event) {
            event = new Date(yyyy + 1, 6, 13, 10, 30, 0); // Using new Date object
        }
    
        const countDown = event.getTime(),
            x = setInterval(function() {
    
              const now = new Date().getTime(),
                    distance = countDown - now;
    
              document.getElementById("days").innerText = Math.floor(distance / (day));
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "Event is ongoing";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0);
    }());

        $(document).ready(function() {
            // Get the number of carousel items by counting direct children.
            // Adjust the selector if your items are not direct children or need a more specific selector.
            var itemCount = $(".testimonial-carousel").children().length;
        
            // Generate a random start position
            var randomStartPosition = Math.floor(Math.random() * itemCount);
        
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                autoplayTimeout: 13000,
                center: true,
                margin: 24,
                dots: false,
                loop: true,
                nav: true, // Set navigation to true
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Custom navigation icons
                startPosition: randomStartPosition, // Use the random start position
                responsive: {
                    0:{
                        items: 1
                    },
                    768:{
                        items: 2
                    },
                    992:{
                        items: 3
                    }
                }
            });
        });
    
})(jQuery);

$(function(){
    $("#websiteFooter").load("footer.html"); 
});