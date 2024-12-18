const questions = [
    {
        question: "नेपालको पहिलो राजा को थिए?",
        options: ["0. पृथ्वीनारायण शाह", "1. त्रिभुवन", "2. मीनशा", "3. गोकर्णेश्वर"],
        answer: 0
    },
    {
        question: "नेपालको संविधान कति पटक परिवर्तन भएको छ?",
        options: ["0. 1", "1. 2", "2. 3", "3. 4"],
        answer: 2
    },
    {
        question: "नेपालको स्वतन्त्रता संग्राम कहिले सुरु भएको थियो?",
        options: ["0. 1950", "1. 1960", "2. 1940", "3. 1970"],
        answer: 0
    },
    {
        question: "नेपालको सगरमाथा पहिलो चोटी कहिले चढिएको थियो?",
        options: ["0. 1953", "1. 1960", "2. 1950", "3. 1970"],
        answer: 0
    },
    {
        question: "नेपालको इतिहासमा काठमाडौँ उपत्यकाको पहिलो शासक को थिए?",
        options: ["0. लक्ष्मी", "1. विक्रम", "2. मल्ल", "3. गौतम"],
        answer: 2
    },
    {
        question: "नेपालमा राणा शासन कहिले समाप्त भयो?",
        options: ["0. 1950", "1. 1961", "2. 1951", "3. 1965"],
        answer: 2
    },
    {
        question: "नेपालको बाग्मती सन्धि कति वर्षमा भएको थियो?",
        options: ["0. 1774", "1. 1815", "2. 1860", "3. 1900"],
        answer: 1
    },
    {
        question: "नेपालको राजधानी कहिले काठमाडौँ बनाइएको थियो?",
        options: ["0. 1857", "1. 1990", "2. 2000", "3. 1728"],
        answer: 3
    },
    {
        question: "नेपालको पहिलो गणतन्त्र कस्तो वर्षमा स्थापना भयो?",
        options: ["0. 2008", "1. 1990", "2. 2001", "3. 2006"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख धार्मिक स्थल लुम्बिनी कस्तो वर्षमा युनेस्को विश्व धरोहरको सूचीमा समावेश गरिएको थियो?",
        options: ["0. 1997", "1. 1985", "2. 1990", "3. 2001"],
        answer: 0
    },
    {
        question: "नेपालको साम्राज्यको स्थापना कुन वर्षमा भएको थियो?",
        options: ["0. 1768", "1. 1788", "2. 1800", "3. 1740"],
        answer: 0
    },
    {
        question: "नेपालको पहिलो प्रधानमन्त्री को थिए?",
        options: ["0. राम मनोहर लोहिया", "1. चन्द्र शमशेर", "2. भीमसेन थापा", "3. गणेशमान सिंह"],
        answer: 2
    },
    {
        question: "नेपालमा 10 वर्षको माओवादी युद्ध कहिले सुरु भएको थियो?",
        options: ["0. 1996", "1. 2001", "2. 2005", "3. 2010"],
        answer: 0
    },
    {
        question: "नेपालको राजनीतिक इतिहासमा 2006 को जनआन्दोलन कस्तो चोटी भएको थियो?",
        options: ["0. पहिलो", "1. दोस्रो", "2. तेस्रो", "3. चौथो"],
        answer: 1
    },
    {
        question: "नेपालको राष्ट्रिय झण्डा कुन वर्षबाट अपनाइएको हो?",
        options: ["0. 1960", "1. 1743", "2. 2001", "3. 1990"],
        answer: 1
    },
    {
        question: "नेपालको सुरुवातमा मल्लकालीन सांस्कृतिक समृद्धि कुन वर्षबाट शुरु भएको थियो?",
        options: ["0. 12th सदी", "1. 14th सदी", "2. 16th सदी", "3. 10th सदी"],
        answer: 1
    },
    {
        question: "नेपालको संविधान सभा कुन वर्षमा पहिलो पटक गठन भएको थियो?",
        options: ["0. 2008", "1. 2001", "2. 1990", "3. 1971"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख शैक्षिक संस्था कुन हो?",
        options: ["0. त्रिभुवन विश्वविद्यालय", "1. काठमाडौं विश्वविद्यालय", "2. पोखरा विश्वविद्यालय", "3. बागमती विश्वविद्यालय"],
        answer: 0
    },
    {
        question: "नेपालमा पहिलो टेलिभिजन सेवा कहिले सुरु भएको थियो?",
        options: ["0. 1985", "1. 1990", "2. 2000", "3. 1995"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो क्षेत्रफल कति हो?",
        options: ["0. 147,516 km²", "1. 140,000 km²", "2. 156,000 km²", "3. 150,000 km²"],
        answer: 0
    },
    {
        question: "नेपालको प्राचीन शासक कुन थिए?",
        options: ["0. मौर्य", "1. मल्ल", "2. सिसुवंशी", "3. गुप्त"],
        answer: 1
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
