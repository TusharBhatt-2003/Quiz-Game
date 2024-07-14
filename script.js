// Sample quiz questions data
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "India", "South Korea"],
        answer: "Japan"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Go", "Au", "Gl", "Gd"],
        answer: "Au"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Mercury", "Venus", "Uranus"],
        answer: "Mars"
    },
    {
        question: "Who discovered gravity when an apple fell on his head?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "Which is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    }
    // Add more questions here
];

let score = 0; // Initialize score

// Get DOM elements
const startBtn = document.getElementById("start-btn");
const mainSection = document.getElementById("main-section");
const quizSection = document.getElementById("quiz");

// Start quiz function
function startQuiz() {
    // Hide the main section (home page content)
    mainSection.style.display = "none";
    
    // Show the quiz section
    quizSection.style.display = "block";
    
    // Load the first question
    loadQuestion(0); // Load first question
}

// Event listener for start button click
startBtn.addEventListener("click", startQuiz);

// Function to load a question
function loadQuestion(questionIndex) {
    const quizContent = document.getElementById("quiz");
    const currentQuestion = quizQuestions[questionIndex];
    
    // Construct HTML for the current question
    quizContent.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map(option => `<li><button onclick="checkAnswer('${option}', ${questionIndex})">${option}</button></li>`).join('')}
        </ul>
        <p>Score: ${score}</p>
    `;
}

// Function to check the answer
function checkAnswer(answer, questionIndex) {
    const currentQuestion = quizQuestions[questionIndex];
    
    if (answer === currentQuestion.answer) {
        // Correct answer scenario
        score += 2; // Add 2 points for correct answer
        console.log("Correct!");
    } else {
        // Incorrect answer scenario
        score -= 1; // Deduct 1 point for wrong answer
        console.log("Incorrect!");
    }
    
    // Load next question or show result after a delay (example)
    setTimeout(() => {
        if (questionIndex + 1 < quizQuestions.length) {
            loadQuestion(questionIndex + 1);
        } else {
            showResult();
        }
    },); // Delay for 1 second for better user experience
}

// Function to show quiz result
function showResult() {
    const quizContent = document.getElementById("quiz");
    quizContent.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your final score: ${score}</p>
        <button id="restartbutton" onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// Function to restart quiz
function restartQuiz() {
    location.reload(); // Reload the page to restart the quiz
}

