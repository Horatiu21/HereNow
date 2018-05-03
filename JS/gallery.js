$(document).ready(function(){
  $(".fancybox").fancybox();


  $('.scrollToBottom').click(function(){
    $('html,body').animate({scrollTop:$(document).height()}, 1000);

    return false;
  });
  $('.scrollToTop').click(function(){
    $('html,body').animate({scrollTop: 0}, 2000);
  return false;
});



});
