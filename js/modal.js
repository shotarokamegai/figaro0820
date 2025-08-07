window.addEventListener('DOMContentLoaded', function () {
  $('.section-bottom-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $('.section-anime .section-img').slick({
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear'
  });

  var modalBackground = $('.modal-background');
  var closeElement = $('.modal-background, .modal-window-close');
  let parentSectionName = 'section-bottom',
      targetModalWindow, slide;
  $('.section-bottom-slider').find('a').on('click', function(e){
    e.preventDefault();
    $("body, html").css('overflow', 'hidden');

    targetModalWindow = $('[data-modal-section="'+ parentSectionName + '"]');
    targetModalWindow.attr('data-display-state', 'block');

    if (targetModalWindow.find('ul.item-list')){
      slide = targetModalWindow.find('.item-list').slick({
        arrows: false,
        initialSlide: $(this).attr('href').replace('#', '') - 1
      });
      
      targetModalWindow.find('.slick-prev').on('click', function(){
        slide.slick('slickPrev');
      });

      targetModalWindow.on('click', function(){
        slide.slick('slickNext');
      });
      
      $(window).keydown(function(e){
        switch (e.keyCode) {
          case 37:
            slide.slick('slickPrev');
            break;
          case 39 :
            slide.slick('slickNext');
            break;
        }
        return true;
      });
    }

    modalBackground.attr('data-display-state', 'block');
  });
  closeElement.on('click', function () {
    $('[data-modal-section]').attr('data-display-state', 'hidden');
    $("body, html").css('overflow', 'auto');
    modalBackground.attr('data-display-state', 'hidden');

    if (targetModalWindow.find('ul.item-list')) {
      slide.slick('unslick');
    }
  });
  /*
  var modalBackground = $('.modal-background');
  var closeElement = $('.modal-background, .modal-window-close');
  let parentSection, parentSectionName, targetModalWindow, slide;

  $('.section-bottom-slider').find('a').on('click', function (e) {
    e.preventDefault();
    parentSection = $(this).parents('section-bottom');


    parentSectionName = parentSection.attr('id');
    targetModalWindow = $('[data-modal-section="'+ parentSectionName + '"]');
    targetModalWindow.attr('data-display-state', 'block');

    if (targetModalWindow.find('ul.section-bottom-slider')) {
      slide = targetModalWindow.find('.item-list').slick({
        arrows: false,
        initialSlide: $(this).attr('href').replace('#', '') - 1
      });

      targetModalWindow.find('.slick-prev').on('click', function () {
        slide.slick('slickPrev');
      });

      targetModalWindow.on('click', function () {
        $(this).on('click',function(e) {
          if(!$(e.target).closest('.btn-clickmore').length) {
            slide.slick('slickNext');
          }
        });
      });

      $(window).keydown(function(e){
        switch (e.keyCode) {
          case 37:
            slide.slick('slickPrev');
            break;
          case 39 :
            slide.slick('slickNext');
            break;
        }

        return true;
      });
    }

    modalBackground.attr('data-display-state', 'block');
  });

  closeElement.on('click', function () {
    $('[data-modal-section]').attr('data-display-state', 'hidden');
    modalBackground.attr('data-display-state', 'hidden');

    if (targetModalWindow.find('ul.section-bottom-slider')) {
      slide.slick('unslick');
    }
  });
  */
});