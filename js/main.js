// js/main.js

document.getElementById("instructionsButton").onclick = () => startLesson("instructions");
document.getElementById("decisionsButton").onclick = () => startLesson("decisions");
document.getElementById("repetitionButton").onclick = () => startLesson("repetition");
document.getElementById("abstractionButton").onclick = () => startLesson("abstraction");

document.getElementById("quizButton").onclick = showQuiz;
document.getElementById("submitQuizButton").onclick = submitQuizAnswer;
