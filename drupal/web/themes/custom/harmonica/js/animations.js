(function ($, ScrollMagic) {
    $(document).ready(function () {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 10}});


        var scene = new ScrollMagic.Scene({triggerElement: '#trigger'}).setClassToggle('.unscrolled', 'unscrolled').reverse(false);
        scene.triggerHook(0.6);
        scene.addTo(controller);
        //console.log(scene.triggerHook());
        $('.section-1, .section-2').css('opacity', 0);
        var scene2 = new ScrollMagic.Scene({
            triggerElement: '#trigger-2',
            triggerHook: 0.3
        }).addTo(controller).on('enter leave', function (e) {
            $('.image-1').addClass('animated fadeInLeft');
            $('.text-1').addClass('animated fadeInRight');
            $('.section-1,.section-2').css('opacity', 1);
            $('.section-2').addClass('animated fadeInUpBig');
        }).reverse(false);
        new ScrollMagic.Scene({
            triggerElement: '#block-views-block-gallery-block-1',
            triggerHook: 0.6
        }).addTo(controller).on('enter leave', function () {
            $('#block-views-block-gallery-block-1 .views-row').addClass('animated fadeInUp');
            $('#block-views-block-gallery-block-1 .views-row').css('opacity', 1);
        }).reverse(false);
    });
})(jQuery, ScrollMagic);