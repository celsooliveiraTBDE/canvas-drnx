$(document).ready(function() {

    $('#nav-about').click(function() {
            console.log('test');
            $('html, body').animate({
            scrollTop: $(".pts").offset().top - 150
        }, 1000)
    });

    $('.project-user').on('click', function() {
        window.location.href='./users/user';
    });


    $(function(){
        var navbar = $('.navbar');
        
            $(window).scroll(function(){
                if($(window).scrollTop() <= 40){
                    navbar.removeClass('navbar-scroll');
                } else {
                    navbar.addClass('navbar-scroll');
                }
            });
        
    });



})