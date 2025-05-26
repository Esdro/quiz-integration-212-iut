
// Mes constantes et variables
const startButton = document.getElementById('start-btn'); // On localise le bouton Commencer
const nextButton = document.getElementById('next-btn'); // On localise le bouton Commencer
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let currentQuestionIndex = 0;





// Mes détecteurs d'événement
startButton.addEventListener('click', startGame); // On surveille le clique

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

// Mes fonctions

function showQuestion(question) {
    questionElement.innerText = question.enonce // Je change le texte d'exemple de mon élément 

    question.reponses.forEach(reponse => {
        let button = document.createElement('button');
        button.innerText = reponse.texte;
        button.classList.add('btn');
        if (reponse.correcte) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button); // Ne pas oublier de déclarer la constante
    });
}

function setStatusClass(element, isCorrect) {
    element.classList.remove('correct', 'wrong');
    if (isCorrect) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function resetState() {
    // Supprimer tous les boutons de réponse
    answerButtonsElement.innerHTML = '';
}

// Mon Tableau de questions

const questions = [
    // Première question
    {
        enonce: 'Quel est le langage de programmation principalement utilisé pour le développement web côté client ?',
        reponses: [
            { texte: 'Python', correcte: false },
            { texte: 'C++', correcte: false },
            { texte: 'Java', correcte: false },
            { texte: 'JavaScript', correcte: true }
        ]
    },
    {
        enonce: 'Quel cour fait principalement M. Patrice Gommery  à l\'IUT de Troyes ?',
        reponses: [
            { texte: 'Dév Symfony', correcte: false },
            { texte: 'Développement Shopify ', correcte: false },
            { texte: 'Hébergement ', correcte: true },
            { texte: 'Docker ', correcte: false }
        ]
    },
    {
        enonce: "L'IUT de Troyes occupe quel rang dans le dernier classement l'Etudiant sur les meilleurs IUTs en France ?",
        reponses: [
            { texte: 'Frist place ', correcte: false },
            { texte: '3e en France ', correcte: false },
            { texte: '22e en France ', correcte: true },
            { texte: '16e en France ', correcte: false }
        ]
    },
      {
        "enonce": "Quel est le taux de réussite moyen des étudiants en IUT en France ?",
        "reponses": [
            { "texte": "75.5%", "correcte": false },
            { "texte": "80.2%", "correcte": false },
            { "texte": "69.1%", "correcte": true },
            { "texte": "85.3%", "correcte": false }
        ]
      },
      {
        "enonce": "Quelle université a l'IUT avec le meilleur taux de réussite en France ?",
        "reponses": [
            { "texte": "Université d'Angers", "correcte": false },
            { "texte": "Université Bordeaux-Montaigne", "correcte": true },
            { "texte": "Université Lumière Lyon 2", "correcte": false },
            { "texte": "Université de Paris", "correcte": false }
        ]
      },
      {
        "enonce": "Quelle spécialité en IUT a le meilleur taux de réussite national ?",
        "reponses": [
            { "texte": "Packaging, emballage et conditionnement", "correcte": false },
            { "texte": "Métiers du multimédia et de l'Internet", "correcte": false },
            { "texte": "Génie chimique - génie des procédés", "correcte": false },
            { "texte": "Information communication", "correcte": true }
        ]
      },
      {
        "enonce": "Quel est l'indicateur utilisé pour mesurer la capacité d'un IUT à faire progresser ses étudiants ?",
        "reponses": [
            { "texte": "Taux de réussite", "correcte": false },
            { "texte": "Valeur ajoutée", "correcte": true },
            { "texte": "Effectif des étudiants", "correcte": false },
            { "texte": "Taux d'insertion professionnelle", "correcte": false }
        ]
      },
      {
        "enonce": "Quelle est la spécialité en IUT avec le taux de réussite le plus faible ?",
        "reponses": [
            { "texte": "Information communication", "correcte": false },
            { "texte": "Génie chimique - génie des procédés", "correcte": true },
            { "texte": "Packaging, emballage et conditionnement", "correcte": false },
            { "texte": "Métiers du multimédia et de l'Internet", "correcte": false }
        ]
      },
      {
        "enonce": "Quel est le pourcentage d'étudiants ayant besoin d'une année supplémentaire pour obtenir leur diplôme en IUT ?",
        "reponses": [
            { "texte": "9.3%", "correcte": true },
            { "texte": "12.5%", "correcte": false },
            { "texte": "15.7%", "correcte": false },
            { "texte": "18.9%", "correcte": false }
        ]
      },
      {
        "enonce": "Quel IUT a la plus forte valeur ajoutée selon le classement 2022 ?",
        "reponses": [
            { "texte": "Université d'Angers", "correcte": false },
            { "texte": "Université Bordeaux-Montaigne", "correcte": false },
            { "texte": "Le Mans Université", "correcte": false },
            { "texte": "Université Lumière Lyon 2", "correcte": true }
        ]
      },
      {
        "enonce": "Quel est le taux de réussite en deux ans de l'IUT de l'Université d'Angers ?",
        "reponses": [
            { "texte": "83.8%", "correcte": true },
            { "texte": "78.5%", "correcte": false },
            { "texte": "80.2%", "correcte": false },
            { "texte": "77.5%", "correcte": false }
        ]
      },
      {
        "enonce": "Quel est le taux de réussite en deux ans de l'IUT de l'Université de Paris ?",
        "reponses": [
            { "texte": "83.8%", "correcte": false },
            { "texte": "80.2%", "correcte": false },
            { "texte": "78.5%", "correcte": true },
            { "texte": "77.5%", "correcte": false }
        ]
      }
    ]



// Mes fonctions
function startGame() {
    //  resetState();
    //  showQuestion(questions[0]);
    currentQuestionIndex = 0;
    setNextQuestion();
    startButton.classList.add('hide')
    // Retirer la classe hide à l'élément HTML question-container
    questionContainer.classList.remove('hide')
}

function setNextQuestion() {
    // console.log(currentQuestionIndex)
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function selectAnswer(e) { // e défini l'événement du clique
    const selectedButton = e.target;
    // console.info(selectedButton); // On regarde si c'est bien le bouton cliqué
    const isCorrect = selectedButton.dataset.correct; // Sera soit true soit undefined en fonction de la réponse
   // console.info('la réponse est-elle correcte ? ' + isCorrect);

    // Appliquer le statut (donc la couleur) de réponse au body (correcte ou incorrecte)
    setStatusClass(document.body, isCorrect);

    // Appliquer le statut aux boutons
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Recommencer';
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
    }
}