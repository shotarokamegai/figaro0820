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
    this.container = document.getElementsByClassName('special-2409-airbnb')[0];
    this.visitor = document.getElementById('visitor');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.textTarget = document.getElementsByClassName('text-target');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.swipers = [];
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.duration = 100;
    this.end = 0;
    this.index = 0;
    this.velocity = 1;
    this.velocity_ = 1;
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
    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
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

  triggerMenu(e) {
    let elm = e.currentTarget;
    if (this.menu.classList.contains('active')) {
      this.menu.classList.remove('active');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.remove('active');
      }
    } else {
      this.menu.classList.add('active');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.add('active');
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
    window.scrollTo(0, 0);
    this.container.classList.add('loaded');
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(this.swipers)
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
