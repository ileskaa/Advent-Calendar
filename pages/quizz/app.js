window.addEventListener('resize', () => { //we pass an anonymous func to the eventListener
  let vh100 = window.innerHeight
  document.documentElement.style.setProperty('--vh100', `${vh100}px`);
})