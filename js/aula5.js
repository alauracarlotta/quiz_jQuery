/*------------
    Animação de esconder e mostrar um elemento
----------------------------------------------- */

// ou 'slow' ao invés de colocar por tempo

$(document).ready( function () {
    $('#btnHide').click( function () {
        $('.green').hide(2000, function () {
            alert('Terminou de esconder');
        }); 
    });

    // ou 'fast'

    $('#btnShow').click( function () {
        $('.green').show(2000, function () {
            alert('Terminou de mostrar');
        }); 
    });
});

/*------------
    Método toogle
------------------*/

$(document).ready( function () {
    $('#btnClickHere').click( function () {
        $('.red').toggle(2000, function () {
            alert('Terminou de esconder');
        }); 
    });
});

/*------------
    Fade In
------------------*/
$(document).ready( function () {
    $('#fadeIn').click( function () {
        $('.yellow').fadeIn(2000); 
    });
});

/*------------
    Fade out
------------------*/
$(document).ready( function () {
    $('#fadeOut').click( function () {
        $('.yellow').fadeOut(2000); 
    });
});

/*------------
    Fade out
------------------*/
$(document).ready( function () {
    $('#fadeOut').click( function () {
        $('.yellow').fadeOut(2000); 
    });
});

/*------------
    Fade Toggle
------------------*/
$(document).ready( function () {
    $('#fadeToggle').click( function () {
        $('.magenta').fadeToggle(3000); 
    });
});

/*------------
    Flip
------------------*/
$(document).ready( function () {
    $('#flip').click( function () {
        $('#painel').slideToggle(3000); // ou slideDown ou slideUp
    });
});

/*------------
    Animate
------------------*/
$(document).ready( function () {
    $('.d-inline-1').click( function () {
        $(this).animate({ right: '250px' });
    });
});

/*------------
    Encadeamento
------------------*/
$(document).ready( function () {
    $('.aqua').click( function () {
        $(this).css('background-color', 'aquamarine').slideUp(2000).slideDown(3000);
    });
});
