$('#contact-form').submit(function(e) {
    e.preventDefault();
    var action = $(this).attr('action');

    $("#message").slideUp(700, function() {

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $("#message").delay(5000);
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#message').slideUp('slow');
            }
        );

    });

    return false;

});