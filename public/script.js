$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target=this.hash;
        var $target=$(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash=target;
        });
    });
});

$(document).ready(function () {
    $('.contactinfo').click(function (e) {
        $('.contactcard').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.download-form').toggleClass('active');
        var buttonText=$('button.contactinfo#main-button').text();

        if (buttonText==='back') {
            buttonText='Take a Look at My Skills & Resume?';
            $('button.contactinfo#main-button').text(buttonText);
        }
        else {
            buttonText='back';
            $('button.contactinfo#main-button').text(buttonText);
        }
    }

    );
}

);