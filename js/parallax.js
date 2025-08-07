$(window).scroll(function() {
  var scrollPixel = $(this).scrollTop();
  $('[data-parallax-index="1"]').css('top', 80 - scrollPixel * 0.075 );
  $('[data-parallax-index="2"]').css('top', 80 - scrollPixel * 0.075 );
  $('[data-parallax-index="3"]').css('top', 80 - scrollPixel * 0.075 );
});