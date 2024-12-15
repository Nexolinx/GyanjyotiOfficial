const questions = [
    {
        question: "‘रामले खेल खेल्यो’ वाक्यमा कर्ता के हो?",
        options: ["0. राम", "1. खेल", "2. खेल्यो", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘म विद्यालय जान्छु’ वाक्यको काल के हो?",
        options: ["0. वर्तमान", "1. भूत", "2. भविष्य", "3. चक्रवात"],
        answer: 0
    },
    {
        question: "‘पुस्तक’ शब्द तात्सम हो वा तात्पर्य?",
        options: ["0. तात्सम", "1. तात्पर्य", "2. समानार्थी", "3. क्रियापद"],
        answer: 0
    },
    {
        question: "‘गाउँमा’ शब्दमा के कर्ता हो?",
        options: ["0. गाउँ", "1. मा", "2. सब", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘खुसी’ शब्दको विपरीत शब्द के हो?",
        options: ["0. दुःख", "1. चाँडो", "2. धेरै", "3. धेरै कुरा"],
        answer: 0
    },
    {
        question: "‘कुरो’ शब्दको वाच्य के हो?",
        options: ["0. क्रियात्मक", "1. अनुवादात्मक", "2. अवस्थामूलक", "3. विषयगत"],
        answer: 1
    },
    {
        question: "‘सूर्य’को अर्थ के हो?",
        options: ["0. चन्द्र", "1. तारा", "2. प्रकाश", "3. चाँद"],
        answer: 2
    },
    {
        question: "‘उदाहरणको’ वाक्यमा कर्ता के हो?",
        options: ["0. उदाहरण", "1. को", "2. वाक्य", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘रामको घर’ वाक्यमा समर्पक के हो?",
        options: ["0. राम", "1. घर", "2. को", "3. कुनै होइन"],
        answer: 2
    },
    {
        question: "‘तपाईं’ र ‘तिमी’ बीचको भेद के हो?",
        options: ["0. समानार्थी", "1. स्तर", "2. भूमिका", "3. वाच्य"],
        answer: 1
    },
    {
        question: "‘सुन’को तात्सम शब्द के हो?",
        options: ["0. सुन", "1. स्वर्ण", "2. धातु", "3. धात"],
        answer: 1
    },
    {
        question: "‘साँझ’को शुद्ध वाक्य के हो?",
        options: ["0. साँझ आउँछ।", "1. साँझ आउनु।", "2. साँझ आउँदैन।", "3. साँझ आउनेछ।"],
        answer: 0
    },
    {
        question: "‘नमस्कार’ शब्द आगन्तुक हो वा तात्सम?",
        options: ["0. आगन्तुक", "1. तात्सम", "2. विपरीत", "3. समानार्थी"],
        answer: 0
    },
    {
        question: "‘बच्चा’ र ‘बच्ची’ वाच्यको उदाहरण के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. संज्ञा", "3. विशेषण"],
        answer: 0
    },
    {
        question: "‘रमाइलो’ शब्दको विशेषण के हो?",
        options: ["0. सुखद", "1. चित्ताकर्षक", "2. उत्साहित", "3. रमाइलो"],
        answer: 1
    },
    {
        question: "कुन वाक्य शुद्ध हो?",
        options: ["0. म पानी पिउँछु।", "1. म पानी पिउन्छु।", "2. म पानी पिउनु।", "3. म पानी पिउन।"],
        answer: 0
    },
    {
        question: "‘तिमीले कता जान्छौ?’ वाक्यको काल के हो?",
        options: ["0. भविष्य", "1. वर्तमान", "2. भूत", "3. चक्रवात"],
        answer: 1
    },
    {
        question: "‘गर्मी’को विपरीत शब्द के हो?",
        options: ["0. चिसो", "1. गर्मी", "2. चाँडो", "3. चित्त"],
        answer: 0
    },
    {
        question: "‘चाँद’को तात्सम शब्द के हो?",
        options: ["0. चन्द्र", "1. सूर्य", "2. तारा", "3. आकाश"],
        answer: 0
    },
    {
        question: "‘सुपर’को शुद्ध रूप के हो?",
        options: ["0. उत्कृष्ट", "1. माथि", "2. चाँडो", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘बड़ा’ शब्दको अर्थ के हो?",
        options: ["0. सानो", "1. ठूलो", "2. लामो", "3. गहिरो"],
        answer: 1
    },
    {
        question: "‘बेटी’ र ‘बेटा’ वाच्यको उदाहरण के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. समानार्थी", "3. भिन्न"],
        answer: 0
    },
    {
        question: "‘खुसी’को विशेषण के हो?",
        options: ["0. शान्त", "1. सुखद", "2. रमाइलो", "3. अमर"],
        answer: 1
    },
    {
        question: "‘उदाहरण’ शब्दको वाच्य के हो?",
        options: ["0. सधै", "1. कर्ता", "2. कार्य", "3. कुनै होइन"],
        answer: 1
    },
    {
        question: "‘खेल’को तात्सम शब्द के हो?",
        options: ["0. खेल", "1. खेलकुद", "2. खेलकर्मी", "3. खेलाड"],
        answer: 0
    },
    {
        question: "‘दुई’ शब्दको वाच्य के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. संज्ञा", "3. विशेषण"],
        answer: 1
    },
    {
        question: "‘सिक्नु’को शुद्ध रूप के हो?",
        options: ["0. सिक्न", "1. सिक्छु", "2. सिक्न सक्छु", "3. सिक्न हुन्छ"],
        answer: 0
    },
    {
        question: "‘म सँग छु’ वाक्यको वाच्य के हो?",
        options: ["0. कर्ता", "1. कर्म", "2. संज्ञा", "3. अव्यय"],
        answer: 0
    },
    {
        question: "कुन वाक्य शुद्ध हो?",
        options: ["0. उनी विद्यालय जान्छ।", "1. उनी विद्यालय जान्छु।", "2. उनी विद्यालय जान्छु।", "3. उनी विद्यालय जान्नु।"],
        answer: 0
    },
    {
        question: "‘तिम्रो’ र ‘तिमीसँग’ वाक्यमा के हुन्छ?",
        options: ["0. दायित्व", "1. समर्पक", "2. समानार्थी", "3. भिन्न"],
        answer: 1
    },
    {
        question: "‘गर्मीको’ वाक्यमा समर्पक के हो?",
        options: ["0. गर्मी", "1. को", "2. मौसम", "3. कुनै होइन"],
        answer: 1
    },
    {
        question: "‘बोल्नु’ क्रिया छ भने वाक्य के हो?",
        options: ["0. बोल्छु", "1. बोल्न", "2. बोल्न सक्छु", "3. बोल्दै छु"],
        answer: 0
    },
    {
        question: "‘बचाउने’को विशेषण के हो?",
        options: ["0. सुरक्षा", "1. जिम्मा", "2. जिम्मेवारी", "3. संज्ञा"],
        answer: 2
    },
    {
        question: "‘अन्य’ शब्दको विपरीत के हो?",
        options: ["0. विशेष", "1. भिन्न", "2. समान", "3. सबै"],
        answer: 1
    },
    {
        question: "‘सर्वत्र’को शुद्ध रूप के हो?",
        options: ["0. सबैत्र", "1. सर्वत्र", "2. यत्र", "3. कुनै होइन"],
        answer: 1
    },
    {
        question: "‘दुईवटा’ वाक्यमा कर्ता के हो?",
        options: ["0. दुई", "1. वटा", "2. को", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘रामको’ वाक्यमा समर्पक के हो?",
        options: ["0. राम", "1. को", "2. घर", "3. कुनै होइन"],
        answer: 1
    },
    {
        question: "‘कमल’को तात्सम शब्द के हो?",
        options: ["0. कमल", "1. पादप", "2. फूल", "3. वनस्पति"],
        answer: 0
    },
    {
        question: "‘नम्र’को विपरीत शब्द के हो?",
        options: ["0. दम्भ", "1. विनम्र", "2. सज्जन", "3. गम्भीर"],
        answer: 0
    },
    {
        question: "‘सजिलो’को विशेषण के हो?",
        options: ["0. सजिलो", "1. कठिन", "2. रोचक", "3. चित्ताकर्षक"],
        answer: 1
    },
    {
        question: "‘पढाइ’ वाक्यमा कर्ता के हो?",
        options: ["0. पढाइ", "1. को", "2. अध्ययन", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘मठ’को तात्सम शब्द के हो?",
        options: ["0. मठ", "1. मन्दिर", "2. पुजारी", "3. धर्म"],
        answer: 0
    },
    {
        question: "‘बुबा’ र ‘आमा’ वाच्यको उदाहरण के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. समानार्थी", "3. भिन्न"],
        answer: 0
    },
    {
        question: "‘खेल्न’को शुद्ध रूप के हो?",
        options: ["0. खेल्नु", "1. खेल्दैन", "2. खेल्दैनन्", "3. खेल्दैनन्"],
        answer: 0
    },
    {
        question: "‘सिंह’को अर्थ के हो?",
        options: ["0. शेर", "1. बाघ", "2. माछा", "3. चाँद"],
        answer: 0
    },
    {
        question: "‘गुलाब’को तात्सम शब्द के हो?",
        options: ["0. गुलाब", "1. फूल", "2. बोट", "3. बगैंचा"],
        answer: 0
    },
    {
        question: "‘गित’को वाच्य के हो?",
        options: ["0. कर्ता", "1. कर्म", "2. संज्ञा", "3. विशेषण"],
        answer: 1
    },
    {
        question: "‘सुन’को तात्पर्य के हो?",
        options: ["0. धातु", "1. सम्पत्ति", "2. धन", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘बाचक’ र ‘कठिन’को भेद के हो?",
        options: ["0. समानार्थी", "1. विपरीत", "2. भिन्न", "3. मिश्रण"],
        answer: 1
    },
    {
        question: "‘पानी’ वाक्यमा के कर्ता हो?",
        options: ["0. पानी", "1. के", "2. बहुवचन", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘कुराहरु’को वाच्य के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. समानार्थी", "3. भिन्न"],
        answer: 1
    },
    {
        question: "‘सुख’को विपरीत शब्द के हो?",
        options: ["0. दुःख", "1. चित्त", "2. क्षति", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘समान’को विशेषण के हो?",
        options: ["0. भिन्न", "1. समानार्थी", "2. सन्देश", "3. शब्द"],
        answer: 1
    },
    {
        question: "‘दूर’को अर्थ के हो?",
        options: ["0. नजिक", "1. टाढा", "2. नजिकै", "3. कुनै होइन"],
        answer: 1
    },
    {
        question: "‘शिक्षा’को शुद्ध रूप के हो?",
        options: ["0. शिक्षा", "1. शिक्षिका", "2. शिक्षक", "3. शिक्षामानव"],
        answer: 0
    },
    {
        question: "‘राम्रो’को विपरीत के हो?",
        options: ["0. नराम्रो", "1. थाक्नु", "2. उचाइ", "3. गहिरो"],
        answer: 0
    },
    {
        question: "‘खुसी’को वाच्य के हो?",
        options: ["0. सकारात्मक", "1. विशेषण", "2. अव्यय", "3. भिन्न"],
        answer: 0
    },
    {
        question: "‘सुर्य’को तात्सम शब्द के हो?",
        options: ["0. सुर्य", "1. प्रकाश", "2. चन्द्र", "3. आकाश"],
        answer: 0
    },
    {
        question: "‘राजा’ र ‘रानी’ वाच्यको उदाहरण के हो?",
        options: ["0. एकवचन", "1. बहुवचन", "2. समानार्थी", "3. भिन्न"],
        answer: 0
    },
    {
        question: "‘उचाइ’को विपरीत शब्द के हो?",
        options: ["0. गहिराइ", "1. कम", "2. उच्च", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘मिस्सी’को अर्थ के हो?",
        options: ["0. रङ", "1. बोट", "2. सृष्टी", "3. फल"],
        answer: 1
    },
    {
        question: "‘साल’को तात्सम शब्द के हो?",
        options: ["0. साल", "1. वृक्ष", "2. बोट", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘पुस्तक’को वाच्य के हो?",
        options: ["0. कर्ता", "1. कर्म", "2. विशेषण", "3. भिन्न"],
        answer: 1
    },
    {
        question: "‘पठाउनु’को शुद्ध रूप के हो?",
        options: ["0. पठाउन", "1. पठाउन सक्छु", "2. पठाइन्छ", "3. पठाइँदैन"],
        answer: 0
    },
    {
        question: "‘तपाईं’को तात्पर्य के हो?",
        options: ["0. तिमी", "1. मैले", "2. उनी", "3. कुनै होइन"],
        answer: 0
    },
    {
        question: "‘काला’को विपरीत शब्द के हो?",
        options: ["0. उज्यालो", "1. चाँडो", "2. कुनै होइन", "3. गहिरो"],
        answer: 0
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
