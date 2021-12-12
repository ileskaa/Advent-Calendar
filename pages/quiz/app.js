const body = document.getElementsByTagName('body')[0]
const start = document.getElementById('start')
const block = document.getElementById('question-answers')
const next = document.getElementById('next')
const question = document.getElementById('question')
const answers = document.getElementsByClassName('answer')
const scoreDiv = document.getElementById('score')
let score = 0
let questionCount = 1

start.addEventListener('click', () => {
  start.classList.add('hidden')
  block.classList.remove('hidden')
  question.innerHTML = questions[0].question
  addAnswers(0)
  /* removeListeners() */
})


function addAnswers(index) {
  for (let i=0; i < answers.length; i++) {
    answers[i].innerHTML = questions[index].answers[i].answer
    if (questions[index].answers[i].correct === true) { //we add a class to the correct answer
      correct = answers[i] //this is declared globally, even though it is not recommended. Must change later
      correct.dataset.correct = true
    }
    answers[i].classList.add('focusable')
    answers[i].addEventListener('click', answerListener)
  }
}

function answerListener(evt) {
  if (evt.target.dataset.correct === "true") {
    evt.target.classList.add('correct')
    body.classList.add('bgCorrect')
    score++
    scoreDiv.innerText = `Score: ${score}`
  } else {
    evt.target.classList.add('wrong')
    //we need to target the data attribute
    correct.classList.add('correct')
    body.classList.add('bgWrong')
  }
  next.classList.remove('hidden')
  removeListeners() //this allows the listener to remove itself
}

function removeListeners() {
  for (let answer of answers) {
    answer.removeEventListener('click', answerListener)
    answer.classList.remove('focusable')
  }
}

next.addEventListener('click', nextQuestion)

function nextQuestion() {
  if (questionCount < questions.length) {
    question.innerHTML = questions[questionCount].question
    next.classList.add('hidden')
    document.getElementsByClassName('correct')[0].classList.remove('correct')
    let wrong = document.getElementsByClassName('wrong')[0]
    if (wrong) {
      document.getElementsByClassName('wrong')[0].classList.remove('wrong')
    }
    delete correct.dataset.correct //we remove the data attribute
    body.classList.remove('bgCorrect')
    body.classList.remove('bgWrong')
    addAnswers(questionCount)
    questionCount++
  } else {
    body.innerHTML = `
    <div id="finished">
      <p>Fin du quiz</p>
      <p>Score : ${score}/10</p>
    </div>`
    body.classList.remove('bgCorrect')
    body.classList.remove('bgWrong')
  }
}

const questions = [
  {
    question: "En quelle année est paru l’excellent <i>Le voyage de Chihiro</i> ?",
    answers: [
      {answer: 1993, correct: false},
      {answer: 1997, correct: true},
      {answer: 2001, correct: false},
      {answer: 42, correct: false}
    ]
  },
  {
    question: `<i>Titanic</i> et <i>Le Seigneur des anneaux : Le Retour du roi</i> ont tous deux remportés 11 Oscars, mais il y a un
    troisième film qui en a reçu tout autant. Saurez-vous dire lequel ?`,
    answers: [
      {answer: "Ben Hur (1959)", correct: true},
      {answer: "West Side Story (1961)", correct: false},
      {answer: "Le Dernier Empereur (1987)", correct: false},
      {answer: "Inspecteur Gadget (1999)", correct: false}
    ]
  },
  {
    question: `Qui a réalisé le film d’animation <i>Kirikou et la Sorcière</i> ?`,
    answers: [
      {answer: "Sylvain Chomet", correct: false},
      {answer: "Jacques-Rémy Girerd", correct: false},
      {answer: "Michel Ocelot", correct: true},
      {answer: "Yves Déloye", correct: false}
    ]
  },
  {
    question: `Qui joue le rôle du patriarche Don Vito Corleone dans <i>Le Parrain</i> ?`,
    answers: [
      {answer: "Al Pacino", correct: false},
      {answer: "Robert de Niro", correct: false},
      {answer: "Marlon Brando", correct: true},
      {answer: "Toutankha&shy;mon", correct: false}
    ]
  },
  {
    question: `Qui a composé la bande son du film <i>WALL·E</i> ?`, //5
    answers: [
      {answer: "John Williams", correct: false},
      {answer: "Hans Zimmer", correct: false},
      {answer: "Thomas Newman", correct: true},
      {answer: "Kaaris, avec la participation inédite de Booba", correct: false}
    ]
  },
  {
    question: `Parmi ces films, lequel N’A PAS remporté la palme d’or au festival de Cannes ?`, //6
    answers: [
      {answer: "Taxi Driver (1976)", correct: false},
      {answer: "Apocalypse Now (1979)", correct: false},
      {answer: "Pulp Fiction (1994)", correct: false},
      {answer: "La Vie des autres (2006)", correct: true}
    ]
  },
  {
    question: `Dans Harry Potter, quel est le nom de naissance de Voldemort ?`,
    answers: [
      {answer: "Ralph Fiennes", correct: false},
      {answer: "Tom Riddle", correct: true},
      {answer: "Oliver Morval", correct: false},
      {answer: "Nicolas Sarkozy", correct: false}
    ]
  },
  {
    question: `Dans le version française du <i>Roi Lion</i>, qui fait la voix de Mufasa ?`,
    answers: [
      {answer: "Jean Reno", correct: true},
      {answer: "Gérard Depardieu", correct: false},
      {answer: "Alain Delon", correct: false},
      {answer: "Nabuchodo&shy;nosor II", correct: false} //here we use a shy (or soft) hyphen
    ]
  },
  {
    question: `Qui joue le rôle du protagoniste dans <i>Retour vers le futur</i> ?`, //9
    answers: [
      {answer: "Elijah Wood", correct: false},
      {answer: "Rupert Grint", correct: false},
      {answer: "Michael J. Fox", correct: true},
      {answer: "Dobby l'elfe de maison", correct: false}
    ]
  },
  {
    question: `Quel est le film préféré de Simon ?`,
    answers: [
      {answer: "Star Wars 7 : Le Réveil de la Force", correct: true},
      {answer: "Star Wars 8 : Les Derniers Jedi", correct: true},
      {answer: "Star Wars 9 : L'Ascension de Skywalker", correct: true},
      {answer: "La réponse D", correct: false}
    ]
  }
]