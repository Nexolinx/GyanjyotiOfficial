const riddles = [
  { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
  { question: "What has keys but can't open locks?", answer: "keyboard" },
  { question: "What can travel around the world while staying in the corner?", answer: "stamp" }
];

let currentRiddleIndex = 0;
let timerInterval;
let timeLeft = 30;
let score = 0;
let bestScore = localStorage.getItem('bestScore') || 0;  // Get best score from localStorage

const riddleText = document.getElementById("riddleText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("scoreDisplay");
const startBtn = document.getElementById("startBtn");

function loadRiddle() {
  clearInterval(timerInterval);
  timeLeft = 30;
  if (currentRiddleIndex < riddles.length) {
    riddleText.textContent = riddles[currentRiddleIndex].question;
    answerInput.value = "";
    feedback.textContent = "";
    timer.textContent = `Time left: ${timeLeft} seconds`;
    answerInput.disabled = false;
    submitBtn.disabled = false;
    startTimer();
  } else {
    endGame();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `Time left: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedback.textContent = "Time's up! Moving to the next riddle.";
      feedback.style.color = "orange";
      setTimeout(nextRiddle, 2000);
    }
  }, 1000);
}

function checkAnswer() {
  clearInterval(timerInterval);
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Moving to the next riddle...";
    feedback.style.color = "green";
    score++;
    updateScore();
  } else {
    feedback.textContent = "Incorrect! Moving to the next riddle.";
    feedback.style.color = "red";
  }
  setTimeout(nextRiddle, 2000);
}

function nextRiddle() {
  currentRiddleIndex++;
  if (currentRiddleIndex < riddles.length) {
    loadRiddle();
  } else {
    endGame();
  }
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function endGame() {
  feedback.textContent = `Game over! Your final score is ${score}.`;
  feedback.style.color = "blue";

  // Update best score if necessary
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('bestScore', bestScore);
    Swal.fire({
      title: "New Best Score!",
      text: `Congratulations! Your new best score is ${bestScore}`,
      icon: "success",
      confirmButtonText: "Awesome!"
    });
  }

  // Show Game Over SweetAlert
  Swal.fire({
    title: 'Game Over!',
    text: `Your final score: ${score}`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Restart Game',
    cancelButtonText: 'Exit',
  }).then((result) => {
    if (result.isConfirmed) {
      restartGame();
    } else {
      Swal.fire('Thanks for playing!');
    }
  });

  // Hide game elements
  answerInput.style.display = "none";
  submitBtn.style.display = "none";
  timer.style.display = "none";
}

function restartGame() {
  currentRiddleIndex = 0;
  score = 0;
  updateScore();
  feedback.textContent = "";
  answerInput.style.display = "block";
  submitBtn.style.display = "block";
  timer.style.display = "block";
  loadRiddle();
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";  // Hide the start button
  loadRiddle();  // Start the game
});

submitBtn.addEventListener("click", checkAnswer);
