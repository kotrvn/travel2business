$(document).ready(function(){ 
  $(function(){
    $(window).scroll(function() {
      if($(this).scrollTop() >= 350) {
        $('.js-sticky').addClass('sticked-header');
        }
        else {
      $('.js-sticky').removeClass('sticked-header');
      }
    });
  });
});