window.addEventListener('DOMContentLoaded', function () { 
  //console.log('data-pv-sectionSET');
  $.each($('[data-pv-section]'), function(index, element) {
    $(this).one('inview', function(event, isInView) {
      if (isInView) {
        var sectionName = $(this).attr('data-pv-section');
        //console.log('data-pv-section = ' + sectionName);
        gtag('event', 'page_view', {
          'send_to': 'G-4XSMHG8NHL',
          'page_title': document.title,
          'page_location': window.location.href + sectionName, 
          'page_path': window.location.pathname + sectionName, 
        });
       cxResetEvents('1','eventPage-' + sectionName);
      }
    });
  });
});