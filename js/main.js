$(document).ready(function() {
    $('.nopass input[type=radio]').click(function(){
        if($('input[name=age]').is(':checked') && $('input[name=gender]').is(':checked') && $('input[name=live]').is(':checked')){
            $('#next2').removeClass('disabled');
        }
    });
    $('#next2').click(function(){
        if($('input[name=age]').is(':checked') && $('input[name=gender]').is(':checked') && $('input[name=live]').is(':checked')){
        $('.list-group-item').eq(0).removeClass("active");
        $('.list-group-item').eq(1).addClass("active");
        $(".tab-content").eq(0).removeClass("active");
        $(".tab-content").eq(1).addClass("active");
        }
    });
    $('.pass input[type=radio]').click(function(){
        var index = $('.list-group-item.active').index();
        console.log($('.list-group-item').size());
        if(index<$('.list-group-item').size()-1){
            $('.list-group-item').eq(index).removeClass('active').next('.list-group-item').addClass('active');
            $(".tab-content").eq(index).removeClass("active").next('.tab-content').addClass('active');
        } else {
            $('.list-group-item').eq(index).removeClass('active');
            $('.list-group').hide();
            $(".tab-content").eq(index).removeClass("active");
            $('#prize-panel').addClass('active');
            $('.tab-contents').css('width','100%');
        }
    });
    /*$(".list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-content").removeClass("active");
        $(".tab-content").eq(index).addClass("active");
    });*/
});