const gifAnimation = () => {
    let gif = document.getElementsByClassName('gif-image');
    let max = gif.length;
    let index = 0;

    setInterval(gifAnim, 3000);

    function gifAnim() {
      if (index < max-1) {
        index++;
      } else {
        index = 0;
      }
      for (let i = 0; i < gif.length; i++) {
        let image = gif[i];
        image.classList.remove('active');
      }
      gif[index].classList.add('active');
    }
}

window.addEventListener("DOMContentLoaded", gifAnimation, false);