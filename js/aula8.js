$.noConflict();
jQuery(document).ready( function () {
    jQuery('#makeTest').click( function () {
        jQuery(this).text('Mudei o texto do botão');
    });
});

// ou

let jq = $.noConflict();
jq(document).ready( function () {
    jq('#makeTest').click( function () {
        jq(this).text('Mudei o texto do botão');
    });
});