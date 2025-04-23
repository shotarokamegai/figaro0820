// import imagesLoaded from 'imagesloaded'
import "./modules/trigger-menu";
// import initSwiper from "./modules/init-swiper";
// import triggerModal from "./modules/trigger-modal";
// import Common from "./modules/common";
import "./modules/check-mediaquery";
// import "./modules/movie";
import InitLenis from "./modules/lenis";
import "./modules/scroll-animation";

class main {
  constructor() {
    this.root = document.getElementById('contentTop');
    this.lenis = new InitLenis();
    this.lenis.init();
    this.init();
    window.onresize = () => {
      this.resizeEvent();
    }
  }

  init() {
    // new Common();
    this.resizeEvent();
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.root.classList.add('loaded');
    // setTimeout(() => {
    //   this.lenis.lenisInstance.scrollTo(document.getElementById('wrapper'), {immediate: true})
    // }, 500);
  }

  resizeEvent() {
    if (window.innerWidth < 750) {

    } else {
      let vh = window.innerHeight * 0.01;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // if (window.innerWidth / window.innerHeight > 1440 / 810) {
      //   this.root.classList.add('yoko');
      // } else {
      //   this.root.classList.remove('yoko');
      // }
    }
  }
}


window.addEventListener('DOMContentLoaded', () => {
  new main();
});