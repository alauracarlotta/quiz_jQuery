/*------------
    Click
-------------- */
$(document).ready( function () {
   $('.btn-test').click(function () {
       console.log('Cliquei aqui');
   });
});

/*------------
    addClass - Click e adiciona class css ao elemento
----------------------------------------------------- */

$( document ).ready( function () {
    $( '.btn-test' ).click( function () {
        $( this ).addClass( 'btn-test__clicked' );
    }); 
});

/*------------
    Hide - Click e esconde  elementos
-------------------------------------- */

$( document ).ready( function () {
    $( '.btn-test' ).click( function () {
        $( 'p' ).hide();
    }); 
});

/*------------
    Hover - passa o mouse em cima e altera o texto do botão
----------------------------------------------------------- */

$( document ).ready( function () {
    $( '.btn-test' ).hover( function () {
        $( this ).text('entrei no botão');
    },

        /*------------
            Já entende que aqui seria um mouseout, isso é um atalho
        ------------------------------------------------------------- */
        function () { 
            $(this).text('Saí do botão');
        }
    ); 
});

/*------------
    Focus
-------------- */
$( document ).ready( function () {
    $( '#inputUserName' ).focus();
    },
    $( '#inputUserName' ).focus(function () {
        $( this ).css('border-radius', '10px');
        $( this ).css('border', '5px solid orange');
    })
);

/*------------
    Blur
-------------- */
$( document ).ready( function () {
    $( '#inputUserEmail' ).blur( function () { // quando sai do elemento, quando desfoca
        $( this ).css('border-radius', '10px');
        $( this ).css('border', '5px solid green');
    })
});

/*------------
    Funções onclick JS
---------------------- */
$( document ).ready( function () {
    $( '#testPtag' ).on( 'click', function () {
        $( this ).css('color', 'red');
    })
});

/*------------
    Vantagem do on é que você pode acrescentar mais de um evento passando um objeto com os eventos
-------------------------------------------------------------------------------------------------- */
$( document ).ready( function () {
    $( '#btnOtherButton' ).on({
        click: function () {
            $(this).css('background-color', 'red');
        },

        mouseenter: function () {
            $( this ).text('entrei no botão');
        },

        mouseleave: function () {
            $(this).css('color', 'pink');
            $(this).css('font-weight', 'bolder');

        }
    }).hover( function () {
        $(this).css('font-size', '30px');
    });
});
