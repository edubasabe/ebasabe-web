//--
// jQuery to collapse the navbar on scroll
// --

// $(window).scroll(function() {
//
//   if ($('main').hasClass('nav-animation'))
//   {
//     // console.log('Main tiene la clase');
//     if ($('.navbar').offset().top > 1) {
//       // console.log('Tiene la clase y funciona el segundo if');
//         $(".navbar-fixed-top").addClass("top-nav-collapse navbar--bg-color");
//     } else {
//       // console.log('no sirve');
//         $(".navbar-fixed-top").removeClass("top-nav-collapse navbar--bg-color");
//     }
//   }
// });

//--
// jQuery for page scrolling feature - requires jQuery Easing plugin
//--
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
