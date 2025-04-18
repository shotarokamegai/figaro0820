const triggerMenu = () => {
    const menuTriggerWrapper = document.getElementsByClassName('menu-trigger-wrapper');
    const menu = document.getElementById('menu');

    for (let i = 0; i < menuTriggerWrapper.length; i++) {
      menuTriggerWrapper[i].addEventListener('click', initTriggerMenu);
    }

    function initTriggerMenu() {
      if (menu) {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          for (let i = 0; i < menuTriggerWrapper.length; i++) {
            menuTriggerWrapper[i].classList.remove('active');
          }
        } else {
          menu.classList.add('active');
          for (let i = 0; i < menuTriggerWrapper.length; i++) {
            menuTriggerWrapper[i].classList.add('active');
          }
        }
      }
    }
}

window.addEventListener("DOMContentLoaded", triggerMenu, false);