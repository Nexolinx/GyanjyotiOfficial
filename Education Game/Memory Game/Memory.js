const gameGrid = document.getElementById('game-grid');
const movesDisplay = document.getElementById('moves');
const scoreDisplay = document.getElementById('score');
const difficultySelect = document.getElementById('difficulty');
const newGameButton = document.getElementById('new-game');

const images = [
    'img/angular.svg',
    'img/ember.svg',
    'img/react.svg',
    'img/vue.svg',
    'img/aurelia.svg',
    'img/backbone.svg',
];

let cards = [];
let flippedCards = [];
let moves = 0;
let score = 0;

function createCard(imageSrc) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-front"><img src="${imageSrc}" alt="Images"></div>
        <div class="card-back"></div>
    `;
    card.addEventListener('click', flipCard);
    return card;
}

function initializeGame() {
    gameGrid.innerHTML = '';
    cards = [];
    flippedCards = [];
    moves = 0;
    score = 0;
    updateStats();

    const difficulty = difficultySelect.value;
    const pairs = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 6;
    const gameImages = images.slice(0, pairs);

    const allCards = [...gameImages, ...gameImages];
    allCards.sort(() => Math.random() - 0.5);

    allCards.forEach(imageSrc => {
        const card = createCard(imageSrc);
        cards.push(card);
        gameGrid.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        updateStats();
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const image1 = card1.querySelector('.card-front img').src;
    const image2 = card2.querySelector('.card-front img').src;

    if (image1 === image2) {
        score += 10;
        flippedCards = [];
        updateStats();
        checkForWin();
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function checkForWin() {
    if (cards.every(card => card.classList.contains('flipped'))) {
        setTimeout(() => {
            alert(`Congratulations! You won!\nMoves: ${moves}\nScore: ${score}`);
        }, 500);
    }
}

function updateStats() {
    movesDisplay.textContent = moves;
    scoreDisplay.textContent = score;
}

newGameButton.addEventListener('click', initializeGame);
difficultySelect.addEventListener('change', initializeGame);

initializeGame();
