var AL = AL || (function () {


    function ping() {
        $.ajax({
            type: "GET",
            url: "https://sandboxvisitor.herokuapp.com/ping",
            success: function (result) {
            }
        });
    }

    function intervalPing(ms) {
        ping();
        return setInterval(function () {
            ping();
        }, ms || 60000)
    }


    return {
        ping: ping,
        intervalPing: intervalPing
    };
}());

(function ($) {
    "use strict"; // Start of use strict
    AL.intervalPing();

    $.validate();
    $('#thanks').hide();
    $("form").submit(function (e) {

        //alert("Handler for .submit() called.");
        event.preventDefault();

        //send lead
        function sendMail(email, name, message) {
            $.ajax({
                type: "POST",
                url: "sendlead.php",
                data: "email=" + email + "&name=" + name + "&message=" + message,
                cache: false,
                success: function (result) {
                }
            });
            console.log('success sendlead')
            $('#thanks').show();
        }

        sendMail($("#email").val(), $("#name").val(), $("#message").val());

        $('#contact').fadeOut(200, function () {
            $('#thanks').fadeIn(200);
        })


    });


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });
    //hebrew english
    $('.heb').hide()

    $('.lang-trig').click(function (e) {
        return;
        e.preventDefault();
        if ($(this).hasClass('en')) {
            $('.en').fadeOut(200, function () {
                $('.heb').fadeIn(200)
//                $('body').removeClass('english')
//                $('body').addClass('hebrew')
            })
        } else if ($(this).hasClass('heb')) {
            $('.heb').fadeOut(200, function () {
                $('.en').fadeIn(200)

            })
        }
    })
    $('.lang-trig.heb').click()


})(jQuery); // End of use strict
