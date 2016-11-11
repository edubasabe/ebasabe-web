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

$(document).on('ready', function() {

});
