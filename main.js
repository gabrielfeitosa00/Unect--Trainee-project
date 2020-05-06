$('#menu a[href^="#"]').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        alvoOffset = $(id).offset().top,
        menuAltura = $('header').innerHeight();
    
    $('html, body').animate(
        {
            scrollTop: alvoOffset - menuAltura
        }, 500);



});


$('#Logo').click(function (e) {
    e.preventDefault();
    $('html,body').animate(

        {
            scrollTop: 0
        }, 500);
});

$('.ContentBox').each(function(){
    var height=$(this).height(),
        offsetTopo= $(this).offset().top,
        menuAltura = $('header').innerHeight(),
        id= $(this).attr('id'),
        $itemMenu=$('a[href="#'+ id +'"]');


    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();

        if(offsetTopo -menuAltura <= scrollTop && offsetTopo + height -menuAltura>= scrollTop){
                $itemMenu.addClass('active');
            }

            
        else{
                $itemMenu.removeClass('active');
            }



    });



});

$(document).ready(function()
{
    $('.showMore').click(
        function(){
            $('.mais').toggle();
        }
    )   
});


    