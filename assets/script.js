var num = 150;

$(window).bind('scroll', function(){
    if ($(window).scrollTop()>num){
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    }
    else
    {
        $('.menu').removeClass('scrolled');
    }
});
