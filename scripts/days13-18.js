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


addPara(modals[17], textNode("Allez, on repart sur une note plus légère avec un cartoon réalisé par un certain Roy Delgado qui a passé 4 ans au sein de la marine états-unienne, a ensuite fondé un studio de création d'enseignes, puis est devenu dessinateur. Comme quoi il ne faut jamais penser d'une reconversion qu'elle est impossible."))

lineBreaks(modals[17], 1)
var img = loadImage("https://www.rd.com/wp-content/uploads/2019/08/meeting-takeaway.jpg?w=760")
modals[17].appendChild(img)


addPara(modals[18], textNode("Nouvelle suggestion cinématographique !"))

addPara(modals[18], textNode("Il s'agit de "), italic("Witness for the Prosecution"), textNode(" (1957), un film réalisé par Billy Wilder. Ce dernier avait initialement pour projet de devenir avocat, mais il abandonna finalement cette voie pour se faire recruter en tant que journaliste par un quotidien viennois. Il emménagea ensuite à Berlin et quelque temps après se mit à écrire des scénarios de film. Sa carrière dans le monde du cinéma était lancée. Bien que Wilder délaissa ses études de droit, il a néanmoins gardé un vif intérêt pour le sujet car le procès est un thème qui revient à plusieurs reprises dans ses films. D'ailleurs, c'est justement de cela que traite le film du jour. Il s'agit d'une affaire judiciaire qui, c'est le moins que l'on puisse dire, sera pleine de rebondissements. On peut y voir un Charles Laughton qui réussi la performance de jouer le rôle d'un avocat à la fois odieux et attachant. On y voit aussi une jeune Marlene Dietrich jouant la femme de l'accusé, ce qui en soit est déjà une raison pour voir ce long-métrage. Ce film contient par ailleurs des dialogues qui sont parmis les meilleurs que j'aie pu entendre. "))

addPara(modals[18], textNode("Bref, un film qui en vaut vraiment la chandelle."))

lineBreaks(modals[18], 1)
var img = loadImage("https://m.media-amazon.com/images/M/MV5BZDA4MWNkMTctZDQ0Mi00MTY2LThjYTAtNWM5OTY3NzA4MzIyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg")
img.width = 400
modals[18].appendChild(img)

//add image of movie and the img of Wilder's tombstone
lineBreaks(modals[18], 2)
var p = document.createElement('p')
p.innerHTML = "D'ailleurs, pour l'anecdote, voici à quoi ressemble la pierre tombale du génie&nbsp;:"
modals[18].appendChild(p)

lineBreaks(modals[18], 1)
var img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Billy_Wilders_grave_%28978339409%29.jpg/330px-Billy_Wilders_grave_%28978339409%29.jpg")
modals[18].appendChild(img)