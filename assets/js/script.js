//ref to html

const quiz = document.querySelector(".quiz-area");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnsubmit = document.getElementById("btn");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswer()
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}
   Questions</p>`;
}

function deselectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

btnsubmit.addEventListener("click", () => {
  const answer = getSelected();

  if(answer) {
    
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    
    } else {
      quiz.innerHTML = `<h2> You Answered ${score}/${quizData.length} Question Right</h2>
      <button type="button" onclick="location()">Reload</button>`;
    }
  }
});










