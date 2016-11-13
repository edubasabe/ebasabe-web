function tablet() {
    var $iW = $(window).width();
    if ($iW <= 767) {
        return true;
    }
    // console.log($iW);
}

// ---
// Cambio de orden de columnas en Responsive
// ---
if (tablet()) {
    $('.imagen').insertBefore('.texto');
} else {
    //  $('.texto').insertAfter('.imagen');
}

// --
// Waypoints
// --
var navBar = $('.navbar');
var heroRowHeader = $('#hero .container > .row');

// var waypoint = new Waypoint({
//   // element: document.getElementById('hero'),
//   handler: function(direction) {
//     if (direction == 'down') {
//       navBar.addClass('navbar--bg-color');
//     }
//     else if (direction == 'up') {
//       navBar.removeClass('navbar--bg-color');
//     }
//   },
//   offset: 300
// });

//--
// Menu Open
// --
var navBar = $('.navbar');
$(document).on('ready', function() {
$('.navbar--menu-icon').click(function() {
  $(this).toggleClass('open');
  if (!navBar.hasClass('navbar--bg-color')) {
    navBar.addClass('navbar--bg-color');
  }
});
});
