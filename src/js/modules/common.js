import Splitting from "splitting";

class Common {
  constructor() {
    Splitting();

    let q = document.getElementsByClassName('q');
    let getcolorsElm = document.getElementsByClassName('getcolors');

    for (let i = 0; i < q.length; i++) {
      let elm = q[i];
      elm.addEventListener('click', triggerQ);
    }
    setTimeout(() => {
    for (let i = 0; i < getcolorsElm.length; i++) {
      getColors(getcolorsElm[i]);
    }
    }, 100)

    function getColors(img) {
      const colorThief = new ColorThief();
      const target = img.parentElement.getElementsByClassName('getcolors_cover')[0]

      if (img.complete) {
        const color = `rgb(${colorThief.getColor(img)})`;
        target.setAttribute('style', `background-color: ${color}`);
      } else {
        img.addEventListener('load', () => {
          colorThief.getColor(img);
        });
      }
    }

    function triggerQ(e) {
      let elm = e.currentTarget;
      let parent = elm.parentElement;
      let a = parent.getElementsByClassName('a')[0];
      let aInner = parent.getElementsByClassName('a__inner')[0];

      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        a.setAttribute('style', `height: ${0}px;`)
      } else {
        parent.classList.add('open');
        a.setAttribute('style', `height: ${aInner.clientHeight}px;`)
      }
    }
  }
}

export default Common