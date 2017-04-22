function tablet() {
    var $iW = $(window).width();
    if ($iW <= 767) {
        return true;
    }
}

// ---
// Cambio de orden de columnas en Responsive
// ---
if (tablet()) {
    $('.imagen').insertBefore('.texto');
}

// --
// Waypoints
// --


var navBar = $('.navbar');
var waypoint = new Waypoint({
  element: document.getElementById('primary'),
  handler: function(direction) {

    if (direction == 'down') {
      navBar.addClass('top-nav-collapse navbar--bg-color');
    }
    else if (direction == 'up') {
      navBar.removeClass('top-nav-collapse navbar--bg-color');
    }

    else if ( $('div').hasClass('hero') && navBar.hasClass('navbar--bg-color')) {
      navBar.removeClass('top-nav-collapse navbar--bg-color');
    }

  },
  offset: 300
});

//--
// Menu Open
// --

$(document).on('ready', function() {
$('.navbar--menu-icon').click(function() {
  $(this).toggleClass('open');
  if (!$('.navbar').hasClass('navbar--bg-color')) {
    $('.navbar').addClass('navbar--bg-color');
  }
});
});

//---------
// Twenty Twenty
//----------
$(window).load(function(){
  $("#container1").twentytwenty();
});
