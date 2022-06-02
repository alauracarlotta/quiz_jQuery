/*-----------------
    Em Javascript
------------------- */
// document.getElementById("h1Title").innerHTML = "Teste";


/*-----------------
    Em jQuery
------------------- */
// $(seletor).acao()

$("#h1Title").html("Aprendendo jQuery"); // Insere texto na tag
$('h1').addClass('text-red'); // estilização

$(document).ready(function() {
    alert('All you reaaaaaady?') // Assim que tudo estiver pronto, é carregada essa função
})

