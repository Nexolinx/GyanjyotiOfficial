const questions = [
    {
        question: "If a car travels 60 miles in 1 hour, how far will it travel in 2.5 hours?",
        options: ["120 miles", "150 miles", "180 miles", "100 miles"],
        answer: 1 
    },
    
  
    {
        question: "If the angles of a triangle are 30 degrees and 60 degrees, what is the third angle?",
        options: ["60 degrees", "90 degrees", "120 degrees", "30 degrees"],
        answer: 1
    },

    
   
    {
        question: "If 3 apples cost $1.50, how much do 12 apples cost?",
        options: ["$6.00", "$4.50", "$5.00", "$5.50"],
        answer: 0 
    },
   
    {
        question: "What is the sum of the angles in a quadrilateral?",
        options: ["360 degrees", "180 degrees", "270 degrees", "90 degrees"],
        answer: 0 
    },
   
    {
        question: "If a train leaves the station at 3 PM and travels at 60 mph, how far will it have traveled by 5 PM?",
        options: ["100 miles", "120 miles", "150 miles", "180 miles"],
        answer: 1 
    },
    {
        question: "What is the square of 5?",
        options: ["20", "25", "30", "15"],
        answer: 1
    },
    {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "20"],
        answer: 1
    },
    {
        question: "What is the perimeter of a rectangle with length 5 and width 3?",
        options: ["15", "10", "20", "16"],
        answer: 3
    },
    {
        question: "What is the area of a triangle with base 4 and height 3?",
        options: ["6", "10", "12", "8"],
        answer: 0
    },
    {
        question: "What is 9²?",
        options: ["81", "72", "90", "100"],
        answer: 0
    },
    {
        question: "What is the next prime number after 7?",
        options: ["8", "9", "10", "11"],
        answer: 3
    },
    {
        question: "What is the value of π (Pi) approximately?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        answer: 0
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
        answer: 0
    },
    {
        question: "What is the value of x if 2x + 3 = 11?",
        options: ["4", "3", "5", "7"],
        answer: 0
    },
    {
        question: "If the cost of 3 pens is $1.20, what is the cost of 10 pens?",
        options: ["$4.00", "$4.80", "$5.00", "$5.50"],
        answer: 1 
    },
    {
        question: "If a circle has a diameter of 10, what is its circumference? (Use π ≈ 3.14)",
        options: ["31.4", "25.4", "20.4", "15.4"],
        answer: 0
    },
    {
        question: "If a store is having a 25% off sale on an item that costs $40, how much will you pay?",
        options: ["$30", "$35", "$25", "$20"],
        answer: 1 
    },
    {
        question: "What is the total number of sides in 10 triangles?",
        options: ["20", "30", "40", "50"],
        answer: 1 
    },
    {
        question: "If it takes 3 workers 4 days to complete a job, how long will it take 6 workers to complete the same job?",
        options: ["2 days", "3 days", "4 days", "5 days"],
        answer: 0 
    },
    {
        question: "What is the average of the following numbers: 10, 20, 30, 40, 50?",
        options: ["30", "35", "40", "45"],
        answer: 0 
    },
    {
        question: "What is the value of x if 3x - 5 = 16?",
        options: ["5", "6", "7", "8"],
        answer: 2 
    },
    {
        question: "If a car's value depreciates by 10% each year and it is worth $20,000 now, what will it be worth in one year?",
        options: ["$18,000", "$17,000", "$16,000", "$15,000"],
        answer: 0 
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "4"],
        answer: 1 
    },
    {
        question: "What is the least common multiple (LCM) of 4 and 6?",
        options: ["12", "24", "30", "36"],
        answer: 0 
    },
    {
        question: "If a family has 4 children and 3 of them are boys, what is the probability of randomly selecting a boy?",
        options: ["1/2", "3/4", "1/4", "2/4"],
        answer: 1 
    },
    {
        question: "What is the value of 10^2?",
        options: ["100", "10", "20", "50"],
        answer: 0 
    },
    {
        question: "If a baker makes 20 loaves of bread a day, how many loaves will he make in a week?",
        options: ["140", "120", "160", "180"],
        answer: 1
    },
    {
        question: "If you buy a shirt for $30 and sell it for $45, what is your profit?",
        options: ["$10", "$15", "$20", "$25"],
        answer: 1 
    },
    {
        question: "What is the next number in the sequence: 5, 10, 20, 40, ?",
        options: ["50", "60", "70", "80"],
        answer: 3 
    },
    {
        question: "If the cost of 5 oranges is $1.50, how much will 15 oranges cost?",
        options: ["$4.50", "$3.50", "$5.00", "$6.00"],
        answer: 0
    },
    {
        question: "What is the value of x if 4x + 8 = 24?",
        options: ["2", "3", "4", "5"],
        answer: 1 
    },
    {
        question: "What is 7^2 + 3^2?",
        options: ["58", "50", "49", "45"],
        answer: 0 
    },
    {
        question: "If a train travels at 75 mph, how long will it take to travel 150 miles?",
        options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
        answer: 1
    },
    {
        question: "What is the next number in the sequence: 1, 4, 9, 16, ?",
        options: ["20", "24", "25", "30"],
        answer: 2
    },
    {
        question: "If you have a right triangle with legs measuring 3 and 4, what is the length of the hypotenuse?",
        options: ["5", "6", "7", "8"],
        answer: 0
    },
    {
        question: "What is the volume of a cube with a side length of 3?",
        options: ["6", "9", "27", "30"],
        answer: 2 
    },
    {
        question: "What is 50% of 80?",
        options: ["30", "35", "40", "50"],
        answer: 2 
    },
    {
        question: "What is the sum of the interior angles of a pentagon?",
        options: ["360 degrees", "540 degrees", "720 degrees", "900 degrees"],
        answer: 1 
    },


   
    {
        question: "If a triangle has sides of length 3, 4, and 5, what type of triangle is it?",
        options: ["Isosceles", "Equilateral", "Scalene", "Right"],
        answer: 3
    },
    {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["6", "12", "18", "3"],
        answer: 1
    },
    {
        question: "If a pizza is cut into 8 equal slices and you eat 3 slices, what fraction of the pizza is left?",
        options: ["5/8", "3/8", "1/8", "2/8"],
        answer: 0 
    },
    {
        question: "What is the least common multiple (LCM) of 3 and 4?",
        options: ["12", "24", "15", "20"],
        answer: 0
    },
    {
        question: "What is the value of 4^3?",
        options: ["64", "48", "32", "16"],
        answer: 0 
    },
    {
        question: "What is 10² + 5²?",
        options: ["125", "100", "75", "50"],
        answer: 0
    },
    {
        question: "What is the value of 3 cubed (3³)?",
        options: ["6", "9", "27", "30"],
        answer: 2
    },
    {
        question: "What is the total cost of 3 books if each book costs $12.99?",
        options: ["$36.97", "$38.97", "$40.97", "$42.97"],
        answer: 1
    },
    {
        question: "What is 7 + 3 × 2?",
        options: ["10", "13", "14", "16"],
        answer: 1
    },
    {
        question: "What is 8 - 3 + 2?",
        options: ["7", "5", "4", "8"],
        answer: 0
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "7", "9"],
        answer: 1
    },
    {
        question: "If 2x = 10, what is the value of x?",
        options: ["2", "3", "5", "4"],
        answer: 2
    },
    {
        question: "What is 4 + 4 × 2?",
        options: ["8", "12", "16", "10"],
        answer: 1
    },
    {
        question: "What is the area of a circle with radius 3?",
        options: ["9π", "6π", "12π", "3π"],
        answer: 0
    },
    {
        question: "What is 5! (5 factorial)?",
        options: ["120", "60", "100", "90"],
        answer: 0
    },
    {
        question: "What is the sum of the interior angles of a quadrilateral?",
        options: ["360 degrees", "270 degrees", "180 degrees", "90 degrees"],
        answer: 0
    },
    {
        question: "What is the value of 12 - (4 + 2)?",
        options: ["6", "8", "4", "10"],
        answer: 1
    },
    {
        question: "What is the hypotenuse of a right triangle with legs of length 3 and 4?",
        options: ["5", "6", "7", "8"],
        answer: 0
    },
    {
        question: "What is the value of 2² + 3²?",
        options: ["7", "8", "9", "10"],
        answer: 0
    },
    {
        question: "What is the value of 10 - 3 × 2?",
        options: ["4", "6", "8", "5"],
        answer: 1
    },
    {
        question: "What is 3 + 5 × 4 - 2?",
        options: ["19", "22", "18", "20"],
        answer: 0
    },
    {
        question: "What is the value of 6 + 2 × (3 + 1)?",
        options: ["10", "14", "12", "16"],
        answer: 0
    },
    {
        question: "What is the circumference of a circle with diameter 10?",
        options: ["31.4", "28.3", "33.3", "20"],
        answer: 0
    },
    {
        question: "What is the slope of a line passing through the points (2, 3) and (4, 7)?",
        options: ["2", "1", "0.5", "4"],
        answer: 0
    },
    {
        question: "What is the value of 8 - (2 + 3)?",
        options: ["2", "3", "5", "4"],
        answer: 3
    },
    {
        question: "What is the area of a rectangle with length 10 and width 5?",
        options: ["50", "60", "70", "40"],
        answer: 0
    },
    {
        question: "What is 2 raised to the power of 5?",
        options: ["16", "24", "32", "64"],
        answer: 2
    },
    {
        question: "What is the sum of the first five prime numbers?",
        options: ["28", "30", "26", "32"],
        answer: 0
    },
    {
        question: "What is 1000 ÷ 25?",
        options: ["40", "30", "20", "50"],
        answer: 0
    },
    {
        question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?",
        options: ["120 km", "150 km", "180 km", "200 km"],
        answer: 1
    },
    {
        question: "What is the median of the following numbers: 2, 3, 5, 7, 11?",
        options: ["5", "6", "4", "3"],
        answer: 0
    },
    {
        question: "What is the mode of the following numbers: 1, 2, 2, 3, 4?",
        options: ["2", "3", "1", "4"],
        answer: 0
    },
    {
        question: "What is 45 + 55?",
        options: ["100", "110", "90", "80"],
        answer: 0
    },
    {
        question: "What is the product of the first four positive integers?",
        options: ["24", "20", "30", "18"],
        answer: 0
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16?",
        options: ["32", "24", "30", "28"],
        answer: 0
    },
    {
        question: "If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
        options: ["10", "20", "25", "5"],
        answer: 3 
    },
    {
        question: "What is 14 ÷ 2 + 6?",
        options: ["12", "10", "8", "14"],
        answer: 0
    },
    {
        question: "What is the value of x in the equation 3x = 12?",
        options: ["2", "4", "6", "3"],
        answer: 1
    },
    {
        question: "What is the angle between the hands of a clock at 3:00?",
        options: ["90 degrees", "60 degrees", "180 degrees", "120 degrees"],
        answer: 0
    },
    {
        question: "What is the sum of 4.5 and 2.3?",
        options: ["6.8", "7.8", "8.8", "9.8"],
        answer: 0
    },
    {
        question: "What is 5 × (3 + 2)?",
        options: ["15", "20", "25", "30"],
        answer: 1
    },
    {
        question: "If a rectangle has a length of 8 and a width of 2, what is its area?",
        options: ["10", "12", "16", "20"],
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
