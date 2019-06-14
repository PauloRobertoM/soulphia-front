(function($, window) {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('.owl-recomenda').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 15,
        center: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.owl-noticias').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:10
            }
        }
    });
    $('.owl-depoimentos').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('.owl-depo').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $(function() {
        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });
    $('.item-anime').mouseenter(function() {
        let heightLayout = $('.box-img').height(),
        heightBox = $('.box').height();
        $('.box-img').css('transform', 'translateY(' + (heightLayout - heightBox) * -1 + 'px)');
    });
    $('.item-anime').mouseleave(function() {
        $('.box-img').removeAttr('style');
    });
    $(document).ready(function(e) {
        $('img[usemap]').rwdImageMaps();
    });
})(jQuery, window);