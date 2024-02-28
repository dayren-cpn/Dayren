const dialog = document.querySelector('#myDialog')
const dialogOpener = document.querySelector('#openDialogButton')
const dialogCloser = document.querySelector('#closeDialogButton')

dialog.addEventListener('click', closeOnBackDropClick)
dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
   event.stopPropagation()
   close()
})

function closeOnBackDropClick({ currentTarget, target }) {
   const dialog = currentTarget
   const isClickedOnBackDrop = target === dialog

   if (isClickedOnBackDrop) {
      dialog.close()
   }
}

function openModalAndLockScroll() {
   dialog.showModal()
   document.body.classList.add('scroll-lock')
}

function returnScroll() {
   document.body.classList.remove('scroll-lock')
}

function close() {
   dialog.close()
   returnScroll()
}

