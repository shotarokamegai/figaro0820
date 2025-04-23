import Lenis from 'lenis'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const InitLenis = () => {
  const menu = document.getElementById('menu');
  const menuTriggerWrapper = document.getElementsByClassName('menu-trigger-wrapper');
  const menuTitle = document.getElementsByClassName('menu-title')[0];

  let lerp = .07;

  if (window.innerWidth < 750) {
    lerp = 1;
  }

  const easeInOutCubic = (x) => {
    return x < 0.5
      ? 4 * x * x * x
      : 1 - Math.pow(-2 * x + 2, 3) / 2;
  };

  const lenisInstance = new Lenis({
    lerp: lerp,
    smooth: true,
    direction: "vertical"
  })
  const scrollTrigger = document.getElementsByClassName('scroll-trigger');

  setTimeout(() => {
  lenisInstance.scrollTo(document.getElementById('wrapper'), {immediate: true})
  }, 500)

  for (let i = 0; i < scrollTrigger.length; i++) {
    let target = document.getElementById(scrollTrigger[i].getAttribute('data-target'));
    scrollTrigger[i].addEventListener('click', () => {
      // menu.classList.remove('active');
      // for (let i = 0; i < menuTriggerWrapper.length; i++) {
      //   menuTriggerWrapper[i].classList.remove('active');
      // }
      // menuTitle.classList.remove('active');
      lenisInstance.scrollTo(target, {
        duration: 1,
        easing: easeInOutCubic
      })
    })
  }
  lenisInstance.on('scroll', (e) => {
    ScrollTrigger.update();
  })
  gsap.ticker.add((time)=>{
    lenisInstance.raf(time * 1000)
  })
}

window.addEventListener("DOMContentLoaded", InitLenis, false);