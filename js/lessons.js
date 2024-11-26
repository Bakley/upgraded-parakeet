// js/lessons.js
const lessons = {
    instructions: "Lesson on Instructions: Instructions are commands that computers execute in order.",
    decisions: "Lesson on Decisions: Decisions help us choose between different paths using logic.",
    repetition: "Lesson on Repetition: Repetition involves doing the same task multiple times.",
    abstraction: "Lesson on Abstraction: Abstraction simplifies complex ideas into reusable functions.",
  };
  
  function startLesson(lessonKey) {
    const outputDiv = document.getElementById("output");
    const content = lessons[lessonKey];
  
    if (content) {
      outputDiv.innerHTML = `<h2>${lessonKey.toUpperCase()}</h2><p>${content}</p>`;
      document.getElementById("quizSection").style.display = "none";
    } else {
      outputDiv.innerHTML = "<p>Lesson not found!</p>";
    }
  }
  