function flash(e){
  $('.flash')
   .show()  //show the hidden div
   .animate({opacity: 0.5}, 300)
   .fadeOut(300)
   .css({'opacity': 1});
}

$(document).ready(function() {
  $('.flash').hide();
  $(document).mouseup(function(e) { flash(e); });
});
