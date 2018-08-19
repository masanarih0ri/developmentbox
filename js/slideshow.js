$(function(){
  //slideshowクラスを持ったものにそれぞれ処理をする
  $('.slideshow').each(function(){
    let slides = $(this).find('img')
    //スライドの数
    let slideCount = slides.length
    let currentIndex = 0;
    //7500msごとにshowNextSlideを走らせる
    setInterval(showNextSlide, 3000);
    //showNextSlideを定義
    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      //今のスライドをフェードアウト
      slides.eq(currentIndex).fadeOut();
      //次のスライドをフェードイン
      slides.eq(nextIndex).fadeIn();
      //現在のスライドインデックスを更新
      currentIndex = nextIndex;
    }
  });
});
