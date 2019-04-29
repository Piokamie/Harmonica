(function ($) {
  "use strict";
  $(document).ready(function () {
    $('.subpage-banner').css('height', $('.subpage-banner img').height());
    $('.sf-depth-1.menuparent.sf-with-ul').click(function (e) {
      e.preventDefault();
    });

  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.region-header').addClass('scrolled');
      $('.harmonica-front-cover, .subpage-banner').css('filter', 'blur(5px)');
    }
    else {
      $('.region-header').removeClass('scrolled');
      $('.harmonica-front-cover, .subpage-banner').css('filter', 'blur(0px)');
    }
    var height = window.innerHeight;//
    var imgHeight = $('.harmonica-front-cover img').attr('height');
    var width = window.innerWidth;

    if(width >900 && scroll <imgHeight/2) {

      $('.harmonica-front-cover').removeClass('out-of-view');
    if (height - scroll >= imgHeight/2) {
      $('.harmonica-front-cover:not(out-of-view)').css('height', height - scroll);
    }
    else {
      $('.harmonica-front-cover:not(out-of-view)').css('height', imgHeight/2);
    }




    var sbpgHeight = $('.subpage-banner img').attr('height');
    if (sbpgHeight - scroll > sbpgHeight/2) {
      $('.subpage-banner').css('height', sbpgHeight - scroll);
    } else {
      $('.subpage-banner').css('height', sbpgHeight/2);
    }
    }
    else {
      $('.harmonica-front-cover').addClass('out-of-view');
    }
  });
  $('button.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.harmonica-main-menu').slideToggle();
  });

})(jQuery);
