import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollAnimation = () => {
    let top = document.getElementById('top');
    let addactive = document.getElementsByClassName('addactive');
    let show = document.getElementsByClassName('show');
    let scaleImage = document.getElementsByClassName('scale-image');
    let parallax = document.getElementsByClassName('parallax');
    let revert = document.getElementsByClassName('revert');

    window.scrollTo(0, 0);

    for (let i = 0; i < revert.length; i++) {
      let elm = revert[i];
      let start = `top 0`;
      let end = `top ${top.clientHeight}`;
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: top,
          start: start, 
          // end: end, 
          // markers: true,
          // end: end, 
          onEnter: () => {
            elm.classList.remove('revert_');
          },
          onEnterBack: () => {
            elm.classList.remove('revert_');
          },
          onLeave: () => {
            elm.classList.add('revert_');
          },
          // onLeaveBack: () => {
          //   elm.classList.remove('revert_');
          // },
        }
      });
    }

    for (let i = 0; i < scaleImage.length; i++) {
      let elm = scaleImage[i];
      let start = `top bottom-=${window.innerHeight/4}`;
      let img = elm.getElementsByTagName('img')[0];
      gsap.fromTo(img, {
         opacity: 0,
         y: `24px`,
         scale: 1.05
        }, {
         opacity: 1,
         y: `0px`,
         scale: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
        }
      });
    }

    for (let i = 0; i < show.length; i++) {
      let elm = show[i];
      let start = `top bottom-=${window.innerHeight/4}`;
      gsap.fromTo(elm, {
         opacity: 0,
         y: `20px`
        }, {
        opacity: 1,
        y: `0px`,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            elm.classList.add('active');
            if (elm.classList.contains('show')) {
              setTimeout(() => {
                elm.classList.add('nowillchange');
              }, 3000)
            }
          }
        }
      });
    }

    for (let i = 0; i < addactive.length; i++) {
      let elm = addactive[i];
      let start = `top bottom-=${window.innerHeight/4}`;
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            elm.classList.add('active');
            if (elm.classList.contains('show')) {
              setTimeout(() => {
                elm.classList.add('nowillchange');
              }, 3000)
            }
          }
        }
      });
    }

    for (let i = 0; i < parallax.length; i++) {
      let elm = parallax[i];
      let amount = elm.getAttribute('data-amount');
      let child = elm.getElementsByClassName('image')[0];
      // if (window.innerWidth < 750) {
      //   amount =  amount / 3.5;
      // }
      gsap.fromTo(child, {
        // y: 0,
        y: () => `0`,
      }, {
        y: () => `${amount}%`,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }
}

window.addEventListener("DOMContentLoaded", scrollAnimation, false);