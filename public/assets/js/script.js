$(document).ready(function() {

    $('#nav-about').click(function() {
            console.log('test');
            $('html, body').animate({
            scrollTop: $(".pts").offset().top - 150
        }, 1000)
    });

    // $('.project-user').on('click', function() {
    //     window.location.href='./users/user';
    // });

    $('#reviews-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#comments-div").offset().top - 100
        }, 1000)    
    })

    $('#submit-comment').on('click', function() {
        event.preventDefault();

        var commentSubject = $('#comment-subject').val().trim();
        var commentBody = $('#comment-body').val().trim();

        $('#comments-display').append('<hr>').append('<h5>commentSubject</h5>').append('<p>commentBody</p>');

        // var newComment = {
        //     commentSubject: $('#comment-subject').val().trim(),
        //     commentBody: $('#comment-body').val().trim()
        // }

        // $.ajax('api/project/:id/comments', {
        //     type: 'POST',
        //     data: newComment
        // }).then(data => {
        //     res.json(data);
        // })

    })

    $('.transaction-form').on('submit', function() {
        event.preventDefault();

        var projectId = $(this).data('id');

        var currentTotal = $(this).data('amount');
        console.log('Current total: ' + currentTotal);

        var userAmount = $('#transaction-amt').val().trim();

        var newTotal = currentTotal + parseInt(userAmount);

        var transactionAmount = {
            project_amount: newTotal,
            id: projectId
        };

        
        $.ajax('/project/:id/transaction', {
            type: 'PUT',
            data: transactionAmount
        }).then(data => {
            window.location = '/project/' + projectId;
            console.log(data);
        });
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