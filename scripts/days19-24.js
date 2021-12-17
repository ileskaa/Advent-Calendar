addPara(modals[19], textNode("Scadarts, ça vous parle ?"))

addPara(modals[19], textNode("Il s'agit d'un artiste autrichien qui réalise des montages combinant tableaux classiques avec icônes de la culture populaire. Voici un exemple :"))

var img = loadImage("https://mymodernmet.com/wp/wp-content/uploads/2021/02/scadarts-mashup-art-11.jpg")
modals[19].appendChild(img)
createElt("i", "Yoda", undefined, modals[19])

lineBreaks(modals[19], 2)

addPara(modals[19], textNode("Et un autre dans un registre complétement différent :"))

var img = loadImage("img/scadarts.jpg")
modals[19].appendChild(img)
createElt("i", "The Bean with a Pearl Earring", undefined, modals[19])

lineBreaks(modals[19], 1)

addPara(modals[19], textNode("Les plus impressionant est que l'artiste réalise ces montages depuis son iPhone. Si vous voulez voir plus de créations de ce genre, il a une page Instagram qui offre un sacré spectacle. Par contre, ne cherchez pas à toutes les parcourir, scadarts a plus 2100 publications à son nom."))


addPara(modals[20], textNode("Le morceau d'aujourd'hui a été créé par un groupe ayant une histoire assez particulière. Celui-ci était à l'origine une plaisanterie inventée par Steven Wilson, qui est sûrement familier à certains d'entre vous, ainsi que par son ami Malcolm Stocks. L'idée était de créer une entité fictive à l'image des groupes de rock légendaires ayant dominé la scène musicale durant leur jeunesse. Ce groupe imaginaire fut nommé Porcupine Tree. Wilson et Stocks inventèrent alors des biographies mouvementées aux membres du groupe fictif, incluant notamment plusieurs aller-retours en prison. Wilson fit également de nombreux enregistrements musicaux pour rendre la chose plus crédible."))

addPara(modals[20], textNode("Bref, le groupe naquit d'un simple troll."))

addPara(modals[20], textNode("Mais après quelques années, Wilson commença à se dire que certains morceaux créés pour Porcupine Tree mériteraient peut-être d'être diffusés. Il les publia alors sous la forme d'une cassette intitulée, de manière non moins humoristique, "), italic("Tarquin's Seaweed Farm"), textNode(". Il en envoya une copie à Richard Allen, qui travaillait alors simultanément pour les magazines "), italic(" Encyclopaedia Psychedelica"), textNode(" et "), italic("Freakbeat"), textNode(". Allen donna une critique positive à la plupart des morceaux figurant sur l'enregistrement, et la carrière de Porcupine Tree était lancée."))

addPara(modals[20], textNode("Maintenant, pour en revenir au morceau en lui-même, son titre est simplement une réécriture de « she's moved on » et parle de l'expérience du rejet."))

var img = loadImage("https://townsquare.media/site/366/files/2021/11/attachment-Porcupine-Tree-2021.jpg")
modals[20].appendChild(img)

lineBreaks(modals[20], 1)

musicLink(modals[20], "https://www.youtube.com/watch?v=_GMNYY8250U", 300)

createElt("p", "« That is the question. »", undefined, modals[21])

lineBreaks(modals[21], 2)

var img = loadImage("img/shakespeare.png")
modals[21].appendChild(img)

addPara(modals[22], textNode("Cap sur le Japon avec un tableau dont j'aime beaucoup le style graphique."))
lineBreaks(modals[22], 1)

var img = loadImage("https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1510914677438-JSF2K9J4U53VIMC59OGP/Katsuda-Testsu-Evening-Bijinga.jpg?format=1500w")
modals[22].appendChild(img)

createElt("i", "Tetsu Katsuda, Evening, 1934", undefined, modals[22])
lineBreaks(modals[22], 1)

addPara(modals[22], textNode("Ce style d'art est connu sous le nom de "), italic("nihonga"), textNode(" qui peut être simplement traduit par « peinture japonaise ». Durant la majorité de l'époque d'Edo, le Japon avait été hermétique aux influences artistiques étrangères. Cet isolationnisme prit toutefois fin en 1853 lorsque le commodore Matthew Perry débarqua dans la baie d'Edo (aujourd'hui baie de Tokyo) avec quatre navires lourdement armés. S'en suivit une période nommée "), italic("bakumatsu"), textNode(" durant laquelle le Japon s'ouvrit au monde pour la première fois en plus de 200 ans. Dans le pays naquit alors un engouement pour l'art occidental, aussi bien chez les créateurs que les consommateurs. Toutefois, toute révolution ayant sa contre-révolution."))

addPara(modals[22], textNode(""))

lineBreaks(modals[22], 1)
addPara(modals[22], textNode("Et parce que c'est quand-même mieux en plein écran :"))
imageLink(modals[22], "https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1510914677438-JSF2K9J4U53VIMC59OGP/Katsuda-Testsu-Evening-Bijinga.jpg?format=1500w")

addPara(modals[23], textNode("Tokyo Godfathers"))


addPara(modals[24], textNode("Ça y est, on touche déjà la fin ! Un grand merci à toi si tu as tout lu du début à la fin. Je ne sais pas si tu as été diverti, mais je me suis en tout cas bien amusé en créant ce calendrier. Pour ce dernier jour, plusieurs petites choses."))

addPara(modals[24], textNode("Pour commencer, un morceau. Ça change de Mariah Carey en tout cas 🙃"))

addPara(modals[24], textNode("Mème de noël n°1 :"))

addPara(modals[24], textNode("Mème de noël n°2 :"))

addPara(modals[24], textNode("Et pour finir, une anecdote. Il y a en Suède, dans la ville de Gävle, une drôle de tradition. C'est celle du "), italic('Gävlebock'), textNode(" (littéralement «bouc de Gävle»).")
)

addPara(modals[24], textNode("Voici un extrait tiré du site internet de la ville de Gävle :"))

var blockquote = document.createElement('blockquote')

var addQuote = function(element) {
  createElt("i", "In year 1970, the first goat that was put up got destroyed within six hours. Two very drunk adolescents were connected to the crime. With the help of different contributors, the goat was put up again – this time made out of reed.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "By 1971, the tradesmen of Gävle were fed up with burned goats and quit the goat making business. The Natural Science Society of Vasaskolan took over. Their smaller goat was smashed into pieces.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1972, the goat imploded due to sabotage.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1973, the goat faced an uncertain destiny.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1974, the goat was burned to the ground.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "1975, yet another unknown fate.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1976, the goat was hit and destroyed by a greaser car.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "1977 – Once more, an unknown fate.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1978, the goat was once again smashed into pieces.", undefined, element)
  lineBreaks(element, 2)
  createElt("i", "In 1979, someone burned the goat even before he was put up. Another goat was built and drenched in flame retardants, but also that one was sabotaged and destroyed.", undefined, element)
  lineBreaks(element, 1)
}
addQuote(blockquote)
modals[24].appendChild(blockquote)

addPara(modals[24], textNode("Et ça c'était rien que pour les années 70..."))

addPara(modals[24], textNode("Une tentative assez improbable a eu lieu en 2010. Deux hommes avaient alors pour projet d'enlever le bouc à l'aide d'un hélicoptère"))

addPara(modals[24], textNode("Il y a même une page Twitter permettant de suivre si le bouc parvient à survivre ou non"))

addPara(modals[24], textNode("Voici à quoi ressemble le bouc de cette année :"))
var img = loadImage("https://pbs.twimg.com/media/FGfwQh8XwAAAnpc?format=jpg&name=large")
modals[24].appendChild(img)

addPara(modals[24], textNode("D'ailleurs, sachez qu'il est possible de parier pour ou contre la survie de ce bouc. C'est une pratique qui existe au Royaume-Uni depuis 1988."))

addPara(modals[24], textNode("Voilà, vous savez tout sur cette curieuse tradition. Eh oui, ils sont fous ces suédois..."))

addPara(modals[24], textNode("Sur ce, joyeux Noël !"))
lineBreaks(modals[24], 1)
var img = loadImage("img/christmasTotoro.png")
img.height = 300
modals[24].appendChild(img)