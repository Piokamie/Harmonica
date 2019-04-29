(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.view-sponsors .view-content').slick({

            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,


            responsive: [

                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]


        });




        $('.view-news .view-content img').attr('data-animation','fadeInLeft');
        $('.view-news .view-content img').attr('data-delay','0.1s');
        $('.view-news .view-content .views-field-title').attr('data-animation','fadeInDown');
        $('.view-news .view-content .views-field-field-date').attr('data-animation','fadeInDown');
        $('.view-news .view-content .views-field-field-content').attr('data-animation','fadeInUp');

        $('.view-news .view-content').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.views-row:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
//$('#block-harmonica-branding').addClass('animated fadeInLeftBig');

        $('.view-news .view-content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
           // console.log(nextSlide);
            var $animatingElements = $('div.views-row[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
           // console.log($animatingElements);
            doAnimations($animatingElements);
           // amimatingElement.slideUp();
        });

        $('.view-news .view-content').slick({

            dots: true,
            fade: true,
            nextArrow: '<a href="#" class="news-arrow next-arrow"></a>',
            prevArrow: '<a href="#" class="news-arrow prev-arrow"></a>',

        });

        function doAnimations(elements) {
            //console.log(elements);
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                //console.log($animationType);
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }

    });


})(jQuery);