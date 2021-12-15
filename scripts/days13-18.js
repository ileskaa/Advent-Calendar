function imageLink(modal, href) {
  var a = document.createElement('a')
  a.href = href, a.target = "_blank"
  var img = loadImage('img/image-icon.svg')
  img.width = '70'
  img.id = 'imgIcon'
  a.appendChild(img)
  modal.appendChild(a)
}

addPara(modals[13], textNode(`Ça y est on dépasse déjà la moitié ! Pour aujourd'hui je vous ai préparé un petit quiz sur le thème du cinéma. Si l'un de vous arrive à obtenir 10/10, qu'il prenne une capture d'écran et je lui paierai à boire dès que j'en aurai l'occasion. Par contre, je compte sur vous pour ne pas tricher...`))

addPara(modals[13], textNode("Pour lancer le quiz, il suffit de cliquer ci-dessous."))

var link = document.createElement('a')
link.href = "pages/quiz/quiz.html"
link.target = "_blank"
var section = createElt('section', '❔')
section.classList.add('link')
link.appendChild(section)
modals[13].appendChild(link)

addPara(modals[14], textNode("Image du jour :"))
lineBreaks(modals[14], 1)

var img = loadImage("https://api.time.com/wp-content/uploads/2021/11/erin-schaff-national-guard-top-100-photos-2021-1.jpg?w=1200&quality=85")
modals[14].appendChild(img)

lineBreaks(modals[14], 1)
addPara(modals[14], textNode("Petit moment détente. Cette photo a été prise en janvier 2021 à Washington D.C., au Capitole. Des soldats de la garde nationale profitent d'une pause entre deux quarts de travail pour se reposer, tandis que la chambre des représentants se prépare pour la seconde fois à voter la destitution de Donald Trump. Ce fut la quatrième fois que la chambre vota en faveur de la destitution d'un président, Andrew Johnson et Bill Clinton ayant précédé. Tout comme lors de la première procédure, Trump fut acquitté par le sénat, une majorité des deux tiers étant nécessaire pour juger l'accusé coupable."))

addPara(modals[14], textNode("Pour afficher l'image en plein écran :"))

imageLink(modals[14], "https://api.time.com/wp-content/uploads/2021/11/erin-schaff-national-guard-top-100-photos-2021-1.jpg?w=1200&quality=85")

addPara(modals[15], textNode("Maintenant, une peinture réalisé par le français Alexandre-Gabriel Decamps dans les années 1830. L'Académie des Beaux-Arts ayant rejeté plusieurs de ses travaux car jugés trop expérimentaux, Decamps realisa ce tableau qui montre toute l'affection qu'il avait pour l'Académie. On y voit plusieurs critiques d'art en train de sur-interpréter le genre de paysage baroque dont notre artiste était lassé. En somme, une belle singerie."))

lineBreaks(modals[15], 1)

var img = loadImage("https://collectionapi.metmuseum.org/api/collection/v1/iiif/436114/799864/main-image")
modals[15].appendChild(img)
modals[15].appendChild(italic('Les Experts – Alexandre-Gabriel Decamps'))

lineBreaks(modals[15], 1)
addPara(modals[15], textNode("Et comme toujours, pour le plein écran :"))
imageLink(modals[15], "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436114/799864/main-image")


addPara(modals[16], textNode("Nouveau jour, nouveau morceau."))

addPara(modals[16], textNode("Aujourd'hui à l'honneur un groupe originaire de Brooklyn (NYC). Le morceau que vous allez écouter est tiré de leur album "), italic("Sound of Silver"), textNode(". Au sujet du titre de l'album, James Murphy, le fondateur du groupe, a expliqué que c'était une référence à la médaille d'argent, et plus précisément à son père qui avait pour habitude de dire qu'avoir un enfant est une médaille d'argent permanente car rien ne pourra égaler la naissance du petit être, et tout ce qu'un parent pourra faire jusqu'à la fin de ses jours arrivera donc au mieux en deuxième place. Murphy a aussi évoqué le fait que "), italic("Sound of Silver"), textNode(" est paru en tant que second album du groupe, donc encore une référence à cette notion de deuxième position."))

addPara(modals[16], textNode("Quant au morceau en question, il parle de la perte d'un être cher. Ça vaut le coup de payer attention aux paroles car Murphy, qui en est l'auteur, a cette capacité de transmettre son expérience de la douleur en employant des images banales du quotidien. Voici un extrait des lyrics :"))

var section = createElt('blockquote', '')
section.innerHTML = `
  <i>
    The worst is all the lovely weather<br>
    I'm stunned, it's not raining<br>
    The coffee isn't even bitter<br>
    Because, what's the difference?<br>
  </i>`
modals[16].appendChild(section)

musicLink(modals[16], "https://www.youtube.com/watch?v=sZDKP5pnhhM", 280)