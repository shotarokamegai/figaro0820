import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollAnimation = () => {
    let top = document.getElementById('top');
    let addactive = document.getElementsByClassName('addactive');
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
      let parent = elm.parentNode;
      let amount = elm.getAttribute('data-amount');
      // if (window.innerWidth < 750) {
      //   amount =  amount / 3.5;
      // }
      gsap.fromTo(elm, {
        // y: 0,
        y: () => `${amount/ -2}%`,
      }, {
        y: () => `${amount/ 2}%`,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: parent,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }
}

window.addEventListener("DOMContentLoaded", scrollAnimation, false);