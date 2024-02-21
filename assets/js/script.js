//Questions for Quiz
const quizData = [
  {
    question: "When was Liverpool Fc founded?",
    a: "1980",
    b: "1892",
    c: "1890",
    d: "1982",
    correct: "b",
  },

  {
    question: "Who was the first owner of Liverpool Fc?",
  
    a: "John Houlding", 
    b: "Tom Werner",
    c: "John William",
    d: "Bill Hogan",
    correct: "a",
  },

  {
    question: "What year did the Haysel stadium disaster happen?",
    
    a: "1980",
    b: "1982",
    c: "1985", 
    d: "1988",
    correct: "c"
    
  },

  {
    question: "What is the name of Liverpool Fc home ground?",
  
    a:"Old Trafford",
    b:"Anfield",
    c:"Emirates Staduim", 
    d:"Croke park",
    correct: "b",
  },

  {
    question: "What is Liverpool Fc Anthem?",

    a:"Glory Glory",
    b:"You'll Never Walk Alone", 
    c:"Celtic", 
    d:"Come on the Red",
    correct: "b",
    
  },

  {
    question: "Who was Liverpool first captain?",
    
    a: "Jimmy Ross",
    b: "Steven Gerrard", 
    c: "Andrew Hennah", 
    d: "Jordan Henderson",
    correct: "c",
    
  },

  {
    question: "How Many times has Liverpool won the Premier League?",
  
    a: "15",
    b: "17", 
    c: "19",
    d: "21",
    correct: "c",
    
  },

  {
    question: "How many FA cups have Liverpool won?",
    
    a: "7", 
    b: "8", 
    c: "5", 
    d: "4",
    correct: "b",
    
  },

  {
    question: "How many times Liverpool won Champions League?",
    
    a: "3", 
    b: "7",
    c: "6",
    d: "9",
    correct: "c",
    
  },

  {
    question: "Who did Liverpool beat in the 2005 Champions League",
    
    a: "Ac Millan",
    b: "Ajax", 
    c: "Real Madrid",
    d: "Batcalona", 
    correct: "a",
    
  }

];


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

//Function to show quiz Questions

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
      <button type="button" onclick="location.reload()">Play Again</button>`;
    }
  }
})











