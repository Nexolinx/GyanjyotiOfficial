
const questions = [
    { question: "She has ___ apple in her hand.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "There is ___ car parked outside.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "___ Sun rises in the east.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Arvind Dubey is ___ teacher at Kalikamanavgyan School.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "Nepal is known as ___ land of Mount Everest.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Shrijan Pandey is ___ CEO of Nexolinxs.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "We stayed at ___ hotel in Nepal.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "___ tallest peak in the world is in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Prashant Pandey is ___ software engineer.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Sushant Gautam is ___ manager at Nexolinxs.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "I saw ___ elephant during my visit to Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "___ Himalayas are located in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Birat Pandey has written ___ book about technology.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Raunak Acharya is ___ student at Gyanjyoti.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "They visited ___ famous temples in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "He found ___ old map of Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Nexolinxs is ___ leading tech company.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "___ capital of Nepal is Kathmandu.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "They saw ___ rare bird in Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "He gave me ___ book about Nepalese history.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "We met ___ engineer working in Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Gyanjyoti is ___ institute known for education.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "___ famous musician visited Nepal last year.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Nepal is ___ unique country with rich culture.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "___ tallest building in Kathmandu is impressive.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "We visited ___ historical sites in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "He is ___ honest man from Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "They climbed ___ highest mountain in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Nepal is ___ country in South Asia.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "They are planning to visit ___ ancient temple in Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "___ mountains of Nepal attract tourists worldwide.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Sushant Gautam organized ___ tech event in Nepal.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "They stayed at ___ beautiful resort in Nepal.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "___ population of Nepal is diverse.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Birat Pandey works as ___ analyst in Nexolinxs.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Prashant Pandey teaches at ___ prestigious school in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Nepal has ___ growing tech industry.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Raunak Acharya wrote ___ article about education in Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "___ famous trek in Nepal is the Annapurna Circuit.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Gyanjyoti is ___ educational platform in Nepal.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "Shrijan Pandey presented at ___ international conference.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "They visited ___ historical landmarks in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Sushant Gautam is ___ director at Nexolinxs.", options: ["a", "an", "the", "none"], answer: 0 },
    { question: "___ people of Nepal are known for their hospitality.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "He found ___ old manuscript in a Nepalese library.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "Birat Pandey attended ___ prestigious seminar in Nepal.", options: ["a", "an", "the", "none"], answer: 2 },
    { question: "Arvind Dubey visited ___ tech summit in Nepal.", options: ["a", "an", "the", "none"], answer: 1 },
    { question: "They stayed at ___ new hotel in Pokhara.", options: ["a", "an", "the", "none"], answer: 0 }
];


let currentQuestionIndex = 0;
let timerId;
let timeLeft = 600;
let mistakes = 0;

const questionContainer = document.getElementById('question-container');
const timeDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const remainingQuestionsCount = document.getElementById('remaining-questions-count');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizInfo = document.querySelector('.quiz-info');

function startQuiz() {
    startQuizBtn.style.display = 'none';
    quizInfo.style.display = 'block';
    updateRemainingQuestions();
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    clearPrevious();
    const currentQuestion = questions[currentQuestionIndex];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        questionContainer.appendChild(button);
    });
    questionContainer.style.display = 'block';
}

function checkAnswer(selectedIndex, selectedButton) {

    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => button.disabled = true);

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.answer) {

        selectedButton.classList.add('correct');

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                displayQuestion();
                updateRemainingQuestions();
            }, 1000);
        } else {
            endQuiz();
        }
    } else {

        selectedButton.classList.add('incorrect');

        mistakes++;
        popupMessage.textContent = "You got it wrong!";
        popup.style.display = 'block';
        setTimeout(() => {
            selectedButton.classList.remove('incorrect');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
                updateRemainingQuestions();
            } else {
                endQuiz();
            }
        }, 2000);
    }
}

function startTimer() {
    timeLeft = 600;
    timeDisplay.textContent = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;


        if (timeLeft <= 0) {
            clearInterval(timerId);
            endQuiz();
        }
    }, 1000);
}

function endTimer() {
    clearInterval(timerId);
}

function endQuiz() {
    endTimer();
    resultDisplay.style.display = 'block';
    showCompletionPopup();
}

function showCompletionPopup() {
    const completionMessage = `You have completed the quiz! You made ${mistakes} mistakes out of ${questions.length}.`;
    popupMessage.textContent = completionMessage;
    popup.style.display = 'block';
    setTimeout(closePopup, 3000);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    mistakes = 0;
    resultDisplay.style.display = 'none';
    clearPrevious();
    startQuiz();
}

function clearPrevious() {
    questionContainer.innerHTML = '';
}

function closePopup() {
    popup.style.display = 'none';
}

function updateRemainingQuestions() {
    remainingQuestionsCount.textContent = questions.length - currentQuestionIndex;
}
