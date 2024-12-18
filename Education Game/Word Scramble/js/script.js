const wordDisplay = document.querySelector(".word-display");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time span");
const inputField = document.querySelector(".input-word");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const scoreElement = document.querySelector(".score span");
const settingsToggle = document.querySelector(".toggle-settings");
const settingsPanel = document.querySelector(".settings-panel");
const difficultySelect = document.getElementById("difficulty-select");
const themeToggle = document.getElementById("theme-toggle");

let correctWord, timer;
let score = 0;
let maxTime = 30;
let difficulty = "medium";

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime + "s";
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(maxTime);
    let randomObj = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordDisplay.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) {
        alert(`Oops! ${userWord} is not the correct word`);
        score = Math.max(0, score - 5);
    } else {
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        score += 10;
        if (difficulty === "easy") score += 5;
        if (difficulty === "hard") score += 15;
    }
    scoreElement.textContent = score;
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

settingsToggle.addEventListener("click", () => {
    settingsPanel.classList.toggle("active");
});

difficultySelect.addEventListener("change", (e) => {
    difficulty = e.target.value;
    initGame();
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

inputField.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        checkWord();
    }
});

initGame();

