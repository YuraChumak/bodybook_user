$('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]

    });
    $('.popup').click(function(){
        $('.popup_bg').addClass('show_me');
        $('.simple_registr').addClass('show_me');
        $('.one').addClass('show_me');
    });
    $('.popup_bg').click(function(){
        $('.popup_bg').removeClass('show_me');
        $('.registr_form').removeClass('show_me');
        $('.one').removeClass('show_me');
        $('.two').removeClass('show_me');
        $('.three').removeClass('show_me');
    });
    $('.one_btn').click(function(){
        $('.one').removeClass('show_me');
        $('.two').addClass('show_me');
    });
    $('.two_btn').click(function(){
        $('.two').removeClass('show_me');
        $('.three').addClass('show_me');
    });
    $('.three_btn').click(function(){
        $('.popup_bg').removeClass('show_me');
        $('.three').removeClass('show_me');
    });
    $('a.down_btn').bind('click.smoothscroll',function (e) {     //scroll running
        e.preventDefault();
        var target = this.hash,
                $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.go_top').fadeIn();
        } else {
            $('.go_top').fadeOut();
        }
    });
    $('.go_top').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });