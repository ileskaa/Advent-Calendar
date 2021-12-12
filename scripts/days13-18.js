addPara(modals[13], textNode(`Ça y est on dépasse déjà la moitié ! Pour aujourd'hui je vous ai préparé un petit quiz sur le thème du cinéma. Si l'un de vous arrive à obtenir 10/10, qu'il prenne une capture d'écran et je lui paierai à boire dès que j'en aurai l'occasion. Par contre, je compte sur vous pour ne pas tricher...`))

addPara(modals[13], textNode("Pour lancer le quizz, il suffit de cliquer ci-dessous."))

var link = document.createElement('a')
link.href = "pages/quiz/quiz.html"
link.target = "_blank"
var section = createElt('section', '❔')
section.classList.add('link')
link.appendChild(section)
modals[13].appendChild(link)

/* addPara(modals[13], textNode(`Aujourd'hui, jour de trêve.`))
createElt("p", "🕊️", "dove", modals[13])
addPara(modals[13], textNode(`Ça reprend demain !`)) */