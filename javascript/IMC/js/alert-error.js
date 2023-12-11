export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.add('alert-open')
  }, 
  close() {
    AlertError.element.classList.remove('alert-open')
  }
}
