function tablet() {
    var $iW = $(window).width();
    if ($iW < 426) {
        return true;
    }
    console.log($iW);
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
var waypoint = new Waypoint({
  element: document.getElementById('servicios'),
  handler: function(direction) {
    if (direction == 'down') {
      $('.navbar').addClass('navbar-fixed-top');
    }
    else if (direction == 'up') {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  },
  offset: '5%'
});

$(document).on('ready', function() {

});
