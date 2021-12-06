//let's create an array that will allow us to target the bodies of our modal
const modals = []
for (let i=7; i<25; i++) { //elements 0-6 of our array will be empty since we start at i=7
  modals[i] = document.querySelector('#modal' + i + ' .modal-body')
}

function musicLink(modal, href, hue, onclick) {
  let a = document.createElement('a')
  a.href = href
  a.target = "_blank"
  a.setAttribute('onclick', onclick)

  var article = document.createElement('article')
  article.classList.add('base')
  article.style = "--hue:" + hue +"deg"
  article.appendChild(document.createTextNode('🎵'))
  a.appendChild(article)

  var article = document.createElement('article')
  article.classList.add('grey')
  article.appendChild(document.createTextNode('🎵'))
  a.appendChild(article)

  modal.appendChild(a)
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

//MODAL 8
addPara(modals[8], textNode(`Allez, ça part sur le deuxième morceau de ce calendrier.`))

addPara(modals[8], textNode(`Il s'agit d'un titre absolument dément chanté par un artiste britannique. Ce personnage faisait déjà danser nos parents, et il fera dancer les générations futures pour longtemps encore. Après tout il a une voix incroyable et son talent de chanteur n'a d'égal que ses qualités de danseur. Pour ce qui est des paroles, elles sont d'une profondeur qui, je dois l'avouer, m'ont touché au plus profond de mon âme. Tout cela explique le succès fou qu'il a eu dans les années 80 et 90.`))

addPara(modals[8], textNode(`Pour écouter le morceau, vous n'avez qu'à... Bref, vous commencez à savoir comment ça marche.`))

musicLink(modals[8], "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 0, "document.getElementById('troll').scrollIntoView();") //R.A.

lineBreaks(modals[8], 30)

var para = document.createElement("p")
para.id = "troll"
var txt = document.createTextNode(`Je sais je sais, je suis un grand gamin...`)
para.appendChild(txt)
modals[8].appendChild(para)

var para = document.createElement("p")
para.id = "grimace"
para.setAttribute("style", "font-size: 3rem")
var grimace = document.createTextNode('😬')
para.appendChild(grimace)
modals[8].appendChild(para)

var nobr = document.createElement('nobr')
var txt = document.createTextNode("(うまい")
nobr.appendChild(txt)
addPara(modals[8], textNode(`Bon maintenant que j'ai rempli mon obligation morale, je vais réellement pouvoir vous partager le titre du jour. Celui-ci est interprété par un groupe canado-japonais du nom de MONKEY MAJIK. Le morceau étant lui-même en japonais, je ne comprends strictement rien aux paroles, si ce n'est `), italic('zero-calorie'), textNode(' et '), italic("umarvelous"), textNode(`. Ce dernier est un mot-valise composé du terme japonais `), italic('umai '), nobr, textNode(`), employé notamment pour dire qu'un plat est délicieux, et du mot anglais `), italic('marvelous'), textNode(`. Ce morceau parle donc d'une nourriture dont le goût n'aurait rien à envier à celui de l'ambroisie que consommaient les dieux de l'Olympe, et qui serait dénuée de la moindre calorie. Pour ce qui est du restant des paroles, je suis dans le flou le plus total. Julie, si tu lis ces lignes, aides-moi à comprendre ce qu'elles signifient !!`)
)

addPara(modals[8], textNode('Le titre date de 2018, mais le clip a un style retro dont je suis fan. Je vous laisse aussi apprécier la magnifique chorégraphie qui va avec.'))

musicLink(modals[8], "https://www.youtube.com/watch?v=XWo627F7CeU", 210)


//MODAL 9
addPara(modals[9], textNode('Pour ce jour, une petite anecdote.'))

addPara(modals[9], textNode(`Vous connaissaez sans doute tous la Belladone, cette plante tristement célèbre car déjà les romains s'en servaient pour empoisonner leurs ennemis. Certains ont également spéculé que ce serait une concoction préparée à partir de cette herbacée que Juliette avale à la fin de la tragédie de Shakespeare. Mais savez-vous d'où vient le nom de cette solanacée ? Le nom latinisé que Carl von Linné lui a attribué est `), italic('Atropa belladonna.'), textNode(` Le premier de ces termes est une référence à Atropos, l'une de ces trois déesses de la destinée appelées Moires dans la mythologie grecque. Lorsqu'il est temps pour une personne de mourir, Atropos coupe le fil de la vie qui avait été tissé et mesuré par ses sœurs. Ainsi, si von Linné a choisi de donner à ce genre le nom d'`), italic('Atropa'), textNode(", c'est en référence à la mort et donc aux propriétés toxiques qui caractérisent cette famille de plantes.")
)

lineBreaks(modals[9], 1)

var img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alexander_Rothaug_-_The_Three_Fates%2C_circa_1910.jpg/1200px-Alexander_Rothaug_-_The_Three_Fates%2C_circa_1910.jpg")
modals[9].appendChild(img)
var span = document.createElement('span')
span.className = "threeFates"
span.appendChild(italic("Représentation des trois Moires par le peintre autrichien Alexander Rothaug. Je vous laisse deviner laquelle est Atropos..."))
modals[9].appendChild(span)

lineBreaks(modals[9], 3)

var img = loadImage("img/3Fates.jpg")
modals[9].appendChild(img)
var span = document.createElement('span')
span.className = "threeFates"
span.appendChild(italic("Représentation des trois Moires par Disney "))
var span2 = document.createElement('span')
span2.className = "grinningFace"
span2.appendChild(textNode("😃"))
span.appendChild(span2)
modals[9].appendChild(span)

lineBreaks(modals[9], 2)

addPara(modals[9], textNode(`Le mot `), italic('Atropa'), textNode(" fait donc tout à fait sens. Mais qu'en est-il du terme "), italic("belladonna"), textNode(" ? Car après tout c'est de là que vient le nom vernaculaire de cette plante. Il s'agit cette fois d'une référence à l'italien, "), italic('bella donna'), textNode(" signifiant « belle femme ». Mais pourquoi donc avoir donné un nom pareil à une plante vénéneuse ? Pour le comprendre, il nous faut remonter à la renaissance pour découvrir une drôle de pratique vénitienne. A l'époque, la belladone y était utilisée pour fabriquer des gouttes pour les yeux que les femmes s'appliquaient pour dilater leurs pupilles, cette caractéristique étant alors apparemment considérée comme très attractive. Personnellement, je pense que j'aurais trouvé ça plus flippant qu'autre chose...")
)

addPara(modals[9], textNode('Cette anecdote sort certes de nul part, mais je trouve ça intriguant de voir les curieuses histoires qui se cachent parfois derrière le nom des choses.'))

lineBreaks(modals[9], 2)

var img = loadImage("https://ars.els-cdn.com/content/image/3-s2.0-B9780128153208000168-f16-14-9780128153208.jpg")
modals[9].appendChild(img)

addPara(modals[10], textNode(`Usual Suspects (1995)`))

addPara(modals[11], textNode(``))

addPara(modals[11], textNode(``))

addPara(modals[12], textNode(`Ça y on arrive déjà à la moitié ! Pour aujourd'hui je vous ai préparé un petit quizz sur le thème du cinéma.`))