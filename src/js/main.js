// import imagesLoaded from 'imagesloaded'
import "./modules/trigger-menu";
// import initSwiper from "./modules/init-swiper";
// import triggerModal from "./modules/trigger-modal";
// import Common from "./modules/common";
import "./modules/scroll-animation";
import "./modules/check-mediaquery";
// import "./modules/movie";
import "./modules/lenis";

class main {
  constructor() {
    this.root = document.getElementById('root');
    // this.swiper = new initSwiper()
    // this.modal = new triggerModal();

    this.init();
    window.onresize = () => {
      this.resizeEvent();
    }
  }

  init() {
    // new Common();
    this.resizeEvent();
    setTimeout(() => {
      this.root.classList.add('loaded');
    }, 10)
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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