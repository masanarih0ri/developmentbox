$(function(){
  $('.required').on('keydown keyup keypress change focus blur', function(){
    if($(this).val() == ''){
      $(this).css({backgroundColor: '#ffcccc'});
    } else {
      $(this).css({backgroundColor: '#fff'});
    }
  }).change();
});
