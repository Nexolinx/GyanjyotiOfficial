const questions = [
    {
        question: "Transform the sentence to indirect speech: 'He said, 'I am happy.'",
        options: [
            "He said that he is happy.",
            "He said that he was happy.",
            "He says that he is happy.",
            "He told that he was happy."
        ],
        answer: 1 
    },
    {
        question: "Change to passive voice: 'The teacher explains the lesson.'",
        options: [
            "The lesson is explained by the teacher.",
            "The lesson was explained by the teacher.",
            "The lesson has been explained by the teacher.",
            "The lesson will be explained by the teacher."
        ],
        answer: 0
    },
    {
        question: "Transform the sentence: 'She can swim.' to its negative form.",
        options: [
            "She can not swim.",
            "She cannot swim.",
            "She does not swim.",
            "She is not able to swim."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'He asked, 'Are you coming to the party?''",
        options: [
            "He asked if I am coming to the party.",
            "He asked if I was coming to the party.",
            "He asked whether I am coming to the party.",
            "He asked whether I was coming to the party."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'They will complete the project.'",
        options: [
            "The project is completed by them.",
            "The project will be completed by them.",
            "The project was completed by them.",
            "The project has been completed by them."
        ],
        answer: 1
    },
    {
        question: "Transform to direct speech: He said that he would help us.",
        options: [
            "He said, 'I will help you.'",
            "He said, 'I would help you.'",
            "He said, 'He will help us.'",
            "He said, 'I help you.'"
        ],
        answer: 0
    },
    {
        question: "Convert to passive voice: 'The dog chased the cat.'",
        options: [
            "The cat is chased by the dog.",
            "The cat was chased by the dog.",
            "The cat has been chased by the dog.",
            "The cat will be chased by the dog."
        ],
        answer: 0
    },
    {
        question: "Transform the sentence to indirect speech: 'She said, 'I can dance.'",
        options: [
            "She said that she can dance.",
            "She said that she could dance.",
            "She says that she can dance.",
            "She told that she can dance."
        ],
        answer: 1
    },
    {
        question: "Change the sentence: 'He does not like ice cream.' to affirmative.",
        options: [
            "He like ice cream.",
            "He likes ice cream.",
            "He does like ice cream.",
            "He did not like ice cream."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'She said, 'I am tired.''",
        options: [
            "She said that she is tired.",
            "She said that she was tired.",
            "She said she is tired.",
            "She told that she is tired."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The committee will review the proposal.'",
        options: [
            "The proposal is reviewed by the committee.",
            "The proposal will be reviewed by the committee.",
            "The proposal was reviewed by the committee.",
            "The proposal has been reviewed by the committee."
        ],
        answer: 1
    },
    {
        question: "Transform to direct speech: She said that she was going to school.",
        options: [
            "She said, 'I am going to school.'",
            "She said, 'I was going to school.'",
            "She said, 'I will go to school.'",
            "She said, 'She was going to school.'"
        ],
        answer: 0
    },
    {
        question: "Change the sentence to passive voice: 'The children are playing soccer.'",
        options: [
            "Soccer is played by the children.",
            "Soccer was played by the children.",
            "Soccer will be played by the children.",
            "Soccer is being played by the children."
        ],
        answer: 3
    },
    {
        question: "Transform the sentence: 'I will call you.' to negative.",
        options: [
            "I will not call you.",
            "I do not call you.",
            "I am not calling you.",
            "I called you."
        ],
        answer: 0
    },
    {
        question: "Convert to reported speech: 'He said, 'I am watching TV.''",
        options: [
            "He said that he is watching TV.",
            "He said that he was watching TV.",
            "He said he was watching TV.",
            "He told that he is watching TV."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The gardener waters the plants.'",
        options: [
            "The plants are watered by the gardener.",
            "The plants will be watered by the gardener.",
            "The plants were watered by the gardener.",
            "The plants have been watered by the gardener."
        ],
        answer: 0
    },
    {
        question: "Transform the sentence to indirect speech: 'John said, 'I will be there soon.''",
        options: [
            "John said that he will be there soon.",
            "John said that he would be there soon.",
            "John says that he will be there soon.",
            "John told that he would be there soon."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The manager will announce the results.'",
        options: [
            "The results are announced by the manager.",
            "The results were announced by the manager.",
            "The results will be announced by the manager.",
            "The results have been announced by the manager."
        ],
        answer: 2
    },
    {
        question: "Convert to reported speech: 'She asked, 'Do you want to join us?''",
        options: [
            "She asked if I want to join them.",
            "She asked whether I want to join them.",
            "She asked if I wanted to join them.",
            "She asked whether I wanted to join them."
        ],
        answer: 2
    },
    {
        question: "Transform the sentence: 'They are playing cricket.' to negative.",
        options: [
            "They are not playing cricket.",
            "They do not play cricket.",
            "They did not play cricket.",
            "They are not play cricket."
        ],
        answer: 0
    },
    {
        question: "Change to passive voice: 'The cat chased the mouse.'",
        options: [
            "The mouse was chased by the cat.",
            "The mouse is chased by the cat.",
            "The mouse has been chased by the cat.",
            "The mouse will be chased by the cat."
        ],
        answer: 0
    },
    {
        question: "Transform to direct speech: She told me that she had finished her homework.",
        options: [
            "She said, 'I finished my homework.'",
            "She said, 'I have finished my homework.'",
            "She said, 'I had finished my homework.'",
            "She said, 'I finish my homework.'"
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'They built a new school.'",
        options: [
            "A new school is built by them.",
            "A new school was built by them.",
            "A new school will be built by them.",
            "A new school has been built by them."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'He said, 'I am going to the gym.''",
        options: [
            "He said that he is going to the gym.",
            "He said that he was going to the gym.",
            "He told that he is going to the gym.",
            "He said he is going to the gym."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence: 'She plays the piano.' to negative.",
        options: [
            "She does not play the piano.",
            "She is not playing the piano.",
            "She played the piano.",
            "She will not play the piano."
        ],
        answer: 0
    },
    {
        question: "Change to passive voice: 'The children ate the cake.'",
        options: [
            "The cake is eaten by the children.",
            "The cake was eaten by the children.",
            "The cake has been eaten by the children.",
            "The cake will be eaten by the children."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'They asked, 'Can you help us?''",
        options: [
            "They asked if I can help them.",
            "They asked whether I could help them.",
            "They asked if you can help them.",
            "They asked whether you could help them."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence to indirect speech: 'The teacher said, 'You must study harder.''",
        options: [
            "The teacher said that I must study harder.",
            "The teacher said that I had to study harder.",
            "The teacher told that you must study harder.",
            "The teacher told that I must study harder."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The scientist discovered a new planet.'",
        options: [
            "A new planet is discovered by the scientist.",
            "A new planet was discovered by the scientist.",
            "A new planet will be discovered by the scientist.",
            "A new planet has been discovered by the scientist."
        ],
        answer: 1
    },
    {
        question: "Transform to indirect speech: 'He said, 'I will visit you tomorrow.'",
        options: [
            "He said that he will visit me tomorrow.",
            "He said that he would visit me tomorrow.",
            "He says that he will visit me tomorrow.",
            "He told that he will visit me tomorrow."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The chef cooks a delicious meal.'",
        options: [
            "A delicious meal is cooked by the chef.",
            "A delicious meal was cooked by the chef.",
            "A delicious meal has been cooked by the chef.",
            "A delicious meal will be cooked by the chef."
        ],
        answer: 0
    },
    {
        question: "Transform the sentence: 'They can play the guitar.' to negative.",
        options: [
            "They cannot play the guitar.",
            "They do not play the guitar.",
            "They did not play the guitar.",
            "They are not able to play the guitar."
        ],
        answer: 0
    },
    {
        question: "Convert to reported speech: 'He asked, 'Are you ready?''",
        options: [
            "He asked if I am ready.",
            "He asked if I was ready.",
            "He asked whether I am ready.",
            "He asked whether I was ready."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The students will present their projects.'",
        options: [
            "The projects are presented by the students.",
            "The projects will be presented by the students.",
            "The projects were presented by the students.",
            "The projects have been presented by the students."
        ],
        answer: 1
    },
    {
        question: "Transform to direct speech: She said that she was studying.",
        options: [
            "She said, 'I am studying.'",
            "She said, 'I study.'",
            "She said, 'I was studying.'",
            "She said, 'I will study.'"
        ],
        answer: 0
    },
    {
        question: "Convert to passive voice: 'The team won the championship.'",
        options: [
            "The championship is won by the team.",
            "The championship was won by the team.",
            "The championship will be won by the team.",
            "The championship has been won by the team."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence to indirect speech: 'She said, 'I will call you later.''",
        options: [
            "She said that she would call me later.",
            "She said that she will call me later.",
            "She told that she would call me later.",
            "She said that she is going to call me later."
        ],
        answer: 0
    },
    {
        question: "Change the sentence: 'He does not eat meat.' to affirmative.",
        options: [
            "He eat meat.",
            "He eats meat.",
            "He did eat meat.",
            "He is eating meat."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'They said, 'We are coming to the party.''",
        options: [
            "They said that they are coming to the party.",
            "They said that they were coming to the party.",
            "They told that they were coming to the party.",
            "They said they are coming to the party."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The artist painted a beautiful portrait.'",
        options: [
            "A beautiful portrait is painted by the artist.",
            "A beautiful portrait was painted by the artist.",
            "A beautiful portrait will be painted by the artist.",
            "A beautiful portrait has been painted by the artist."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence: 'She will finish her homework.' to negative.",
        options: [
            "She will not finish her homework.",
            "She does not finish her homework.",
            "She did not finish her homework.",
            "She is not going to finish her homework."
        ],
        answer: 0
    },
    {
        question: "Change to passive voice: 'The principal will announce the results.'",
        options: [
            "The results are announced by the principal.",
            "The results were announced by the principal.",
            "The results will be announced by the principal.",
            "The results have been announced by the principal."
        ],
        answer: 2
    },
    {
        question: "Convert to reported speech: 'He said, 'I am learning Spanish.''",
        options: [
            "He said that he is learning Spanish.",
            "He said that he was learning Spanish.",
            "He said he was learning Spanish.",
            "He told that he is learning Spanish."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence: 'They are watching a movie.' to negative.",
        options: [
            "They are not watching a movie.",
            "They do not watch a movie.",
            "They did not watch a movie.",
            "They are not going to watch a movie."
        ],
        answer: 0
    },
    {
        question: "Change to passive voice: 'The teacher praised the students.'",
        options: [
            "The students are praised by the teacher.",
            "The students were praised by the teacher.",
            "The students will be praised by the teacher.",
            "The students have been praised by the teacher."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'She asked, 'Do you want some coffee?''",
        options: [
            "She asked if I want some coffee.",
            "She asked whether I wanted some coffee.",
            "She asked if I wanted some coffee.",
            "She asked whether I want some coffee."
        ],
        answer: 2
    },
    {
        question: "Transform to indirect speech: 'He said, 'I am leaving now.''",
        options: [
            "He said that he is leaving now.",
            "He said that he was leaving now.",
            "He told that he is leaving now.",
            "He said that he was leaving then."
        ],
        answer: 3
    },
    {
        question: "Change to passive voice: 'The company will launch a new product.'",
        options: [
            "A new product is launched by the company.",
            "A new product was launched by the company.",
            "A new product will be launched by the company.",
            "A new product has been launched by the company."
        ],
        answer: 2
    },
    {
        question: "Transform to direct speech: She told me that she would join the meeting.",
        options: [
            "She said, 'I will join the meeting.'",
            "She said, 'I would join the meeting.'",
            "She said, 'I join the meeting.'",
            "She said, 'I am going to join the meeting.'"
        ],
        answer: 0
    },
    {
        question: "Change the sentence to passive voice: 'The cat caught the mouse.'",
        options: [
            "The mouse is caught by the cat.",
            "The mouse was caught by the cat.",
            "The mouse will be caught by the cat.",
            "The mouse has been caught by the cat."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'They said, 'We will help you.''",
        options: [
            "They said that they will help me.",
            "They said that they would help me.",
            "They told that they would help me.",
            "They said they are going to help me."
        ],
        answer: 1
    },
    {
        question: "Transform the sentence to indirect speech: 'She said, 'I have finished my work.''",
        options: [
            "She said that she has finished her work.",
            "She said that she had finished her work.",
            "She told that she has finished her work.",
            "She said that she finished her work."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The audience applauded the performance.'",
        options: [
            "The performance is applauded by the audience.",
            "The performance was applauded by the audience.",
            "The performance will be applauded by the audience.",
            "The performance has been applauded by the audience."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'He asked, 'Can you play the piano?''",
        options: [
            "He asked if I can play the piano.",
            "He asked whether I could play the piano.",
            "He asked if I could play the piano.",
            "He asked whether you can play the piano."
        ],
        answer: 2
    },
    {
        question: "Transform the sentence: 'I will not forget this.' to affirmative.",
        options: [
            "I will forget this.",
            "I do not forget this.",
            "I forgot this.",
            "I will forget."
        ],
        answer: 0
    },
    {
        question: "Change to passive voice: 'The storm destroyed the house.'",
        options: [
            "The house is destroyed by the storm.",
            "The house was destroyed by the storm.",
            "The house will be destroyed by the storm.",
            "The house has been destroyed by the storm."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'She said, 'I will go to the market.''",
        options: [
            "She said that she will go to the market.",
            "She said that she would go to the market.",
            "She told that she will go to the market.",
            "She told that she would go to the market."
        ],
        answer: 1
    },
    {
        question: "Transform to indirect speech: 'He said, 'I am feeling unwell.''",
        options: [
            "He said that he is feeling unwell.",
            "He said that he was feeling unwell.",
            "He told that he is feeling unwell.",
            "He said that he was feeling sick."
        ],
        answer: 1
    },
    {
        question: "Change to passive voice: 'The gardener planted the flowers.'",
        options: [
            "The flowers are planted by the gardener.",
            "The flowers were planted by the gardener.",
            "The flowers will be planted by the gardener.",
            "The flowers have been planted by the gardener."
        ],
        answer: 1
    },
    {
        question: "Convert to reported speech: 'They said, 'We are going to the park.''",
        options: [
            "They said that they are going to the park.",
            "They said that they were going to the park.",
            "They told that they are going to the park.",
            "They said they will go to the park."
        ],
        answer: 1
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
