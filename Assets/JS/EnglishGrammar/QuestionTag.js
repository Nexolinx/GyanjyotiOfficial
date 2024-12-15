const questions = [
    {
        question: "She is your sister, ____?",
        options: [
            "isn't she?",
            "is she?",
            "doesn't she?",
            "wasn't she?"
        ],
        answer: 0
    },
    {
        question: "They won't be late, ____?",
        options: [
            "will they?",
            "won't they?",
            "aren't they?",
            "don't they?"
        ],
        answer: 3
    },
    {
        question: "It's a nice day, ____?",
        options: [
            "isn't it?",
            "is it?",
            "doesn't it?",
            "was it?"
        ],
        answer: 2
    },
    {
        question: "You have seen this movie, ____?",
        options: [
            "haven't you?",
            "have you?",
            "don't you?",
            "didn't you?"
        ],
        answer: 1
    },
    {
        question: "She can't speak French, ____?",
        options: [
            "can she?",
            "can't she?",
            "doesn't she?",
            "isn't she?"
        ],
        answer: 0
    },
    {
        question: "They are playing football, ____?",
        options: [
            "aren't they?",
            "are they?",
            "don't they?",
            "won't they?"
        ],
        answer: 2
    },
    {
        question: "You were late yesterday, ____?",
        options: [
            "weren't you?",
            "wasn't you?",
            "was you?",
            "did you?"
        ],
        answer: 0
    },
    {
        question: "She doesn't like tea, ____?",
        options: [
            "does she?",
            "doesn't she?",
            "is she?",
            "isn't she?"
        ],
        answer: 3
    },
    {
        question: "They haven't finished yet, ____?",
        options: [
            "have they?",
            "haven't they?",
            "did they?",
            "are they?"
        ],
        answer: 0
    },
    {
        question: "You're coming to the meeting, ____?",
        options: [
            "aren't you?",
            "are you?",
            "won't you?",
            "don't you?"
        ],
        answer: 2
    },
    {
        question: "We can meet tomorrow, ____?",
        options: [
            "can't we?",
            "can we?",
            "should we?",
            "must we?"
        ],
        answer: 1
    },
    {
        question: "He doesn't know the answer, ____?",
        options: [
            "does he?",
            "doesn't he?",
            "didn't he?",
            "isn't he?"
        ],
        answer: 0
    },
    {
        question: "She was at the party, ____?",
        options: [
            "wasn't she?",
            "was she?",
            "isn't she?",
            "doesn't she?"
        ],
        answer: 2
    },
    {
        question: "They haven't arrived yet, ____?",
        options: [
            "have they?",
            "did they?",
            "are they?",
            "do they?"
        ],
        answer: 0
    },
    {
        question: "You haven't been to Italy, ____?",
        options: [
            "have you?",
            "haven't you?",
            "did you?",
            "didn't you?"
        ],
        answer: 3
    },
    {
        question: "She's a teacher, ____?",
        options: [
            "isn't she?",
            "is she?",
            "doesn't she?",
            "wasn't she?"
        ],
        answer: 0
    },
    {
        question: "They were late, ____?",
        options: [
            "weren't they?",
            "were they?",
            "are they?",
            "did they?"
        ],
        answer: 1
    },
    {
        question: "It's raining, ____?",
        options: [
            "isn't it?",
            "is it?",
            "was it?",
            "doesn't it?"
        ],
        answer: 2
    },
    {
        question: "He should be here by now, ____?",
        options: [
            "shouldn't he?",
            "should he?",
            "mustn't he?",
            "can he?"
        ],
        answer: 0
    },
    {
        question: "You're leaving tomorrow, ____?",
        options: [
            "aren't you?",
            "are you?",
            "will you?",
            "don't you?"
        ],
        answer: 3
    },
    {
        question: "She hasn't seen the new movie, ____?",
        options: [
            "has she?",
            "hasn't she?",
            "didn't she?",
            "isn't she?"
        ],
        answer: 0
    },
    {
        question: "You will come to the party, ____?",
        options: [
            "won't you?",
            "will you?",
            "aren't you?",
            "don't you?"
        ],
        answer: 1
    },
    {
        question: "They haven't finished their work, ____?",
        options: [
            "have they?",
            "did they?",
            "are they?",
            "don't they?"
        ],
        answer: 2
    },
    {
        question: "He doesn't live here, ____?",
        options: [
            "does he?",
            "doesn't he?",
            "isn't he?",
            "wasn't he?"
        ],
        answer: 0
    },
    {
        question: "This is your car, ____?",
        options: [
            "isn't it?",
            "is it?",
            "wasn't it?",
            "hasn't it?"
        ],
        answer: 3
    },
    {
        question: "They can swim, ____?",
        options: [
            "can't they?",
            "can they?",
            "do they?",
            "don't they?"
        ],
        answer: 0
    },
    {
        question: "We are meeting at 6 PM, ____?",
        options: [
            "aren't we?",
            "are we?",
            "don't we?",
            "won't we?"
        ],
        answer: 1
    },
    {
        question: "She's from Canada, ____?",
        options: [
            "isn't she?",
            "is she?",
            "doesn't she?",
            "wasn't she?"
        ],
        answer: 2
    },
    {
        question: "You have finished your homework, ____?",
        options: [
            "haven't you?",
            "have you?",
            "didn't you?",
            "isn't it?"
        ],
        answer: 0
    },
    {
        question: "They should be there by now, ____?",
        options: [
            "shouldn't they?",
            "should they?",
            "can they?",
            "won't they?"
        ],
        answer: 3
    },
    {
        question: "It was a difficult test, ____?",
        options: [
            "wasn't it?",
            "was it?",
            "doesn't it?",
            "didn't it?"
        ],
        answer: 0
    },
    {
        question: "He's coming with us, ____?",
        options: [
            "isn't he?",
            "is he?",
            "wasn't he?",
            "doesn't he?"
        ],
        answer: 2
    },
    {
        question: "The train hasn't arrived yet, ____?",
        options: [
            "has it?",
            "hasn't it?",
            "isn't it?",
            "didn't it?"
        ],
        answer: 0
    },
    {
        question: "We were supposed to meet at 3 PM, ____?",
        options: [
            "weren't we?",
            "were we?",
            "didn't we?",
            "do we?"
        ],
        answer: 1
    },
    {
        question: "She'll be back soon, ____?",
        options: [
            "won't she?",
            "will she?",
            "doesn't she?",
            "isn't she?"
        ],
        answer: 2
    },
    {
        question: "You're going to the party, ____?",
        options: [
            "aren't you?",
            "are you?",
            "will you?",
            "don't you?"
        ],
        answer: 0
    },
    {
        question: "They haven't left yet, ____?",
        options: [
            "have they?",
            "did they?",
            "are they?",
            "don't they?"
        ],
        answer: 3
    }  
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
