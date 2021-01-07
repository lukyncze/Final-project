$(function() {
    // Render fixed-top navbar when scrolled down
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
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
        }, 50);
    });

    // Preloader
    $('.preloader').addClass("preloader-disappeared");

    // Show department instead of e-mails
    $('#id_presmerovani option:eq(1)').text('Vedení');
    $('#id_presmerovani option:eq(2)').text('Servis a generální opravy');
    $('#id_presmerovani option:eq(3)').text('Elektro');
    $('#id_presmerovani option:eq(4)').text('Nákup a zásobování');
    $('#id_presmerovani option:eq(5)').text('Náhradní díly a kooperace (Crhonek)');
    $('#id_presmerovani option:eq(6)').text('Náhradní díly a kooperace (Podlesný)');
});