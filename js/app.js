$(function () {

    //Desplegar menu (Mobile)

    $('.icono-menu').click(function () {

        $('nav ul').toggleClass("show")
    })

    // Aparecer video y desaparecer texto - Acerca de Mi

    $('body > div > div > i').click(function(){

        $('body > div > div > video').toggleClass("show-video");

        $('body > div > div > div').toggleClass("show-texto");

    })




});


/* Lo anterior tambien lo puedo hacer así. El toggleClass es mas practico (una especie de On / Off)


if ($('nav ul').hasClass('show')) {
    $('nav ul').removeClass("show")
}
else {
    $('nav ul').addClass("show")
}

*/




