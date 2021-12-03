// we create the basic modal for days 7 to 24
for (let i=3; i<25; i++) { 
  let modal = document.createElement("div")
  modal.classList.add("modal")
  modal.id = "modal" + i

  let header = document.createElement("div")
  header.classList.add("modal-header")

  let button = document.createElement("button")
  button.setAttribute("data-close-button", "")
  button.classList.add("close-button")
  let close = document.createTextNode("\u00d7")
  button.appendChild(close)
  header.appendChild(button)

  let modalBody = document.createElement("div")
  modalBody.classList.add("modal-body")

  modal.appendChild(header)
  modal.appendChild(modalBody)
  body.appendChild(modal) /* we refer to the body by its ID */
}

function addPara(modal, ...nodes) {
  var para = document.createElement("p")
  for (node of nodes) para.appendChild(node);
  modal.appendChild(para);
}

function textNode(text) {return document.createTextNode(text)}

function italic(string) {
  let i = document.createElement("i")
  let node = document.createTextNode(string)
  i.appendChild(node)
  return i
}

function loadImage(url) {
  let img = new Image(); // width, height values are optional params 
  img.src = url;
  img.loading = "lazy";
  img.SameSite = "Lax";
  return img
}

const modal3 = document.querySelector('#modal3 .modal-body'), modal4 = document.querySelector('#modal4 .modal-body'),
  modal5 = document.querySelector('#modal5 .modal-body'), modal6 = document.querySelector('#modal6 .modal-body')

//MODAL 3
var node = textNode("Et c'est parti pour le jour 3 !")
addPara(modal3, node)

var node = textNode(`Aujourd'hui on part sur une suggestion cinématographique. Il s'agit d'un film coréen (non, pas la Corée de `)
var italicNode = italic("rocket man")
var node2 = textNode( ") réalisé par Park Chan Wook. J'ai nommé : " )
addPara(modal3, node, italicNode, node2, italic("Oldboy"), 
  textNode(` (2003) ! Celui-ci est basé sur un manga du même nom et raconte l'histoire d'un homme qui
  se fait un jour capturer et enfermer sans en connaître la raison. Il passera ainsi 15 ans dans une petite chambre transformée en cellule,
  sans jamais connaître l'identité de ses persécuteurs. Lorsqu'il regagne enfin sa liberté, il n'a qu'une idée en tête : trouver le responsable
  afin de découvrir la raison de son supplice et se venger.`)
)

addPara(modal3, textNode(`Il s'agit d'un film sombre, tordu et tout bonnement excellent. Sans hésitation l'un de mes films favoris. Il a remporté
  le grand prix du festival de Cannes en 2004, ce qui est une honte car il méritait incontestablement la Palme d'or.`)
)

function lineBreaks(modal, number) {
  let br = document.createElement('br')
  modal.appendChild(br)
  for (i=1; i < number; i++) {
    modal.appendChild(br.cloneNode())
  }
}
lineBreaks(modal3, 2) //adds 2 line breaks

var img = loadImage('https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg')
modal3.appendChild(img)

//MODAL 4
addPara(modal4, textNode("Au menu du jour : un livre."))

addPara(modal4, textNode("Il s'agit d'un grand classique écrit par John Steinbeck et paru en 1939, à savoir "), italic("Les Raisins la colère"),
  textNode(`. L'histoire prend place durant la Grande Dépression et conte les difficultés d'une famille de métayers (c'est à dire des agriculteurs
  ne possédant pas de terre mais la cultivant en échange d'une partie de la récolte) originaire de l'Oklahoma, de cette région que
  l'on appelle `), italic("Dust Bowl "), textNode(`en raison de tempêtes de poussière qui y étaient fréquentes au début des années 30. Cette famille, n'étant plus en mesure d'y
  gagner son pain pour des raisons à la fois économiques et écologiques, abandonne son foyer et se lance dans un périple vers la
  Californie dans l'espoir d'y trouver une vie meilleure.`)
)

addPara(modal4, textNode(`C'est là un bouquin captivant qui donne un aperçu de l'éxode qu'ont vécu à cette époque des centaines de milliers
  d'américains, qualifiés alors d'`), italic("Okies"), textNode(`, bien que cette vague de migration n'était en réalité pas seulement
  originaire de l'Oklahma, mais également des Etats voisins du Missouri, de l'Arkansas et du Texas.`)
)

addPara(modal4, textNode(`Je regrète seulement de ne pas l'avoir lu plus tôt. J'aurais peut-être eu des choses à dire lors des dissertations de culture gé...`))

lineBreaks(modal4, 2)

var img = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg')
modal4.appendChild(img);

//MODAL 5
addPara(modal5, italic("Lorem ipsum dolor sit, amet consectetur adipisicing elit. In consequuntur sint debitis, veniam autem totam fugit quibusdam recusandae quod quo, ut officiis tempore? Eum laborum dolor tenetur soluta reprehenderit ad repudiandae molestiae, sequi illum expedita cumque illo similique? Saepe ea doloremque explicabo excepturi tempore? Rerum delectus eveniet aperiam nulla iusto at omnis, magnam quos corrupti, cumque soluta voluptas facilis laboriosam aliquam recusandae molestiae necessitatibus cum, optio deserunt ex praesentium voluptatem tempore maiores? Ab asperiores ut illo excepturi voluptatem facilis nisi."))

lineBreaks(modal5, 25)

addPara(modal5, textNode("J'espère que vous n'avez pas lu ce qui est écrit ci-dessus car cela ne veut strictement rien dire."))

addPara(modal5, textNode(`Cela étant dit, c'est parti pour le jour 5 !`))

addPara(modal5, textNode(`Aujourd'hui je vais vous parler d'un podcast que j'apprécie énormément. Celui-ci est
  réalisé par Andrew Huberman, prof de neurobiologie et d'ophtalmologie à l'université de Stanford, et il s'intitule
  tout simplement `), italic('Huberman Lab Podcast.'), textNode(` C'est un moyen pour Huberman de partager un tas
  d'informations liées à la biologie et la santé humaine. Les sujets sont variés et traitent entre autres du sommeil,
  de la vision, des hormones et de la performance sportive. Et en bonus vous pourrez peut-être entendre son chien
  Costello ronfler en arrière plan.`)
)

addPara(modal5, textNode(`Il n'est guère nécessaire d'avoir des connaissance préalables en
  neurobiologie, tout le but de ce podcast étant de rendre ce type d'information accessible au grand public. Et ce professeur
  sait certainement se montrer pédagogue (ça change de certains, me direz-vous).`))

addPara(modal5, textNode(`Je vous ai mis ci-dessous le lien YouTube vers le premier épisode, mais c'est
  également accessible via Apple Podcasts et Spotify.`))

var a = document.createElement('a')
a.href = "https://www.youtube.com/watch?v=H-XfCl-HpRM", a.target = "_blank"
var img = loadImage('img/YT-icon.png')
img.width = '70'
img.id = 'huberman'
a.appendChild(img)
modal5.appendChild(a)

lineBreaks(modal5, 2)

var img = loadImage('https://podcast-notes-uploads.imgix.net/2021/01/Huberman-Lab-Podcast-Thumbnail-2000x2000-1.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.0&w=1024&wpsize=large')
img.width = '400'
modal5.appendChild(img)

//MODAL 6
addPara(modal6, textNode("L'image du jour :"))

lineBreaks(modal6, 2)

modal6.appendChild(loadImage("https://api.time.com/wp-content/uploads/2020/12/daniel-pullen-top-100-photos-2020.jpg?w=1000&quality=85"))

lineBreaks(modal6, 2)

addPara(modal6, textNode(`Cette photo assez incroyable avec son côté surréaliste a été prise en septembre 2020 en Caroline du Nord lorsque
  l’ouragan Teddy tourbillonnait à proximité des côtes, causant des vagues bien plus hautes que de coutume et
  inondant ainsi les maisons situées à basse altitude.`))

addPara(modal6, textNode("Pour afficher l'image en plein écran :"))

var a = document.createElement('a')
a.href = "https://api.time.com/wp-content/uploads/2020/12/daniel-pullen-top-100-photos-2020.jpg?w=1000&quality=85", a.target = "_blank"
var img = loadImage('img/image-icon.svg')
img.width = '70'
img.id = 'imgIcon'
a.appendChild(img)
modal6.appendChild(a)