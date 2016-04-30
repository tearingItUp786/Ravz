$(window).scroll(function(e, data){
  var windowScroll = $(this).scrollTop();
  console.log(windowScroll);
  $('.brush').css({
    'transform': 'translate(0px, '+windowScroll/3+'%)'
  });
  $('#greeting').css({
    'transform': 'translate(0px, '+windowScroll/1.5+'%)'
  });

  if(windowScroll >= 300){
    console.log("bro beans");
    $('.navigation').addClass('tinted-nav');
  }else{
    $('.navigation').removeClass('tinted-nav');
  }
});
