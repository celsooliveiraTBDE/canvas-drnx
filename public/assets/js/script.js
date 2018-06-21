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

    $('#reviews-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#comments-div").offset().top - 100
        }, 1000)    })

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

    $('#submit-comment').click(function () {
        console.log('test');
        var comment = {
            commenttext: $("#comment-body").val().trim(),
            subjectline: $("#comment-subject").val().trim()
        };
        // var subjectline = { text: $("#comment-subject").val().trim()};
        console.log(comment);


        //ID OF THE ELEMENT
        var currentproject = $(this).data("id");

        console.log(currentproject)

        $.ajax(`/project/${currentproject}`, {
            type: "POST",
            data: comment
        }).then(
            function () {
                console.log("created new comment");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})