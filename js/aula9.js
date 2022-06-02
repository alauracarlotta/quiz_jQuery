$(document).ready( function () {
    $('#inputFilter').on('keyup', function () {
        let inputValue = $(this).val().toLowerCase();
        
        $('#myTable tr').filter( function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        });
    });

    $('#inputFilterCook').keyup ( function () {
        let inputValue = $(this).val().toLowerCase();
        
        $('ul li').filter( function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        });
    });
});
