const burgerBtn = document.querySelector('#hamburger-btn')
const burgerNav = document.querySelector('#humburder-nav')
const burgerIcon = document.querySelector('#btn-burger-icon')
const crossIcon = document.querySelector('#btn-cross-icon')

burgerBtn.addEventListener('click', () => {
  burgerNav.classList.toggle('hidden')
  burgerIcon.classList.toggle('hidden')
  crossIcon.classList.toggle('hidden')
})
