class triggerModal {
  constructor() {
    const modal = document.getElementById('modal');
    const modalTrigger = document.getElementsByClassName('modal-trigger');

    for (let i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].addEventListener('click', initTriggerModal);
    }

    function initTriggerModal(e) {
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
      } else {
        modal.classList.add('active');
      }
    }
  }
}

export default triggerModal