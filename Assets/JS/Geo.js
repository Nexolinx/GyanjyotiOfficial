const questions = [
    {
        question: "नेपालको राजधानी के हो?",
        options: ["0. पोखरा", "1. काठमाडौं", "2. विराटनगर", "3. नेपालगञ्ज"],
        answer: 1
    },
    {
        question: "सगरमाथाको उचाइ कति छ?",
        options: ["0. 8849 मिटर", "1. 8000 मिटर", "2. 7500 मिटर", "3. 9000 मिटर"],
        answer: 0
    },
    {
        question: "नेपालको राष्ट्रिय फूल के हो?",
        options: ["0. गुलाब", "1. लालीगुराँस", "2. कमल", "3. चंपा"],
        answer: 1
    },
    {
        question: "नेपालको सबैभन्दा ठूलो नदी कुन हो?",
        options: ["0. कर्णाली", "1. गण्डकी", "2. महाकाली", "3. कोसी"],
        answer: 0
    },
    {
        question: "नेपालको भौगोलिक क्षेत्रफल कति छ?",
        options: ["0. 147,516 वर्ग किलोमिटर", "1. 100,000 वर्ग किलोमिटर", "2. 200,000 वर्ग किलोमिटर", "3. 120,000 वर्ग किलोमिटर"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["0. फेवाताल", "1. राराताल", "2. रानीताल", "3. बाग्मती"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख भाषाहरू के के हुन्?",
        options: ["0. नेपाली, मैथिली, थारु", "1. अंग्रेजी, हिंदी", "2. उर्दू, संस्कृत", "3. बास्क, तामिल"],
        answer: 0
    },
    {
        question: "नेपालको जलवायु कस्तो छ?",
        options: ["0. भूमध्य रेखीय", "1. समशीतोष्ण", "2. ध्रुवीय", "3. उपोष्ण"],
        answer: 1
    },
    {
        question: "नेपालको सबैभन्दा उचो पर्वत कुन हो?",
        options: ["0. अन्नपूर्ण", "1. धवलागिरी", "2. मकालु", "3. सगरमाथा"],
        answer: 3
    },
    {
        question: "नेपालको सीमाना कति देशसँग छ?",
        options: ["0. 1", "1. 2", "2. 3", "3. 4"],
        answer: 1
    },
    {
        question: "काठमाडौं उपत्यका कति जिल्लामा समावेश छ?",
        options: ["0. 1", "1. 2", "2. 3", "3. 4"],
        answer: 2
    },
    {
        question: "नेपालको प्रमुख वनस्पति कुन हो?",
        options: ["0. चीर", "1. साल", "2. बाँस", "3. दालचिनी"],
        answer: 1
    },
    {
        question: "नेपालको सबैभन्दा लामो सिमाना कुन देशसँग छ?",
        options: ["0. भारत", "1. चीन", "2. भुटान", "3. बङ्गलादेश"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख उद्योग के हो?",
        options: ["0. कृषि", "1. पर्यटन", "2. हस्तकला", "3. उद्योग"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख चक्रवातको नाम के हो?",
        options: ["0. बर्मा", "1. हिमालय", "2. चक्रवात", "3. मणिपुर"],
        answer: 2
    },
    {
        question: "नेपालको सबैभन्दा ठूलो चुरे पर्वतको नाम के हो?",
        options: ["0. महाभारत", "1. चुरे", "2. हिमालय", "3. कञ्चनजङ्घा"],
        answer: 1
    },
  
    {
        question: "नेपालमा कति राष्ट्रिय निकुञ्जहरू छन्?",
        options: ["0. 10", "1. 12", "2. 14", "3. 16"],
        answer: 2
    },
    {
        question: "नेपालको प्रमुख जलवायु क्षेत्र कुन हो?",
        options: ["0. समशीतोष्ण", "1. उपोष्ण", "2. अति चिसो", "3. चिसो"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो क्यास्केड कुन हो?",
        options: ["0. गोकर्णेश्वर", "1. चोरवाँटा", "2. गहिरो", "3. डोलालघाट"],
        answer: 3
    },
    {
        question: "नेपालको प्रमुख स्थानहरू कुन हुन्?",
        options: ["0. काठमाडौं, पोखरा, चितवन", "1. नेपालगञ्ज, विराटनगर, धनगढी", "2. लहान, दाङ, धरान", "3. सबैभन्दा ठूला"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["0. राराताल", "1. फेवाताल", "2. दुधकोशी", "3. हलेसी"],
        answer: 1
    },
    {
        question: "नेपालको सबैभन्दा पुरानो शहर कुन हो?",
        options: ["0. काठमाडौँ", "1. लुम्बिनी", "2. भक्तपुर", "3. पाटन"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख पर्वत श्रृंखला कुन हो?",
        options: ["0. हिमालय", "1. आल्प्स", "2. आर्कटिक", "3. अंडिज"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख जलाशय कुन हो?",
        options: ["0. राराताल", "1. फेवाताल", "2. सगरमाथा", "3. शार्दूल"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख सहर कुन हो?",
        options: ["0. पोखरा", "1. काठमाडौं", "2. नेपालगञ्ज", "3. विराटनगर"],
        answer: 1
    },
    {
        question: "नेपालको जलवायु कस्तो छ?",
        options: ["0. समशीतोष्ण", "1. उष्ण", "2. चिसो", "3. सभी"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो नदी कति छ?",
        options: ["0. कोसी", "1. गण्डकी", "2. कर्णाली", "3. बागमती"],
        answer: 2
    },
    {
        question: "नेपालको भौगोलिक भागमा कति प्रतिशत पहाड छ?",
        options: ["0. 20%", "1. 30%", "2. 40%", "3. 50%"],
        answer: 1
    },
    {
        question: "नेपालको पश्चिमी सिमाना कुन नदी हो?",
        options: ["0. गण्डकी", "1. महाकाली", "2. कर्णाली", "3. कोसी"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख समुद्री किनारा कुन हो?",
        options: ["0. जनकपुर", "1. धरान", "2. भैरहवा", "3. काँकडभिट्टा"],
        answer: 0
    },
    {
        question: "नेपालको सर्वाधिक उचाइमा कुन शिखर रहेको छ?",
        options: ["0. अन्नपूर्ण", "1. धवलागिरी", "2. सगरमाथा", "3. मकालु"],
        answer: 2
    },
    {
        question: "नेपालको महाभारत श्रृंखला कहाँ अवस्थित छ?",
        options: ["0. पश्चिम", "1. पूर्व", "2. दक्षिण", "3. उत्तर"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख औषधि कस्तो छ?",
        options: ["0. चिरायता", "1. कागती", "2. तुलसी", "3. अमला"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा पुरानो राष्ट्रिय निकुञ्ज कुन हो?",
        options: ["0. चितवन", "1. शुक्लाफाँटा", "2. मनास्लु", "3. सगरमाथा"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो भूकम्प कुन वर्षमा आएको थियो?",
        options: ["0. 2015", "1. 2012", "2. 2010", "3. 2008"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख सामुदायिक विकास कार्यक्रम कुन हो?",
        options: ["0. कृषि विकास", "1. शिक्षा विकास", "2. स्वास्थ्य विकास", "3. महिला विकास"],
        answer: 0
    },
    {
        question: "नेपालमा कति स्थानिय बासिन्दा छन्?",
        options: ["0. 3 करोड", "1. 2 करोड", "2. 4 करोड", "3. 1 करोड"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["0. राराताल", "1. फेवाताल", "2. शार्दूल", "3. दुधकोशी"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख चाड कुन हो?",
        options: ["0. दशैं", "1. तिहार", "2. होली", "3. माघे संक्रान्ति"],
        answer: 0
    },
    {
        question: "नेपालको सर्वाधिक संख्यामा रहेका जनजाति कुन हो?",
        options: ["0. सौर्य", "1. गर्खाली", "2. बागचौर", "3. थारु"],
        answer: 3
    },
    {
        question: "नेपालमा सबैभन्दा ठूलो धार्मिक स्थल कुन हो?",
        options: ["0. मन्दिर", "1. गुम्बा", "2. मस्जिद", "3. पञ्चतारा"],
        answer: 0
    },
    {
        question: "नेपालको जलवायु परिवर्तनको मुख्य कारण के हो?",
        options: ["0. ग्लोबल वार्मिंग", "1. औद्योगिकीकरण", "2. जनसंख्या वृद्धि", "3. वन विनाश"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख धातु कुन हो?",
        options: ["0. स्वर्ण", "1. चाँदी", "2. कपर", "3. लोहा"],
        answer: 0
    },
    {
        question: "नेपालमा कित्ता कति छ?",
        options: ["0. 3", "1. 2", "2. 4", "3. 5"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख खाद्य सामग्री के हो?",
        options: ["0. चामल", "1. गहुँ", "2. मकै", "3. आलु"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख पानीको स्रोत कुन हो?",
        options: ["0. नदी", "1. ताल", "2. जलाशय", "3. धारा"],
        answer: 0
    },
    {
        question: "नेपालको राष्ट्रिय चारा कुन हो?",
        options: ["0. गहुँ", "1. मकै", "2. धान", "3. आलु"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख जलवायु परिवर्तन कुन हो?",
        options: ["0. गर्मी", "1. चिसो", "2. वर्षा", "3. शीत"],
        answer: 2
    },
    {
        question: "नेपालमा कति राष्ट्रिय निकुञ्ज छन्?",
        options: ["0. 10", "1. 12", "2. 15", "3. 20"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख जंगली जनावर कुन हो?",
        options: ["0. बाघ", "1. गैंडा", "2. हात्ती", "3. भालु"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["0. फेवाताल", "1. राराताल", "2. चाँदताल", "3. हलेसी"],
        answer: 1
    },
    {
        question: "नेपालको प्रमुख पर्यटन क्षेत्र कुन हो?",
        options: ["0. पोखरा", "1. चितवन", "2. लुम्बिनी", "3. सबैभन्दा ठूला"],
        answer: 3
    },
    {
        question: "नेपालको सर्वाधिक जनसंख्या भएको जिल्ला कुन हो?",
        options: ["0. काठमाडौं", "1. भक्तपुर", "2. पोखरा", "3. विराटनगर"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा पुरानो विश्वविद्यालय कुन हो?",
        options: ["0. त्रिभुवन", "1. काठमाण्डौं", "2. बाग्मती", "3. गंगा"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख सामुदायिक कार्यक्रम कुन हो?",
        options: ["0. शिक्षा विकास", "1. कृषि विकास", "2. स्वास्थ्य विकास", "3. जल विकास"],
        answer: 0
    },
    {
        question: "नेपालमा कति बोटबिरुवाहरू पाइन्छ?",
        options: ["0. 600", "1. 800", "2. 1000", "3. 1200"],
        answer: 1
    },
    {
        question: "नेपालको जलवायु परिवर्तनको मुख्य कारण के हो?",
        options: ["0. जनसंख्या वृद्धि", "1. औद्योगिकीकरण", "2. ग्लोबल वार्मिंग", "3. वन विनाश"],
        answer: 2
    },
    {
        question: "नेपालको प्रमुख फसल कुन हो?",
        options: ["0. धान", "1. गहुँ", "2. मकै", "3. चिया"],
        answer: 0
    },
    {
        question: "नेपालको सबैभन्दा पुरानो चन्द्रमा यात्रा कहिले भएको थियो?",
        options: ["0. 1969", "1. 1970", "2. 1971", "3. 1972"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख नदिहरू कुन हुन्?",
        options: ["0. कर्णाली, कोसी, गण्डकी", "1. गण्डकी, महाकाली, कर्णाली", "2. कोसी, गण्डकी, महाकाली", "3. कर्णाली, कोसी, महाकाली"],
        answer: 0
    },
    {
        question: "नेपालको प्रमुख जाति कुन हो?",
        options: ["0. थारु", "1. ब्राह्मण", "2. माघी", "3. माया"],
        answer: 1
    },
    {
        question: "नेपालको सबैभन्दा ठूलो पशु कुन हो?",
        options: ["0. गैंडा", "1. भालु", "2. कुकुर", "3. हात्ती"],
        answer: 3
    },
    {
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["0. फेवाताल", "1. राराताल", "2. डोक्ला", "3. गहरी"],
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
