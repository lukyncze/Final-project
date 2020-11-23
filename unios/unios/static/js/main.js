$(function() {
    // Render fixed-top navbar when scrolled down
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 25);
    });

    // Solves responsive mobile navigation bar
	$("[data-trigger]").on("click",function(){
        var trigger_id=$(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");
        $('body').toggleClass("mobile-nav-active");
    });
 
    $('.animated-button').on('click',function(){
        $('.animated-icon').toggleClass('open');
    });

    // Scrolling to top of the page
    if($(window).scrollTop() > ($(window).height() / 2)){
        $('#scrollToTop').show();
    }
    else{
        $('#scrollToTop').hide();
    }

    $(window).on('scroll',function(){
        if($(window).scrollTop() > ($(window).height() / 2)){
            $('#scrollToTop').fadeIn(100);
        }
        else{
            $('#scrollToTop').fadeOut(100);
        }
    });
    
    $("#scrollToTop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });
});