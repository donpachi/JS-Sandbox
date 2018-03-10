$(document).ready(function(){
    var speed = 500;
    var autoswitch = true;
    var autoswitchinterval = 4000;

    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();

    $('#next').on('click',advanceSlide);

    $('#prev').on('click',retractSlide);

    if(autoswitch == true){
        var interval = setInterval(advanceSlide, autoswitchinterval);
    }

    function advanceSlide(){
        if (autoswitch == true){
            clearInterval(interval);
            interval = setInterval(advanceSlide, autoswitchinterval);
        }
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }
        else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    function retractSlide(){
        if (autoswitch == true){
            clearInterval(interval);
            interval = setInterval(advanceSlide, autoswitchinterval);
        }
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }
        else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});

