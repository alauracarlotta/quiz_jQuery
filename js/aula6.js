$( document ).ready( function () {
    let h1Text = $('h1').html();
    console.log('h1: ', h1Text);

    let pText = $('p').text();
    console.log('p: ', pText);

    $('input.btn').blur( function () {
        let inputTextValue = $(this).val();
        console.log('valor do input: ', inputTextValue);
    });

    $('#linkVerified').click( function () {
        let getLink = $('#googleLink').attr('href');
        $('#googleLink').addClass('red')
        console.log('href do link do google: ', getLink);
    });

    $('#dataAttributeBtn').click( function () {
        $(this).removeClass('btn')
        let getDataAttribute = $('#dataAttributeInput').attr('data-input');
        console.log('data attribute input: ', getDataAttribute);
    });

    $('img').click( function () {
        let image = $(this).attr('src');
        console.log('imagem do google: ', image);
    });

    $('#button1').click( function () {
        $('h1').append('Agora o meu texto está assim, porque eu adicionei essa parte');
        $('body').append('<div class="d-inline black">Olha eu aqui</div>')
    });

    $('#button2').click( function () {
        $('h2').html('Agora o meu texto está assim! <em>igualzinho ao h1</em>');
        $('h2').prepend('<em>Aqui, eu stou vindo antes do texto que já tinha! </em>');

    });

    $('#button3').click( function () {
        $('#test1').val(323);
    });

    $('#button4').click( function () {
        $('#googleLink').text('Troquei o link');
        $('#googleLink').attr('href', 'https://www.instagram.com/');
        $('#googleLink').toggleClass('magenta');
    });

    $('#button5').click( function () {
        $('img').attr('src', 'http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif');
        let widthImage = $('img').width();
        let heightImage = $('img').height();
        console.log(`A largura da imagem é : ${ widthImage } px`);
        console.log(`A altura da imagem é : ${ heightImage.toFixed(2) } px`);
    });

    $('#button6').click( function () {
        $('h1').remove();
    });

    $('#button7').click( function () {
        $('#emptyDiv').empty();
        let infosDiv = $('#emptyDiv').css('background');
        console.log('infos da div sobre o bgc: ', infosDiv);
    });
});