$(document).ready(function(){

    //EFECTO NAV BAR
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500));
    });

    //EFECTO HEADER
    if($(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //RESTABLECER
    $(window).resize(function(){
        if($(window).width() < 800){
            $('header .textos').animate({
                opacity: 1,
                marginTop: '0px'
            }, 1500);
        }
    });


    //SCROLL ELEMENTOS MENU
    var acerca = $('#acerca-de').offset().top,
        menu = $('.contenedor-menu').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        resena = $('#resena').offset().top;

    $('#btnAcerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acerca-100
        }, 500);
    });

    $('#btnMenu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu-100
        }, 500);
    });

    $('#btnGaleria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btnUbicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion+100
        }, 500);
    });

    $('#btnResena').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: resena+100
        }, 500);
    });
});
