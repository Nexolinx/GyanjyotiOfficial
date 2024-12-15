const questions = [
    {
        question: "What is the next number in the sequence? 2, 4, 8, 16, __?",
        options: ["0. 24", "1. 32", "2. 30", "3. 28"],
        answer: 1
    },
    {
        question: "Which shape comes next in the following sequence? 🔴, 🟡, 🟢, 🔵, __?",
        options: ["0. 🟣", "1. 🟤", "2. 🟡", "3. 🔴"],
        answer: 0
    },
    {
        question: "Hand is to Glove as Foot is to __?",
        options: ["0. Shoe", "1. Sock", "2. Sandal", "3. Boot"],
        answer: 1
    },
    {
        question: "If all cats are mammals and some mammals are dogs, are all cats dogs?",
        options: ["0. Yes", "1. No", "2. Sometimes", "3. Only if they are trained"],
        answer: 1
    },
    {
        question: "Which word does not belong with the others? Apple, Banana, Carrot, Orange",
        options: ["0. Apple", "1. Banana", "2. Carrot", "3. Orange"],
        answer: 2
    },
    {
        question: "What is the missing number in the series? 3, 6, 9, 12, __?",
        options: ["0. 15", "1. 18", "2. 21", "3. 24"],
        answer: 0
    },
    {
        question: "Which one of the five is least like the other four? Dog, Cat, Rabbit, Mouse, Carrot",
        options: ["0. Dog", "1. Cat", "2. Rabbit", "3. Carrot"],
        answer: 3
    },
    {
        question: "If you rearrange the letters 'CIFAIPC' you would have the name of a(n):",
        options: ["0. City", "1. Animal", "2. Ocean", "3. Country"],
        answer: 3
    },
    {
        question: "Which number does not belong in the following series? 1, 4, 9, 16, 20",
        options: ["0. 1", "1. 4", "2. 9", "3. 20"],
        answer: 3
    },
    {
        question: "If you have three apples and you take away two, how many do you have?",
        options: ["0. 1", "1. 2", "2. 3", "3. 0"],
        answer: 1
    },
    {
        question: "What is the next letter in the sequence? A, C, E, G, __?",
        options: ["0. H", "1. I", "2. J", "3. K"],
        answer: 0
    },
    {
        question: "What is the opposite of 'descend'?",
        options: ["0. Climb", "1. Fall", "2. Increase", "3. Go down"],
        answer: 0
    },
    {
        question: "If some A are B and some B are C, can we say that some A are definitely C?",
        options: ["0. Yes", "1. No", "2. Maybe", "3. Cannot determine"],
        answer: 1
    },
    {
        question: "Which number comes next in this sequence? 1, 1, 2, 3, 5, 8, __?",
        options: ["0. 10", "1. 11", "2. 12", "3. 13"],
        answer: 3
    },
    {
        question: "Which word is the odd one out? Orange, Apple, Banana, Carrot",
        options: ["0. Orange", "1. Apple", "2. Banana", "3. Carrot"],
        answer: 3
    },
    {
        question: "If it takes 5 men 10 days to build a wall, how long would it take 10 men?",
        options: ["0. 5 days", "1. 10 days", "2. 15 days", "3. 20 days"],
        answer: 0
    },
    {
        question: "What is the result of 7 + 6 ÷ 3 - 2?",
        options: ["0. 9", "1. 10", "2. 11", "3. 12"],
        answer: 0
    },
    {
        question: "Which of the following shapes is a quadrilateral?",
        options: ["0. Triangle", "1. Circle", "2. Square", "3. Pentagon"],
        answer: 2
    },
    {
        question: "What is the next number in the sequence? 10, 20, 30, 40, __?",
        options: ["0. 50", "1. 60", "2. 70", "3. 80"],
        answer: 0
    },
    {
        question: "If you write a number in words, which is correct? 24",
        options: ["0. Twenty Four", "1. Twenty-Four", "2. Twentyfour", "3. Twentyfour"],
        answer: 1
    },
    {
        question: "Which one is the odd one out? Red, Blue, Yellow, Green, Apple",
        options: ["0. Red", "1. Blue", "2. Yellow", "3. Apple"],
        answer: 3
    },
    {
        question: "What comes next in the sequence? A, B, C, D, __?",
        options: ["0. E", "1. F", "2. G", "3. H"],
        answer: 0
    },
    {
        question: "Which of the following is a prime number?",
        options: ["0. 4", "1. 6", "2. 9", "3. 13"],
        answer: 3
    },
    {
        question: "If today is Monday, what day will it be in three days?",
        options: ["0. Tuesday", "1. Wednesday", "2. Thursday", "3. Friday"],
        answer: 1
    },
    {
        question: "Which one of the following words does not belong?",
        options: ["0. Sky", "1. Earth", "2. Water", "3. Tree"],
        answer: 0
    },
    {
        question: "Which number completes the pattern? 5, 10, 15, __, 25",
        options: ["0. 18", "1. 20", "2. 22", "3. 24"],
        answer: 1
    },
    {
        question: "What is the square of 8?",
        options: ["0. 56", "1. 64", "2. 72", "3. 80"],
        answer: 1
    },
    {
        question: "What is the capital of France?",
        options: ["0. Berlin", "1. Madrid", "2. Paris", "3. Rome"],
        answer: 2
    },
    {
        question: "Which of the following is an even number?",
        options: ["0. 3", "1. 5", "2. 7", "3. 8"],
        answer: 3
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["0. 4", "1. 5", "2. 6", "3. 7"],
        answer: 2
    },
    {
        question: "What is the next letter in this sequence: B, D, F, H, __?",
        options: ["0. J", "1. K", "2. L", "3. M"],
        answer: 0
    },
    {
        question: "If a dozen eggs cost $3, how much do 4 eggs cost?",
        options: ["0. $1", "1. $1.50", "2. $2", "3. $0.75"],
        answer: 3
    },
    {
        question: "Which one of the following is a mammal?",
        options: ["0. Eagle", "1. Shark", "2. Lion", "3. Goldfish"],
        answer: 2
    },
    {
        question: "What is 15% of 200?",
        options: ["0. 25", "1. 30", "2. 40", "3. 50"],
        answer: 1
    },
    {
        question: "How many months have 28 days?",
        options: ["0. 1", "1. 12", "2. 6", "3. 2"],
        answer: 1
    },
    {
        question: "What is the value of π (pi) approximately?",
        options: ["0. 2.14", "1. 3.14", "2. 4.14", "3. 5.14"],
        answer: 1
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["0. 1912", "1. 1910", "2. 1914", "3. 1916"],
        answer: 0
    },
    {
        question: "How many continents are there?",
        options: ["0. 5", "1. 6", "2. 7", "3. 8"],
        answer: 2
    },
    {
        question: "What is the boiling point of water?",
        options: ["0. 90°C", "1. 100°C", "2. 110°C", "3. 120°C"],
        answer: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["0. Seoul", "1. Beijing", "2. Tokyo", "3. Bangkok"],
        answer: 2
    },
    {
        question: "If a clock shows 3:15, what is the angle between the hour and the minute hand?",
        options: ["0. 45°", "1. 90°", "2. 112.5°", "3. 135°"],
        answer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["0. Earth", "1. Mars", "2. Jupiter", "3. Saturn"],
        answer: 2
    },
    {
        question: "Which one of these is a fruit?",
        options: ["0. Carrot", "1. Tomato", "2. Potato", "3. Lettuce"],
        answer: 1
    },
    {
        question: "What is the currency of the United States?",
        options: ["0. Euro", "1. Yen", "2. Dollar", "3. Peso"],
        answer: 2
    },
    {
        question: "Which is the fastest land animal?",
        options: ["0. Lion", "1. Cheetah", "2. Tiger", "3. Horse"],
        answer: 1
    },
    {
        question: "How many legs does a spider have?",
        options: ["0. 6", "1. 8", "2. 10", "3. 12"],
        answer: 1
    },
    {
        question: "What comes next in the series: 1, 1, 2, 3, 5, __?",
        options: ["0. 6", "1. 7", "2. 8", "3. 9"],
        answer: 2
    },
    {
        question: "Which word is the odd one out? Hot, Warm, Cold, Freeze",
        options: ["0. Hot", "1. Warm", "2. Cold", "3. Freeze"],
        answer: 3
    },
    {
        question: "If you rearrange the letters 'LISTEN', you would have the name of a(n):",
        options: ["0. Animal", "1. Instrument", "2. Silent", "3. Person"],
        answer: 2
    },
    {
        question: "Which number is a square of 9?",
        options: ["0. 18", "1. 27", "2. 81", "3. 90"],
        answer: 2
    },
    {
        question: "If two's a company and three's a crowd, what are four and five?",
        options: ["0. Nine", "1. A party", "2. A gathering", "3. None of the above"],
        answer: 0
    },
    {
        question: "How many times can you subtract 5 from 25?",
        options: ["0. Once", "1. Five times", "2. Ten times", "3. Four times"],
        answer: 0
    },
    {
        question: "What is the next letter in the series? D, F, H, J, __?",
        options: ["0. K", "1. L", "2. M", "3. N"],
        answer: 0
    },
    {
        question: "If a triangle has two sides of length 5 and 5, what is the length of the third side?",
        options: ["0. 5", "1. 6", "2. 10", "3. Cannot be determined"],
        answer: 3
    },
    {
        question: "Which is the odd one out? March, April, May, June, Friday",
        options: ["0. March", "1. April", "2. May", "3. Friday"],
        answer: 3
    },
    {
        question: "What is the total of the angles in a triangle?",
        options: ["0. 180 degrees", "1. 360 degrees", "2. 90 degrees", "3. 270 degrees"],
        answer: 0
    },
    {
        question: "Which one of these is not a primary color?",
        options: ["0. Red", "1. Blue", "2. Green", "3. Yellow"],
        answer: 2
    },
    {
        question: "What is the capital of Australia?",
        options: ["0. Sydney", "1. Melbourne", "2. Canberra", "3. Brisbane"],
        answer: 2
    },
    {
        question: "How many degrees are in a circle?",
        options: ["0. 180", "1. 360", "2. 90", "3. 270"],
        answer: 1
    },
    {
        question: "Which number is missing in the series? 2, 4, 8, 16, __?",
        options: ["0. 20", "1. 24", "2. 32", "3. 36"],
        answer: 2
    }

];

let currentQuestionIndex = 0;
let timeLeft = 700;
let timerId;
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
        }, 3000); 
    }
}

function startTimer() {
    timeLeft = 700;
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
    setTimeout(closePopup, 6000); 
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
