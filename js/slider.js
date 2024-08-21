/*
$('.section-marquee .inner').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 35000,
  cssEase: "linear",
  slidesToShow: 1,
  swipe: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
});

$('.section-marquee').each(function(index){
  setInterval(function() {
    $(this + ' img').clone(true).appendTo(this);
    console.log('add');
  }, 35000);
  setInterval(function() {
    $(this  + ' img').first().remove();
    console.log('del');
  }, 50000);
});
*/