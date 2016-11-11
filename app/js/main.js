$(document).on('ready', function () {


function tablet() {
var $iW = $(window).innerWidth();
  if ($iW < 992) {
    return true;
  }
}


// ---
// Cambio de orden de columnas en Responsive
// ---


if ( tablet() )
{
   $('.imagen').insertBefore('.texto');
}
else

{
   $('.texto').insertAfter('.imagen');
}
});
