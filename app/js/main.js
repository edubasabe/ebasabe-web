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
  element: document.getElementById('page-top'),
  handler: function(direction) {
    alert('You have scrolled to a thing');
  }
});

$(document).on('ready', function() {

});
