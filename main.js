$('#menu a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        alvoOffset = $(id).offset().top;
    menuAltura = $('header').innerHeight();
    $('html, body').animate(
        {
            scrollTop: alvoOffset - menuAltura
        }, 500)



})


$('#Logo').click(function (e) {
    e.preventDefault();
    $('html,body').animate(

        {
            scrollTop: 0
        }, 500)
})