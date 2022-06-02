$(document).ready( function () {

    /*----------------
        Carregando arquivo externo
    -------------------------------*/

    $('#ajax-btn').click( function () {
        $('.AJAXTextTest').load('aula7.txt');
    });

    /*----------------
        Método GET
    -------------------*/

    $('#viaCEP-btn').click( function () {
        let inputCep = $('#inputCEP').val();
        let getInfoAPI = $.get(`viacep.com.br/ws/${inputCep}/json/`, function ( data , status ) {
            console.log('retorno da api: ', data);
            console.log('status do retorno: ', status);
        });
        $('.viaCEPAPI').text(getInfoAPI)
    });

    /*----------------
        Método POST
    -------------------*/

    /* $.post(`http://meusite.com.br`, { nome: 'Laura', idade: 27}, function ( data , status ) {
        console.log(data);
        console.log(status);
    }); */

    /*----------------
        Método AJAX
    -------------------*/

    /* $.ajax({
        url: 'http://meusitenovamente.com.br',

        type: 'GET', // 'POST'

        success: function (data, status) {
            console.log(data);
            console.log(status);
            $('#cidade').val(data.localidade);
            $('#uf').val(data.uf);
        },

        error: function () {
            console.log('Informe o erro');
            alert('a requisição não pode ser efetuada!')
        }
    }); */
});