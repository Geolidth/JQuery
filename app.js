$(document).ready(function () {
    $('.btn').click(function () {
        $('#after').last().after('<tr class="new__item"><td>' + $("#name:text").val() + '</td><td>' + $("#quantity:text").val() + '</td></tr>');
        $('.form-control:text').val('');
    });

    $('.theme1').click(function () {
        $('body').css({
            "background-color": "aquamarine",
            "color": "blue"
        });
        $('h1').css({
            "color": "royalblue"
        });
        $('table').css({
            "color": "royalblue"
        });
    });

    $('.theme2').click(function () {
        $('body').css({
            "background-color": "rgba(255, 127, 80, 0.6)",
            "color": "white"
        });
        $('h1').css({
            "color": "deeppink"
        });
        $('table').css({
            "color": "deeppink"
        });
    });

    $('.theme3').click(function () {
        $('body').css({
            "background-color": "darkolivegreen",
            "color": "white"
        });
        $('h1').css({
            "color": "yellow"
        });
        $('table').css({
            "color": "yellow"
        });
    });

    $('.default__theme').click(function(){
        $('body').css({
            "background-color": "rgba(128, 128, 0, 0.5)",
            "color":"black"
        });
        $('h1').css({
            "color":"brown"
        });
        $('table').css({
            "color":"brown"
        });
    });
});


