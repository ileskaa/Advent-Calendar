function setHeight() {
  let vh100 = window.innerHeight
  document.documentElement.style.setProperty('--vh100', `${vh100}px`);
}
setHeight()

window.addEventListener('resize', () => setHeight())