import Scroll from './utils/Scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class main {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.container = document.getElementsByClassName('special-241217')[0];
    this.visitor = document.getElementById('visitor');
    this.modal = document.getElementById('modal');
    this.footer = document.getElementById('footer');
    this.textTarget = document.getElementsByClassName('text-target');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.swipers = [];
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.modalTrigger = document.getElementsByClassName('modal-trigger');
    this.duration = 100;
    this.end = 0;
    this.index = 0;
    this.velocity = 1;
    this.velocity_ = 1;
    this.swiperArry = [];
    this.initial = true;
    this.scrolling = false;
    this.scrollActive = false;
    this.scroller = document.body;
    this.scrollingElement =
      'scrollingElement' in document
        ? document.scrollingElement
        : window.navigator.userAgent.indexOf('WebKit') != -1
          ? body
          : document.documentElement || body.parentNode;

    gsap.registerPlugin(ScrollTrigger);

    // Splitting();
    this.init();
    this.animationScroll();
    for (let i = 0; i < this.modalTrigger.length; i++) {
      this.modalTrigger[i].addEventListener('click', this.triggerModal.bind(this));
    }
    for (let i = 0; i < this.scrollTrigger.length; i++) {
      this.scrollTrigger[i].addEventListener('click', this.toScroll.bind(this));
    }
    window.onresize = () => {
      this.resizeEvent();
    }
    window.onscroll = () => {
      this.scrollAnimation();
    }
    const mediaQuery = window.matchMedia('(min-width: 750px)');
    // 関数を定義
    // ロード時に判定
    this.checkWindow(mediaQuery);
    // ブレイクポイントが切り替わったら判定
    mediaQuery.addEventListener('change', this.checkWindow.bind(this));
  }

  checkWindow(windowSize) {
    // ウィンドウサイズが768px以上か
    if (windowSize.matches) {
        // 768px以上の時（PCの処理）
        console.log('PC');
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        // this.videoY = -this.height/4;
        // this.animationScroll();
        for (let i = 0; i < this.swiperArry.length; i++) {
          this.swiperArry[i].swiper.destroy();
        }
        this.swiperArry = [];
        this.initSwiper();
    } else {
        // 上記以外の時（SPの処理）
        console.log('SP');
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        // this.videoY = -this.width/.84;
        // this.animationScroll();
        for (let i = 0; i < this.swiperArry.length; i++) {
          this.swiperArry[i].swiper.destroy();
        }
        this.swiperArry = [];
        ScrollTrigger.refresh();
    }
  }

  initSwiper() {
    for (let i = 0; i < this.swiperContainer.length; i++) {
      let excute = false;
      let thisSwiper = this.swiperContainer[i];
      let slides = thisSwiper.getAttribute('data-slides') === 'auto' ? 'auto' : parseInt(thisSwiper.getAttribute('data-slides'));
      let slidesPc = thisSwiper.getAttribute('data-slidesPc') === 'auto' ? 'auto' : parseInt(thisSwiper.getAttribute('data-slidesPc'));
      let scrollbar = (thisSwiper.getAttribute('data-scrollbar') === 'true') ? {
        el: `.${thisSwiper.getAttribute('id')}-scrollbar`,
      } : false;
      let scrollbarPc = (thisSwiper.getAttribute('data-scrollbarPc') === 'true') ? {
        el: `.${thisSwiper.getAttribute('id')}-scrollbar`,
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
      if (this.width < 750 && thisSwiper.getAttribute('data-swiper') === 'true') {
        excute = true;
      } else if (this.width > 750 && thisSwiper.getAttribute('data-swiperPc') === 'true') {
        excute = true;
      }
      if (excute) {
        let swiper = new Swiper(thisSwiper, {
          speed: speed,
          initialSlide: parseInt(thisSwiper.getAttribute('data-initialslide')),
          autoplay: autoplay,
          loop: (thisSwiper.getAttribute('data-loop') === 'true') ? true : false,
          loopedSlides: loopedSlides,
          centeredSlides: (thisSwiper.getAttribute('data-center') === 'true') ? true : false,
          slidesPerView: slides,
          spaceBetween: parseInt(thisSwiper.getAttribute('data-space')),
          // slidesPerGroup: parseInt(thisSwiper.getAttribute('data-slides')),
          scrollbar: scrollbar,
          navigation: navigation,
          on: {
            slideChangeTransitionStart: (e) => {
              let index = document.getElementById(`current1`);
              if (index) {
                let span = index.getElementsByTagName('span');
                let max = span.length;
                for (let i = 0; i < span.length; i++) {
                  if (span[i].classList.contains('up')) {
                    span[i].classList.remove('active')
                    span[i].classList.remove('up')
                  }
                  if (span[i].classList.contains('active')) {
                    if (span[i].classList.contains('initial')) {
                      span[i].classList.remove('initial')
                    } else {
                      span[i].classList.add('up')
                    }
                  }
                  if (e.realIndex === i || (e.realIndex === max && i === 0)) {
                    span[i].classList.add('active')
                  }
                }
              }
            },
          },
          breakpoints: {
            750: {
              slidesPerView: slidesPc,
              loopedSlides: loopedSlides,
              scrollbar: scrollbarPc,
              navigation: navigationPc,
              spaceBetween: parseInt(thisSwiper.getAttribute('data-spacePc'))
            }
          }
        });
        this.swiperArry.push({
          swiper: swiper,
          elm: thisSwiper
        });
      }
    }
}

  animationScroll() {
    let addactive = document.getElementsByClassName('addactive');
    let parallax = document.getElementsByClassName('parallax');

    for (let i = 0; i < parallax.length; i++) {
      let elm = parallax[i];
      let amount = elm.getAttribute('data-amount');
      gsap.fromTo(elm, {
        y: () => `${amount/ -2}%`,
      }, {
        y: () => `${amount/ 2}%`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }

    for (let i = 0; i < addactive.length; i++) {
      let elm = addactive[i];
      let start = `top center+=${window.innerHeight/4}`;
      if (elm.classList.contains('blur')) {
        start = `top center`;
      }
      if (elm.classList.contains('first')) {
        start = `top bottom+=${window.innerWidth*.3}`;
      }
      if (elm.classList.contains('delay')) {
        start = `center center+=${window.innerHeight/4}`;
      }
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            elm.classList.add('active');
          }
        }
      });
    }
  }

  mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

  lerp(a, b, t) {
    if(b == a) return a;
    return a + t * (b - a);
  }

  triggerModal(e) {
    let elm = e.currentTarget;
    if (this.modal.classList.contains('active')) {
      this.modal.classList.remove('active');
    } else {
      let index = parseInt(elm.getAttribute('data-target'));
      this.modal.classList.add('active');
    if (this.width < 750) {
        this.modal.scrollTo(0, document.getElementsByClassName('swiper-slide')[index-1].offsetTop); 
      } else {
        this.swiperArry[0].swiper.slideTo(index);
      }
    }
  }

  toScroll(e) {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    top -= this.header.clientHeight;

    Scroll.to(top, 2);
  }

  interval() {
    this.velocity = this.lerp(this.velocity, 1, .05);
    // console.log(this.velocity);
    if (this.velocity > 0) {
      this.tl.timeScale(this.velocity);
    }
  }

  init() {
    this.resizeEvent();
    // this.lenis();
    this.initSwiper();
    window.scrollTo(0, 0);
    this.container.classList.add('loaded');
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    for (let i = 0; i < this.swipers.length; i++) {
      // let thisSwiper = this.swipers[i];
      // console.log(thisSwiper)
      // thisSwiper.autoplay.stop();
      // thisSwiper.autoplay.start();
    }
  }
  scrollAnimation() {
    this.scrollY = this.scrollingElement.scrollTop;

    // if (this.scrollY > this.height) {
    //   this.toTop.classList.add('active');
    // } else {
    //   this.toTop.classList.remove('active');
    // }
  }
  lenis() {
    let lerp = .8;
    let duration = 1.1;
    if (this.width < 750) {
      // lerp = .1;
      // duration = 3;
      // this.lenisInstance = new Lenis({
      //   lerp: lerp,
      //   duration: duration,
      //   smooth: true,
      //   smoothTouch: true,
      // })
    } else {
      if (this.browserName === 'Safari' && parseFloat(this.browserVersion) < 14) {
      } else {
        this.lenisInstance = new Lenis({
          lerp: lerp,
          duration: duration
        })
      }
    }

    if (this.lenisInstance) {
      gsap.ticker.add((time)=>{
        this.lenisInstance.raf(time * 1000)
      })
    }
  }

}

window.addEventListener("load", () => {
  new main();
});
