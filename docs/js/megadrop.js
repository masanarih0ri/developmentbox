// liタグにマウスオンした時の挙動
$(function(){
  $('#mddNav ul > li').hover(function(){
    childPanel = $(this).children('.mddWrap');
    childPanel.each(function(){
      childPanel.css({height: '0', display: 'block', opacity: '0'}).stop().animate({height: '200px', opacity: '1'}, 500, 'swing');
    });
  }, function(){
    // マウスが外に出た時の挙動
    childPanel.css({display: 'none'});
  });  
});
