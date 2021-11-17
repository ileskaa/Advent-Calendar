var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
var today = new Date()
var dd = today.getDate(); //padStart method pads the current string with another (mltiple times if neede) until the resulting string reaches the given length
var mm = today.getMonth() //January is 0!

var date = d3.select("#date")
date.text(`${dd} ${months[mm]}`) //template literals baby

boxwidth = 1052.7181
boxheight = 743.1156

const mediaQuery = window.matchMedia('(max-width: 768px), (min-aspect-ratio: 74/100) and (max-aspect-ratio: 76/100)')

function adaptVariables() {
  if (mediaQuery.matches) { //if mobile
    rows = 6 //the strength of var is that it can be read even outside the if statement
    columns = 4
    side = 100/4.4 + 'vw'
    rowSpacing = 1.1 + 'vw'
    colSpacing = 6.5 + 'vw'
    leftMargin = 3 + 'vw'
  } else { //if computer screen
    rows = 4
    columns = 6
    side = 100/6.6 + 'vw'
    rowSpacing = 1.1 + 'vw'
    colSpacing = 2.5 + 'vw'
    leftMargin = 1 + 'vw'
  }
}
adaptVariables()

function handleChange() {
    adaptVariables()
    let elements = document.getElementsByClassName('square')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    counter = 1
    renderBoxes()
}
mediaQuery.addEventListener('change', handleChange)

const wrapper = d3.select("#wrapper") //we select the <g> with id="group"

let counter = 1;
function renderBoxes() {
  for (let i=0; i < rows; i++) {
    for (let j=0; j < columns; j++) {
      let container = wrapper.append('svg')
        .attr('class', 'square')
        .style('top', `calc( (${side} + ${colSpacing}) * ${i})`)
        .style('left', `calc( (${side} + ${rowSpacing}) * ${j} + ${leftMargin} )`)
        .attr("width", side)
        .attr("height", side)
      
      container.append('text')
        .text(counter)
        .attr("x", "50%")
        .attr("y", "50%")
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')

      if (counter > dd) {
        container.append("svg:image")
          .attr("xlink:href", "img/lock.svg")
          .attr('opacity', 0.3)
          .attr('class', 'lock')
          .attr("x", "15%")
          .attr("y", "5%")
      }
      
      container.append('rect')
        .attr('class', "open")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", "100%")
        .attr("height", "100%")
        .attr('fill', 'white')
        .attr('fill-opacity', 0)
        .attr("stroke", "white")
        .attr("stroke-width", "2px")
        .attr('id', counter)

      counter += 1
    }
  }
}
renderBoxes();

//document.getElementById("1").style.stroke = 'red'
document.getElementById("1").addEventListener('click', () => {
  console.log(document.getElementById("1").id)
})

//next I need to create buttons that open modals
const openModalButtons = document.querySelectorAll(".open") //adding a data attribute to a rect does not work, so refer to the "open" class
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => { //open the modal when a square is clicked
  button.addEventListener('click', () => {
    if (button.id <= dd) {
      const modal = document.getElementById('modal' + button.id)
      openModal(modal)
    } else {
      const modal = document.getElementById('too-soon') /* we select the div to which the openModalButtons point to */
      openModal(modal)
    }
  })
})

closeModalButtons.forEach(button => { //for each loop that allows to close modals by clicking on the close button
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => { //closes the modal by clicking outside it
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}