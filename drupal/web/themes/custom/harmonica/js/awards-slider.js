(function ($) {
  "use strict";

  $(document).ready(function () {
    $('.view-awards .view-content').slick({

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
  });


})(jQuery);