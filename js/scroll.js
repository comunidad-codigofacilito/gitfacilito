$(document).ready(function () {
    $('#arrow').click(function () {
        $('html, body').animate({
            scrollTop: $('#bienvenida').offset().top
        }, 1300);
    })
})