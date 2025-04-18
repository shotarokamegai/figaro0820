
class initSwiper {
  constructor() {
    let swiperArry = [];
    let swiperContainer = document.getElementsByClassName('swiper-container');
    for (let i = 0; i < swiperContainer.length; i++) {
    let excute = false;
    let thisSwiper = swiperContainer[i];
    let slides = thisSwiper.getAttribute('data-slides') === 'auto' ? 'auto' : parseFloat(thisSwiper.getAttribute('data-slides'));
    let slidesPc = thisSwiper.getAttribute('data-slidesPc') === 'auto' ? 'auto' : parseFloat(thisSwiper.getAttribute('data-slidesPc'));
    let scrollbar = (thisSwiper.getAttribute('data-scrollbar') === 'true') ? {
      el: thisSwiper.parentElement.getElementsByClassName('swiper-scrollbar')[0],
    } : false;
    let scrollbarPc = (thisSwiper.getAttribute('data-scrollbarPc') === 'true') ? {
      el: thisSwiper.parentElement.getElementsByClassName('swiper-scrollbar')[0],
    } : false;
    let navigation = (thisSwiper.getAttribute('data-navigation') === 'true') ?
      {
        nextEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-next')[0],
        prevEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-prev')[0],
        clickable: true
      } : false;
    let navigationPc = (thisSwiper.getAttribute('data-navigationPc') === 'true') ?
      {
        nextEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-next')[0],
        prevEl: thisSwiper.parentElement.getElementsByClassName('swiper-button-prev')[0],
        clickable: true
      } : false;
    let speed = parseInt(thisSwiper.getAttribute('data-speed'));
    let loopedSlides = slides;
    let autoplay;
    if (thisSwiper.getAttribute('data-autoplay') === 'marquee') {
      autoplay = {
        delay: 0,
        // pauseOnMouseEnter: true,
        disableOnInteraction: false,
        preventInteractionOnTransition: true,
      };
      loopedSlides = document.getElementsByClassName('news').length; 
    } else if (thisSwiper.getAttribute('data-autoplay') === 'false') {
      autoplay = false;
    } else if (thisSwiper.getAttribute('data-autoplay') === 'true') {
      autoplay = {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }
    if (window.innerWidth < 750 && thisSwiper.getAttribute('data-swiper') === 'true') {
      excute = true;
    } else if (window.innerWidth > 750 && thisSwiper.getAttribute('data-swiperPc') === 'true') {
      excute = true;
    }
    if (excute) {
      let swiper = new Swiper(thisSwiper, {
        speed: speed,
        initialSlide: parseInt(thisSwiper.getAttribute('data-initialslide')),
        autoplay: autoplay,
        loop: (thisSwiper.getAttribute('data-loop') === 'true') ? true : false,
        loopAdditionalSlides: loopedSlides,
        centeredSlides: (thisSwiper.getAttribute('data-center') === 'true') ? true : false,
        slidesPerView: slides,
        spaceBetween: parseInt(thisSwiper.getAttribute('data-space')),
        slidesPerGroup: 1,
        scrollbar: scrollbar,
        navigation: navigation,
        breakpoints: {
          750: {
            slidesPerView: slidesPc,
            loopAdditionalSlides: loopedSlides,
            centeredSlides:(thisSwiper.getAttribute('data-centerPc') === 'true') ? true : false,
            scrollbar: scrollbarPc,
            navigation: navigationPc,
            spaceBetween: parseInt(thisSwiper.getAttribute('data-spacePc'))
          }
        }
      });
      this.swiper = swiper;
      // swiperArry.push({
      //   swiper: swiper,
      //   elm: thisSwiper
      // });
    }
  }
}
}

export default initSwiper