const questions = [
    { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "H2O2"], answer: 0 },
    { question: "Which of the following is a renewable energy source?", options: ["Coal", "Natural Gas", "Solar Energy", "Nuclear Energy"], answer: 2 },
    { question: "What is the process by which plants prepare their food?", options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"], answer: 2 },
    { question: "Which gas is produced during respiration?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },
    { question: "The force that opposes motion between two surfaces in contact is called:", options: ["Gravity", "Friction", "Tension", "Magnetism"], answer: 1 },
    { question: "What is the primary component of air?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: 1 },
    { question: "Which of the following is a characteristic of acids?", options: ["Bitter taste", "Slippery feel", "Sour taste", "None of the above"], answer: 2 },
    { question: "What is the process of changing a liquid to a gas called?", options: ["Condensation", "Evaporation", "Sublimation", "Freezing"], answer: 1 },
    { question: "Which organ in the human body is primarily responsible for pumping blood?", options: ["Brain", "Lungs", "Heart", "Liver"], answer: 2 },
    { question: "What is Newton's First Law of Motion?", options: ["An object at rest stays at rest unless acted upon.", "F=ma.", "For every action, there is an equal and opposite reaction.", "Energy cannot be created or destroyed."], answer: 0 },
    { question: "What is an example of a chemical change?", options: ["Melting ice", "Dissolving sugar in water", "Rusting of iron", "Breaking glass"], answer: 2 },
    { question: "What part of the cell is known as the powerhouse?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], answer: 2 },
    { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "9.8 km/h²", "9.8 m/s", "10 m/s²"], answer: 0 },
    { question: "Which type of bond involves the sharing of electron pairs between atoms?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: 1 },
    { question: "The periodic table is arranged in order of increasing:", options: ["Mass", "Atomic Number", "Density", "Volume"], answer: 1 },
    { question: "What type of energy is stored in food?", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"], answer: 3 },
    { question: "Which is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: 2 },
    { question: "What is the main source of energy for the Earth?", options: ["The Moon", "The Sun", "The Stars", "The Earth's core"], answer: 1 },
    { question: "Which of the following is not a state of matter?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: 3 },
    { question: "What is the pH of pure water?", options: ["0", "7", "14", "10"], answer: 1 },
    { question: "What is the process called when a solid changes directly to a gas?", options: ["Sublimation", "Evaporation", "Melting", "Freezing"], answer: 0 },
    { question: "What is the primary function of the roots of a plant?", options: ["Photosynthesis", "Absorption of water and nutrients", "Growth", "Reproduction"], answer: 1 },
    { question: "Which part of the brain is responsible for coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: 1 },
    { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Hg"], answer: 0 },
    { question: "Which gas do plants take in during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the basic unit of life?", options: ["Tissue", "Organ", "Cell", "Organism"], answer: 2 },
    { question: "Which force keeps the planets in orbit around the sun?", options: ["Magnetic Force", "Nuclear Force", "Gravitational Force", "Frictional Force"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "25°C"], answer: 0 },
    { question: "Which of the following is a non-renewable resource?", options: ["Wind Energy", "Solar Energy", "Coal", "Hydropower"], answer: 2 },
    { question: "What is the smallest particle of an element?", options: ["Molecule", "Atom", "Ion", "Compound"], answer: 1 },
    { question: "What type of rock is formed from molten magma?", options: ["Sedimentary", "Igneous", "Metamorphic", "Fossil"], answer: 1 },
    { question: "What is the study of living organisms called?", options: ["Chemistry", "Biology", "Physics", "Geology"], answer: 1 },
    { question: "What vitamin is produced when the skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
    { question: "Which organ is responsible for filtering blood in the human body?", options: ["Heart", "Liver", "Kidneys", "Lungs"], answer: 2 },
    { question: "What is the main gas found in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 1 },
    { question: "What is the scientific name for the common cold virus?", options: ["Rhinovirus", "Influenza", "Coronovirus", "HIV"], answer: 0 },
    { question: "What part of a plant is responsible for reproduction?", options: ["Roots", "Stems", "Leaves", "Flowers"], answer: 3 },
    { question: "What is the main component of the cell membrane?", options: ["DNA", "RNA", "Proteins", "Phospholipids"], answer: 3 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: 2 },
    { question: "What is the process of cell division called?", options: ["Mitosis", "Meiosis", "Binary fission", "Cellular respiration"], answer: 0 },
    { question: "What is the unit of measure for energy?", options: ["Joule", "Newton", "Pascal", "Watt"], answer: 0 },
    { question: "What type of wave is sound?", options: ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Surface wave"], answer: 1 },
    { question: "What element does 'O' represent in the periodic table?", options: ["Osmium", "Oxygen", "Oganesson", "Oganesson"], answer: 1 },
    { question: "Which of the following is not a type of simple machine?", options: ["Lever", "Wheel and axle", "Pulley", "Engine"], answer: 3 },
    { question: "What is the primary function of chlorophyll in plants?", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], answer: 1 },
    { question: "Which part of the eye is responsible for focusing light?", options: ["Lens", "Cornea", "Retina", "Pupil"], answer: 0 },
    { question: "What type of bond is formed when electrons are transferred from one atom to another?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: 0 },
    { question: "What is the term for a solution that has more solute than it can hold at a given temperature?", options: ["Saturated", "Unsaturated", "Supersaturated", "Concentrated"], answer: 2 },
    { question: "What is the main function of the leaves in plants?", options: ["Absorption of water", "Photosynthesis", "Reproduction", "Storage"], answer: 1 },
    { question: "Which of the following is a product of photosynthesis?", options: ["Glucose", "Oxygen", "Carbon Dioxide", "Both A and B"], answer: 3 },
    { question: "What type of reaction releases energy?", options: ["Exothermic", "Endothermic", "Chemical", "Physical"], answer: 0 },
    { question: "What is the force of attraction between objects due to their mass?", options: ["Friction", "Gravity", "Tension", "Magnetism"], answer: 1 },
    { question: "What is the primary purpose of the respiratory system?", options: ["Transport oxygen", "Remove carbon dioxide", "Provide nutrients", "Regulate body temperature"], answer: 0 },
    { question: "Which of the following is a feature of a living organism?", options: ["Growth", "Reproduction", "Metabolism", "All of the above"], answer: 3 },
    { question: "Which gas is responsible for the greenhouse effect?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What type of energy is associated with the motion of an object?", options: ["Potential Energy", "Kinetic Energy", "Thermal Energy", "Chemical Energy"], answer: 1 },
    { question: "What is the main purpose of the digestive system?", options: ["Transport nutrients", "Absorb water", "Break down food", "Regulate hormones"], answer: 2 }
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
