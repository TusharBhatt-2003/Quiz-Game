document.getElementById('start-game').addEventListener('click', startGame);

const hints = [
    { hint: "img/nature.jpg", question: "What is the largest species of cat in the world?", answer: "Tiger" },
    { hint: "img/eiffel_tower.jpg", question: "In which city is the Eiffel Tower located?", answer: "Paris" },
    // Add more hints and questions here
];

let currentQuestion = 0;
let correctAnswers = 0;

function startGame() {
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadHints();
}

function loadHints() {
    const hint1 = document.getElementById('hint1');
    const hint2 = document.getElementById('hint2');

    hint1.style.backgroundImage = `url(${hints[currentQuestion].hint})`;
    hint2.style.backgroundImage = `url(${hints[currentQuestion + 1].hint})`;

    hint1.addEventListener('click', () => showQuestion(hints[currentQuestion]));
    hint2.addEventListener('click', () => showQuestion(hints[currentQuestion + 1]));
}

function showQuestion(hint) {
    document.getElementById('question-area').style.display = 'block';
    document.getElementById('question').textContent = hint.question;

    document.getElementById('submit-answer').addEventListener('click', () => checkAnswer(hint));
}

function checkAnswer(hint) {
    const answer = document.getElementById('answer').value.trim().toLowerCase();

    if (answer === hint.answer.toLowerCase()) {
        correctAnswers++;
        currentQuestion += 2;
        if (correctAnswers === 10) {
            alert('Congratulations! You won the game!');
        } else {
            loadHints();
        }
    } else {
        alert('Wrong answer. Try again!');
        document.getElementById('question-area').style.display = 'none';
    }

    document.getElementById('answer').value = '';
    document.getElementById('question-area').style.display = 'none';
    updateProgress();
}

function updateProgress() {
    document.getElementById('progress').textContent = `Correct answers: ${correctAnswers}`;
}
