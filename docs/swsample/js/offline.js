'use strict';

$(function(){
  $('.offline-caution').fadeIn(1000);

  // 固定して置きたいコンテンツ
  var fix = $('#side-nav');
  var side = $('.column-left');
  //固定する要素を収めておく範囲
  var colwrap = $('.columns-wrapper');
  var sideTop = side.offset().top;
  var fixTop = fix.offset().top;
  var wrapTop = colwrap.offset().top;
  var w = $(window);
  console.log(sideTop);
  console.log(fixTop);
  console.log(wrapTop);
  var adjust = function(){
    var winTop = w.scrollTop();

    if(winTop >= wrapTop){
      $('.column-left').addClass('side-nav-fixed');
      $('.column-right').addClass('main-fixed');
    }else{
      $('.column-left').removeClass('side-nav-fixed');
      $('.column-right').removeClass('main-fixed');
    }
  }
  // var adjust = function() {
  //   fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
  //   console.log(fixTop);
  //   // メニューの高さ
  //   var fixHeight = fix.outerHeight(true);
  //   //main要素の高さ
  //   var mainHeight = main.outerHeight();
  //   //スクロール位置を取得
  //   var winTop = w.scrollTop();
  //
  //   if(winTop + fixHeight > mainTop + mainHeight){
  //     fix.removeClass('side-nav-fixed');
  //   }else if(winTop >= fixTop){
  //     fix.addClass('side-nav-fixed');
  //   }else{
  //     fix.removeClass('side-nav-fixed');
  //   }
  // }
  //
  w.on('scroll',adjust);

  //スクロール量を取得
  //スクロール量がある一定値を超えた時にfunctionが動く
  //ある一定値とは？
  //左右に並んでいる要素をwrapするコンテンツの高さ？

});
