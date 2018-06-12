$(document).ready(function() {



    // $('#nav-projects').click(function() {
    //         console.log('test');
    //         $('html, body').animate({
    //         scrollTop: $(".projects").offset().top
    //     }, 1000)
    // });

    $('.project-user').on('click', function() {
        window.location.href='./users/user';
    });

    $('.project-drink').on('click', function() {
        window.location.href='./project';

    })


})