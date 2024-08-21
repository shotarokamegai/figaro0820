window.addEventListener('DOMContentLoaded', function () {
  $('.section-top').one('inview', function(event, isInView) {
    if (isInView) {
      $(this).attr('data-animation-state', 'active');
    }
  });
  setTimeout('initializeFadein()', 500);
});

function initializeFadein() {
  $.each($('[data-animation-state]:not(.section-top), :not(.section-lead) [data-animation-state]'), function(index, element) {
    $(this).css({
      'transition-delay': index * 5 + 'ms'
    });
    $(this).one('inview', function(event, isInView) {
      if (isInView) {
        $(this).attr('data-animation-state', 'active');
      }
    });
  })
  $.each($('.section-lead [data-animation-state]'), function(index, element) {
    $(this).css({
      'transition-delay': 1200 + index * 10 + 'ms'
    });
    $(this).one('inview', function(event, isInView) {
      if (isInView) {
        $(this).attr('data-animation-state', 'active');
      }
    });
  })
}