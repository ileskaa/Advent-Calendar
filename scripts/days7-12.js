//let's create an array that will allow us to target the bodies of our modal
const modals = []
for (let i=7; i<25; i++) { //elements 0-6 of our array will be empty since we start at i=7
  modals[i] = document.querySelector('#modal' + i + ' .modal-body')
}

addPara(modals[7], textNode(`Aujourd'hui je vous propose la recette d'une pâtisserie fort appréciée en Finlande et dans les pays scandinaves. Pour découvrir ça, suivez le lien :`))

var a = document.createElement('a')
a.href = "pages/recipe/roulés-cannelle.html", a.target = "_blank"
var section = document.createElement('section')
section.appendChild(textNode('😋'))
section.id = "miam"
a.appendChild(section)
modals[7].appendChild(a)

lineBreaks(modals[7], 2)

addPara(modals[7], textNode(`Et comme je sais que tout le monde n'a pas envie de mettre les mains à la pâte, je partage également une courte citation venant d'un caricaturiste français du 19ème siècle :`))

lineBreaks(modals[7], 2)

citation = document.createElement('cite')
citation.appendChild(textNode("C'est mon opinion, et je la partage."))
addPara(modals[7], citation)

var p = document.createElement('p')
p.innerText = '- Henry Monnier'
p.style = "font-size: .8em"
addPara(modals[7], p)

addPara(modals[8], textNode(`Koko arrête de tricher`))