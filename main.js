// rolagem suave ao clicar no menu

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

// rolagem ao topo ao clicar no logo 

$('#Logo').click(function (e) {
    e.preventDefault();
    $('html,body').animate(

        {
            scrollTop: 0
        }, 500);
});

// link ativo no menu

$('.ContentBox').each(function(){
    var height=$(this).height(),
        offsetTopo= $(this).offset().top,
        menuAltura = $('header').innerHeight(),
        id= $(this).attr('id'),
        $itemMenu=$('a[href="#'+ id +'"]');


    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();

        if(offsetTopo - menuAltura < scrollTop && offsetTopo + height - menuAltura> scrollTop){
                $itemMenu.addClass('active');
            }

            
        else{
                $itemMenu.removeClass('active');
            }



    });



});

// botão de mostrar mais/mostrar menos 

$(document).ready(function()
{
    $('.showMore').click(
        function(){
            $('.mais').slideToggle(250);
        }
    )   
});

// passar o slide pelo botão direito 

$('.slideContainer > :first').addClass('activeSlide');

    $('.right').click(
    
        function(){
            
            
            var imgAtual= $('.slideContainer > .activeSlide'),
                imgProx= imgAtual.next();

            
            if(imgProx.length==0)
            {
                
                imgProx=$('.slideContainer > :first-child');
                
                
            }

            imgProx.addClass('activeSlide');
            imgAtual.removeClass('activeSlide');
            
            

        }
    );

// passar o slide pelo botão esquerdo

    $('.left').click(
    
        function(){
            
            
            var imgAtual= $('.slideContainer  > .activeSlide'),
                imgPrev= imgAtual.prev();

            
            if(imgPrev.length==0)
            {
                
                imgPrev=$('.slideContainer > :last');
                
                
            }

            imgPrev.addClass('activeSlide');
            imgAtual.removeClass('activeSlide');
            
            

        }
    );


    