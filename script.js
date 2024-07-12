document.getElementById('start-game').addEventListener('click', startGame);

const hints = [
    { hint: "img/lion.jpg", question: "What is the largest species of cat in the world?", answer: "Tiger", difficulty: "easy" },
    { hint: "img/rainforest.jpg", question: "Which rainforest is the largest in the world?", answer: "Amazon", difficulty: "hard" },
    { hint: "img/eiffel_tower.jpg", question: "In which city is the Eiffel Tower located?", answer: "Paris", difficulty: "easy" },
    { hint: "img/scroll.jpg", question: "Who was the first emperor of China?", answer: "Qin Shi Huang", difficulty: "hard" },
    // Add more hints and questions here
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startGame() {
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadHints();
}

function loadHints() {
    const hint1 = document.getElementById('hint1');
    const hint2 = document.getElementById('hint2');

    const hintPair = hints.slice(currentQuestionIndex, currentQuestionIndex + 2);

    hint1.style.backgroundImage = `url(${hintPair[0].hint})`;
    hint2.style.backgroundImage = `url(${hintPair[1].hint})`;

    hint1.onclick = () => showQuestion(hintPair[0]);
    hint2.onclick = () => showQuestion(hintPair[1]);
}

function showQuestion(hint) {
    document.getElementById('question-area').style.display = 'block';
    document.getElementById('question').textContent = hint.question;

    document.getElementById('submit-answer').onclick = () => checkAnswer(hint);
}

function checkAnswer(hint) {
    const answer = document.getElementById('answer').value.trim().toLowerCase();

    if (answer === hint.answer.toLowerCase()) {
        correctAnswers++;
        currentQuestionIndex += 2;
        if (correctAnswers === 10) {
            alert('Congratulations! You won the game!');
            resetGame();
        } else if (currentQuestionIndex < hints.length) {
            loadHints();
        } else {
            alert('You have answered all available questions correctly!');
            resetGame();
        }
    } else {
        alert('Wrong answer. Try again!');
    }

    document.getElementById('answer').value = '';
    document.getElementById('question-area').style.display = 'none';
    updateProgress();
}

function updateProgress() {
    document.getElementById('progress').textContent = `Correct answers: ${correctAnswers}`;
}

function resetGame() {
    correctAnswers = 0;
    currentQuestionIndex = 0;
    document.getElementById('start-game').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
    updateProgress();
}
