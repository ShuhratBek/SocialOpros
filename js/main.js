$(document).ready(function() {
    $('.nopass input[type=radio]').click(function(){
        if($('.opros1-1').is(':checked') && $('.opros1-2').is(':checked') && $('.opros1-3').is(':checked')){
            $('#next2').removeClass('disabled');
        }
    });
    $('#next2').click(function(){
        if($('.opros1-1').is(':checked') && $('.opros1-2').is(':checked') && $('.opros1-3').is(':checked')){
            $('.list-group-item').eq(0).removeClass("active");
            $('.list-group-item').eq(1).addClass("active");
            $(".tab-content").eq(0).removeClass("active");
            $(".tab-content").eq(1).addClass("active");
            $('.progress-bar').css('width','10%');
        }
    });
    $('.pass input[type=radio]').click(function(){
        var index = $('.list-group-item.active').index();
        console.log($('.list-group-item').size());
        
        if(index<$('.list-group-item').size()-1){
            $('.list-group-item').eq(index).removeClass('active').next('.list-group-item').addClass('active');
            $('.tab-content').eq(index).removeClass('active').next('.tab-content').addClass('active');
            $('.progress-bar').css('width',$('.tab-content.active').index()*10+'%');
        } else {
            $('.list-group-item').eq(index).removeClass('active');
            $('.list-group').hide();
            $(".tab-content").eq(index).removeClass("active");
            $('#prize-panel').addClass('active');
            $('.tab-contents').css('width','100%');
            $('.progress-bar').css('width','0%');
            $('.progress-panel').hide();
        }
    });
});