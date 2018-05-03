//I used jQuery for this website


$(document).ready(function(){
  $(".fancybox").fancybox();

  $('.scrollToBottom').click(function(){
    $('html,body').animate({scrollTop:$(document).height()}, 1000);
    return false;
});

//End of scrolling to bottom animation

    $('.scrollToTop').click(function(){
      $('html,body').animate({scrollTop: 0}, 800);
    return false;
  });

  //End of scrolling to top animation


  });
