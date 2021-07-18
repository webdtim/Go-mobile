const btn = document.querySelector('.btn--main')

if (btn) {
  btn.addEventListener('click', () => {
    console.log('Button clicked')
  })
}

const openModalbtns = document.querySelectorAll('.open-modal')

if (openModalbtns.length) {
  for (let btn of openModalbtns) {
    btn.addEventListener('click', openModal)
  }
}

const modal = document.querySelector('.modal'),
      modalBg = modal.querySelector('.modal__background')

function openModal(e) {
  e.preventDefault()

  const popupId = e.target.dataset.openModal,
        popup = modal.querySelector(`#${popupId}`),
        close = popup.querySelector('.popup__close')

  modal.classList.add('modal--open')
  popup.classList.add('popup--open')

  modalBg.addEventListener('click', closeModal)
  close.addEventListener('click', closeModal)
}

function closeModal() {
  modal.classList.remove('modal--open')

  const openPopup = modal.querySelector('.popup--open')

  if (openPopup) {
    openPopup.classList.remove('popup--open')
  }
}
