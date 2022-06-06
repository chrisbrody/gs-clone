$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#main-header-navigation').addClass('sticky-class');
        } else {
          $('#main-header-navigation').removeClass('sticky-class');
        }
    });
});
