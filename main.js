
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