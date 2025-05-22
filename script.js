const subjectSelect = document.getElementById("subject-select");
const questionCountSelect = document.getElementById("question-count-select");
const startBtn = document.getElementById("start-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const setupContainer = document.getElementById("setup-container");
const finalScore = document.getElementById("final-score");

// Sample 60 questions
const allQuestions = {
  math: [
    { question: "What is 5 + 3 = ?", answers: ["6", "8", "9", "7"], correct: "8" },
    { question: "What is 9 × 2 = ?", answers: ["18", "16", "12", "10"], correct: "18" },
    { question: "Which of the following is an even number ?", answers: ["5", "8", "9", "7"], correct: "5" },
    { question: "What is the value of π (approximately) ?", answers: ["2.14", "3.14", "3.41", "2.41"], correct: "3.14" },
    { question: "Which number is a multiple of both 2 and 3?", answers: ["15", "18", "9", "8"], correct: "18" },
    { question: "What comes after 99?", answers: ["98", "100", "99", "101"], correct: "100" },
    { question: "What is 9 × 9?", answers: ["61", "18", "90", "81"], correct: "81" },
    { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correct: "2" },
    { question: "What is 100 - 45?", answers: ["45", "55", "65", "40"], correct: "55" },
    { question: "What is the half of 100?", answers: ["20", "25", "50", "60"], correct: "50" },
    { question: "What is the square of 3?", answers: ["6", "8", "9", "7"], correct: "9" },
    { question: "How many sides does a triangle have?", answers: ["2", "3", "4", "5"], correct: "3" },
    { question: "What is 1/2 + 1/2?", answers: ["1", "2", "0", "1/4"], correct: "1" },
    { question: "What is the next prime number after 13??", answers: ["14", "16", "15", "17"], correct: "17" },
    { question: "If 5x = 20, what is the value of x?", answers: ["6", "8", "4", "2"], correct: "4" },
    { question: "If the perimeter of a square is 36 cm, what is the length of one side??", answers: ["6", "8", "12", "9"], correct: "9" },
    { question: "What is the place value of 7 in 574?", answers: ["70", "7", "700", "0.7"], correct: "70" },
    { question: "What is 20 - 5?", answers: ["15", "10", "9", "1"], correct: "15" },
    { question: "Which shape has 4 equal sides?", answers: ["Triangle", "Circle", "Square", "Rectangle"], correct: "Square" },
    { question: "What is 4 + 4 + 4?", answers: ["8", "16", "12", "10"], correct: "12" },
  ],

  science: [
    { question: "What planet is known as the Red Planet?", answers: ["Earth", "Venus", "Mars", "Jupiter"], correct: "Mars" },
    { question: "Water boils at ___°C?", answers: ["90", "80", "100", "110"], correct: "100" },
    { question: "What do plants need to make food?", answers: ["Moonlight", "Sunlight", "Starlight", "Fire"], correct: "Sunlight" },
    { question: "Which part of the body pumps blood?", answers: ["Brain", "Liver", "Heart", "Lungs"], correct: "Heart" },
    { question: "What gas do humans breathe in?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: "Oxygen" },
    { question: "Which organ helps us to think?", answers: ["Heart", "Brain", "Stomach", "Kidney"], correct: "Brain" },
    { question: "Which planet do we live on?", answers: ["Mars", "Jupiter", "Earth", "Venus"], correct: "Earth" },
    { question: "What do we see with?", answers: ["Nose", "Ear", "Tongue", "Eye"], correct: "Eye" },
    { question: "Which one is a solid?", answers: ["Water", "Ice", "Milk", "Juice"], correct: "Ice" },
    { question: "Which is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Satrun", "Mars"], correct: "Jupiter" },
    { question: "What do animals need to survive?", answers: ["Clothes", "Toys", "Food and Water", "Bus"], correct: "Food and Water" },
    { question: "Which sense organ helps us to hear?", answers: ["Eye", "Ear", "Hear", "Nose"], correct: "Ear" },
    { question: "Which part of the plant is under the ground?", answers: ["Leaf", "Stem", "Root", "Flower"], correct: "Root" },
    { question: "What is the main function of white blood cells?", answers: ["Carry Oxygen", "Fight Infections", "Digest Food", "Produce Energy"], correct: "Fight Infections" },
    { question: "What causes day and night on Earth?", answers: ["Revolution", "Rotation", "Moon", "Sun"], correct: "Rotation" },
    { question: "Which of the following is not a renewable source of energy?", answers: ["Solar", "Wind", "Coal", "Hydro"], correct: "Coal" },
    { question: "What is the pH value of pure water?", answers: ["6", "8", "9", "7"], correct: "7" },
    { question: "Which part of the human brain controls balance and coordination?", answers: ["Cerebrum", "Cerebellum", "Medulla", "Pons"], correct: "Cerebellum" },
    { question: "Which gas is needed for burning?", answers: ["Oxygen", "Nitrogen", "Argon", "Helium"], correct: "Oxygen" },
    { question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], correct: "Mitochondria" },
  ],


  gk: [
    { question: "Who is the current President of India(as of 2025)?", answers: ["Narendra Modi", "Droupadi Murmu", "Ram Nath Kovind", "Amit Shah"], correct: "Droupadi Murmu" },
    { question: "Which continent is the Sahara Desert in?", answers: ["Asia", "Africa", "Europe", "Australia"], correct: "Africa" },
    { question: "What is the capital of Australia?", answers: ["Sydney", "Canberra", "Melbourne", "Perth"], correct: "Canberra" },
    { question: "How many continents are there in the world?", answers: ["5", "6", "7", "8"], correct: "7" },
    { question: "Which is the largest ocean in the world?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: "Pacific" },
    {
        question: "Which is the largest ocean in the world?",
        answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: "Pacific"
    },
    {
        question: "What currency is used in Japan?",
        answers: ["Dollar", "Won", "Yen", "Yuan"],
        correct: "Yen"
    }, 
    {
        question: "Who wrote the national anthem of India?",
        answers: ["Rabindranath Tagore", "Mahatma Gandhi", "Subhash Chandra Bose", "Jawaharlal Nehru"],
        correct: "Rabindranath Tagore"
    },
    {
        question: "Which animal is known as the ‘Ship of the Desert’?",
        answers: ["Horse", "Camel", "Donkey", "Elephant"],
        correct: "Camel"
      },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Everest", "Kilimanjaro", "Alps"],
        correct: "Everest"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Jupiter", "Mars", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who invented the telephone?",
        answers: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Alexander Graham Bell"],
        correct: "Alexander Graham Bell"
    },
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
        correct: "Delhi"
    },
    {
        question: "Which is the national bird of India?",
        answers: ["Parrot", "Peacock", "Crow", "Eagle"],
        correct: "Peacock"
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        answers: ["Holi", "Eid", "Diwali", "Christmas"],
        correct: "Diwali"
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: ["Neil Armstrong", "Rakesh Sharma", "Buzz Aldrin", "Kalpana Chawla"],
        correct: "Neil Armstrong"
    },
    {
        question: "What is the longest river in the world?",
        answers: ["Nile", "Amazon", "Ganga", "Yangtze"],
        correct: "Nile"
    },
    {
        question: "Who is known as the Father of the Nation (India)?",
        answers: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "B. R. Ambedkar"],
        correct: "Mahatma Gandhi"
    },
    {
        question: "What does a thermometer measure?",
        answers: ["Speed", "Weight", "Temperature", "Pressure"],
        correct: "Temperature"
    },
    {
        question: "Which sport is Sachin Tendulkar associated with?",
        answers: ["Football", "Tennis", "Hockey", "Cricket"],
        correct: "Cricket"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        answers: ["Germany", "Italy", "France", "UK"],
        correct: "France"
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: ["Europe", "Australia", "Antarctica", "Asia"],
        correct: "Australia"
    } 
  ]
};

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = { math: 0, science: 0, gk: 0 };
let selectedSubject = "";

subjectSelect.addEventListener("change", () => {
  const sub = subjectSelect.value;
  questionCountSelect.disabled = false;
  questionCountSelect.innerHTML = "<option disabled selected>Select count</option>";

  const options = sub === "mixed" ? [5, 10, 20] : [3, 5, 10];
  options.forEach(count => {
    const opt = document.createElement("option");
    opt.value = count;
    opt.textContent = count;
    questionCountSelect.appendChild(opt);
  });
});

startBtn.addEventListener("click", () => {
  const subject = subjectSelect.value;
  const count = parseInt(questionCountSelect.value);
  if (!subject || !count) return;

  selectedSubject = subject;
  selectedQuestions = getQuestions(subject, count);
  setupContainer.classList.add("hidden");
  quizBox.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = { math: 0, science: 0, gk: 0 };
  showQuestion();
});

function getQuestions(subject, count) {
  let questions = [];
  if (subject === "mixed") {
    let pool = [...allQuestions.math, ...allQuestions.science, ...allQuestions.gk];
    questions = shuffle(pool).slice(0, count);
  } else {
    questions = shuffle(allQuestions[subject]).slice(0, count);
  }
  return questions;
}

function showQuestion() {
  resetState();
  const q = selectedQuestions[currentQuestionIndex];
  questionElement.textContent = q.question;

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.addEventListener("click", () => selectAnswer(btn, q.correct));
    answerButtonsElement.appendChild(btn);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answerButtonsElement.innerHTML = "";
}

function selectAnswer(button, correct) {
  const userAnswer = button.textContent;
  const correctAns = correct;

  Array.from(answerButtonsElement.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAns) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  // Track score
  const currentQ = selectedQuestions[currentQuestionIndex];
  if (userAnswer === correctAns) {
    if (selectedSubject === "mixed") {
      const category = getCategory(currentQ);
      score[category]++;
    } else {
      score[selectedSubject]++;
    }
  }

  nextButton.classList.remove("hidden");
}

function getCategory(questionObj) {
  if (allQuestions.math.includes(questionObj)) return "math";
  if (allQuestions.science.includes(questionObj)) return "science";
  if (allQuestions.gk.includes(questionObj)) return "gk";
  return "unknown";
}

function getBadgeClass(accuracy) {
    if (accuracy > 90) return "gold";
    if (accuracy > 80) return "silver";
    if (accuracy > 60) return "bronze";
    if (accuracy > 50) return "starter";
    return "learning";
  }
  

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});



function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
  
    const totalCorrect = score.math + score.science + score.gk;
    const totalQuestions = selectedQuestions.length;
    const accuracy = (totalCorrect / totalQuestions) * 100;
  
    let feedback = "";
    let emoji = "";
    let badge = "";
  
    if (accuracy > 90) {
      feedback = "Excellent!";
      emoji = "🌟";
      badge = "🏅 Gold Badge";
    } else if (accuracy > 80) {
      feedback = "Good job!";
      emoji = "👍";
      badge = "🥈 Silver Badge";
    } else if (accuracy > 60) {
      feedback = "Nice!";
      emoji = "🙂";
      badge = "🥉 Bronze Badge";
    } else if (accuracy > 50) {
      feedback = "Not bad!";
      emoji = "😐";
      badge = "🎖️ Starter Badge";
    } else {
      feedback = "It's alright... just need to work hard.";
      emoji = "💪";
      badge = "📘 Learning Badge";
    }

    finalScore.innerHTML = `
  <p><strong>Math:</strong> ${score.math}</p>
  <p><strong>Science:</strong> ${score.science}</p>
  <p><strong>General Knowledge:</strong> ${score.gk}</p>
  <p><strong>Total:</strong> ${totalCorrect} / ${totalQuestions}</p>
  <p><strong>Accuracy:</strong> ${accuracy.toFixed(1)}%</p>
  <p class="feedback">${emoji} ${feedback}</p>
  <div class="badge ${getBadgeClass(accuracy)}">${badge}</div>
`;}
  



restartButton.addEventListener("click", () => {
  setupContainer.classList.remove("hidden");
  resultBox.classList.add("hidden");
});

// Utility
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

