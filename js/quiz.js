// js/quiz.js

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { question: "What does `var` declare in JavaScript?", options: ["Variable", "Function", "Class"], answer: "Variable" },
  { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "#"], answer: "//" },
  { question: "What does `===` check in JavaScript?", options: ["Equality and type", "Equality", "Assignment"], answer: "Equality and type" },
  { question: "Which method is used to add an element to an array?", options: [".push()", ".pop()", ".shift()"], answer: ".push()" },
  { question: "How do you declare a constant variable?", options: ["const", "var", "let"], answer: "const" },
];

function showQuiz() {
  const quizSection = document.getElementById("quizSection");
  quizSection.style.display = "block";
  document.getElementById("output").style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  showNextQuizQuestion();
}

function showNextQuizQuestion() {
  const quizQuestion = document.getElementById("quizQuestion");
  const quizAnswer = document.getElementById("quizAnswer");
  const quizFeedback = document.getElementById("quizFeedback");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    quizQuestion.innerHTML = `
      <strong>Question ${currentQuestionIndex + 1}:</strong> ${currentQuestion.question}
      <br>
      ${currentQuestion.options.map(
        (option, index) =>
          `<label>
            <input type="radio" name="answer" value="${option}" id="option${index}">
            ${option}
          </label><br>`
      ).join("")}
    `;
    quizFeedback.textContent = "";
    quizAnswer.style.display = "none"; // Hide input box
  } else {
    showQuizResult();
  }
}

function submitQuizAnswer() {
  const selectedOption = document.querySelector("input[name='answer']:checked");
  const quizFeedback = document.getElementById("quizFeedback");

  if (!selectedOption) {
    quizFeedback.textContent = "Please select an answer!";
    quizFeedback.style.color = "red";
    return;
  }

  const userAnswer = selectedOption.value;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    quizFeedback.textContent = "Correct! 🎉";
    quizFeedback.style.color = "green";
  } else {
    quizFeedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    quizFeedback.style.color = "red";
  }

  currentQuestionIndex++;
  setTimeout(showNextQuizQuestion, 2000);
}

function showQuizResult() {
  const quizSection = document.getElementById("quizSection");
  const percentage = Math.round((score / questions.length) * 100);
  const feedbackMessage = percentage === 100
    ? "Excellent! You're a JavaScript pro! 🥳"
    : percentage >= 70
    ? "Great job! You're on your way to mastery! 😊"
    : "Keep practicing! You're getting there! 🚀";

  quizSection.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${score}/${questions.length} (${percentage}%)</p>
    <p>${feedbackMessage}</p>
    <button onclick="showQuiz()">Retake Quiz</button>
  `;
}
