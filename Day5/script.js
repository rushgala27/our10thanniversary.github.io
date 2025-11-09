const quizData = [
  {
    question: "Which flower did I send you through the examiner during elementary exams?😉",
    options: ["Rose", "Aster", "Lily", "Sunflower"],
    correct: 1
  },
  {
    question: "What subject were we studying when I proposed you for the very first time?😘",
    options: [
      "English",
      "History",
      "Marathi",
      "Algebra"
    ],
    correct: 3
  },
  {
    question: "Which restaurant did we go to after out first athhai together?❤️",
    options: ["Rude Lounge", "Achija", "Status", "Blossom"],
    correct: 0
  },
  {
    question: "What is our go-to scooter ride place(for enjoying thandak)?😉",
    options: ["BKC", "Powai", "Bandra", "Sion"],
    correct: 1
  },
  {
    question: "Where did we meet during 11th in the evening(where we got caught)?😂",
    options: ["School gate", "Ghatkopar station", "Parekh market terrace", "Sarvoday"],
    correct: 2
  }
];

const quiz = document.getElementById('quiz');
const restartBtn = document.getElementById('restart');

// Create score display element
const scoreDisplay = document.getElementById('score')

let score = 0;
let answeredCount = 0;

function loadQuiz() {
  quiz.innerHTML = '';
  scoreDisplay.textContent = '';
  score = 0;
  answeredCount = 0;

  quizData.forEach((q, index) => {
    const questionEl = document.createElement('div');
    questionEl.classList.add('question-block');
    questionEl.innerHTML = `
      <div class="question">${index + 1}. ${q.question}</div>
      <div class="options">
        ${q.options
          .map(
            (opt, i) => `<div class="option" data-index="${i}" data-q="${index}">${opt}</div>`
          )
          .join('')}
      </div>
    `;
    quiz.appendChild(questionEl);
  });

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', handleAnswer);
  });
}

function handleAnswer(e) {
  const selected = e.target;
  const qIndex = selected.getAttribute('data-q');
  const optIndex = selected.getAttribute('data-index');
  const questionData = quizData[qIndex];

  const options = selected.parentElement.querySelectorAll('.option');
  options.forEach(opt => opt.style.pointerEvents = 'none'); // disable options after answer

  if (optIndex == questionData.correct) {
    selected.classList.add('correct');
    score++;
  } else {
    selected.classList.add('incorrect');
    options[questionData.correct].classList.add('correct');
  }

  answeredCount++;

  // Show final score after all questions answered
  if (answeredCount === quizData.length) {
    scoreDisplay.textContent = `✅ You scored ${score} out of ${quizData.length}!`;
  }
}

restartBtn.addEventListener('click', loadQuiz);

loadQuiz();
