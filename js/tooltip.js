$(function(){
  $('a:has(.ttpShow)').mouseover(function(e){
    //ツールチップ用のブロック要素を作成
    $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
    //生成したブロック要素をカーソルの位置に出す
    $('#ttpPanel').css({
      top  : (e.pageY + 1) + 'px',
      left : (e.pageX + 1) + 'px'
    }).fadeIn('fast');
  }).mousemove(function(e){
    //マウスが動いた時にブロック要素の位置も一緒に動くようにする
    $('#ttpPanel').css({
      top  : (e.pageY + 1) + 'px',
      left : (e.pageX + 1) + 'px'
    });
  }).mouseout(function(){
    $('#ttpPanel').remove();
  });
});
