import { words } from './words';

let score;

if (localStorage.getItem('userScore')) {
    score = JSON.parse(localStorage.getItem('userScore'));
} else {
    score = {
        numWins: 0,
        numLosses: 0,
        gameOver: false,
        gameStarted: true
    }
}

// game trackers
let word;
let correctGuesses = 0;
let timesWrong = 0;
let usedLetters = [];
let validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const hangStages = ['./images/phase_0.png', './images/phase_1.png', './images/phase_2.png', './images/phase_3.png', './images/phase_4.png', './images/phase_5.png', './images/phase_6.png'];

// the different update messages that can be displayed
const goodUpdates = ['Correct!', 'Nice!', 'Looking good...', 'Not bad!', 'Maybe you\'re a hero?', 'Yep that\'s in there...', 'Hang in there...', 'Keep it coming...', 'Maybe there\'s a chance...', 'Certified genius!', 'Someone knows their alphabet!', 'Are you cheating?', 'So you\'re saying there\'s a chance?', 'Mmhmm...', 'You\'re on the right track!'];
const badUpdates = ['Wrong!', 'Are you trying to lose?', 'Nice try...', 'Nope!', 'Poor guy...', 'Incorrect!', 'Maybe the next one?', 'Oops!', 'Is this a joke to you?', 'C\'mon man!', 'I don\'t like where this is going...', 'Maybe don\'t buy a lottery ticket today?', 'Do we need to go back to kindergarten?'];

// html elements

// below header
const messageArea = document.querySelector('.game-update'); // holds update messages
let updateMessage = document.querySelector('.game-update > p'); // gives user a message after input
let replay = document.createElement('p'); // displays when game is over; tells user what to do next

// play area
let image = document.querySelector('img'); // changes the state of the man
const incorrectArea = document.querySelector('.incorrect-letters'); // holds incorrect guesses

// word/input area
const wordArea = document.querySelector('.current-word'); // holds letters to the current word
let input = document.querySelector('input'); // the input area

// win tracker
let wins = document.querySelector('#wins');
let losses = document.querySelector('#losses');


// keeps page from refreshing after entering input
function handleSubmit() { e.preventDefault() }

// gets a random word
function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// loads a word onto screen
function playGame() {
    score.gameStarted = true;
    score.gameOver = false;
    localStorage.setItem('userScore', JSON.stringify(score));
    word = getWord();
    generateLetters();
}

// creates the letter blanks on the screen
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function generateLetters() {
    for (let i = 0; i < word.length; i++) {
        // create a letter
        const letter = document.createElement('div');
        letter.classList.add('letter');
        letter.classList.add(`${numbers[i]}`);

        // add a blank area for the letter and an underline
        const blank = document.createElement('div');
        const dash = document.createElement('img');
        dash.src = './images/blank_letter.png';

        // add to DOM
        letter.appendChild(blank);
        letter.appendChild(dash);
        wordArea.appendChild(letter);
    }
}

// listens for keyboard input and handles accordingly
window.addEventListener('keydown', (e) => {
    // if the game is over
    if (score.gameOver) { replayGame(); }
    // if a letter was pressed changed value of current input
    else if (validLetters.includes(e.key) || usedLetters.includes(e.key)) { input.value = e.key; }
    // if enter is pressed, submit the input value
    else if (e.key === 'Enter') { 
        e.preventDefault();
        handleInput();
    }
    else if (e.key === 'Backspace') { input.value = ''; }
});

// calls appropriate functions depending on the input
function handleInput() {
    score.gameStarted = false;
    let wordArry = Array.from(word);
    
    // if blank input do nothing
    if (input.value === '' || input.value === " ") { return; }
    // if already guessed
    else if (usedLetters.includes(input.value)) { 
        updateMessage.textContent = 'You already guessed that!'; 
        updateMessage.style.color = '#fff';
    }
    // if correct guess
    else if (wordArry.includes(input.value)) { correctGuess(wordArry); }
    // if incorrect guess
    else { incorrectGuess(); }
    
    updateBoard();
    // prompts user what to do next if game over
    if (score.gameOver) {
        replay.textContent = 'Enter any key to replay.'
        messageArea.appendChild(replay);
    }
    localStorage.setItem('userScore', JSON.stringify(score));
}

// if the user guessed correctly
function correctGuess(wordArry) {
    for (let i = 0; i < word.length; i++) {
        // fill in the blank wherever the letters match
        if (input.value === wordArry[i]) {
            let letter = document.querySelector(`.letter.${numbers[i]}`);
            letter.firstElementChild.textContent = input.value;
            correctGuesses++;
        }
    }
    updateMessage.textContent = goodUpdates[Math.floor(Math.random() * goodUpdates.length)];
    updateMessage.style.color = '#00ff00';
}

// if the user guessed incorrectly
function incorrectGuess() {
    timesWrong++;
    // change the image's stage
    image.src = hangStages[timesWrong];
    // add the incorrect guess to the proper area
    const incorrectLetter = document.createElement('div');
    incorrectLetter.textContent = input.value;
    incorrectArea.appendChild(incorrectLetter);

    updateMessage.textContent = badUpdates[Math.floor(Math.random() * badUpdates.length)];
    updateMessage.style.color = '#ff0000';
}

// update how the board looks and update some values
function updateBoard() {
    // add the most recent guess to usedLetters and removed it from valid letters
    usedLetters.push(input.value);
    validLetters = validLetters.filter(letter => letter !== input.value);

    input.value = '';

    // check if the game is over
    if (correctGuesses === word.length) {
        score.gameOver = true;
        playerWin();
    } else if (timesWrong === 6) {
        playerLose();
        score.gameOver = true;
    }
}

function playerWin() {
    updateMessage.textContent = 'Way to go! You win!';
    updateMessage.style.color = '#00ff00';
    score.numWins++;
    wins.textContent = `${score.numWins}`;
    localStorage.setItem('userScore', JSON.stringify(score));
}

function playerLose() {
    updateMessage.textContent = `Booo, you lost! The correct word was "${word}".`;
    updateMessage.style.color = '#ff0000';
    score.numLosses++;
    losses.textContent = `${score.numLosses}`;
    localStorage.setItem('userScore', JSON.stringify(score));
}

// resets everything necessary to start and play a new game
function replayGame() {
    score.gameStarted = true;
    score.gameOver = false;
    correctGuesses = 0;
    timesWrong = 0;
    image.src = hangStages[0];
    validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    usedLetters = [];
    updateMessage.textContent = 'Guess a letter!';
    updateMessage.style.color = '#fff';
    replay.textContent = '';
    wordArea.innerHTML = '';
    incorrectArea.innerHTML = '';
    localStorage.setItem('userScore', JSON.stringify(score));

    playGame();
}


wins.textContent = `${score.numWins}`;
losses.textContent = `${score.numLosses}`;

if (!score.gameStarted && !score.gameOver) {
    updateMessage.textContent = `Refreshing is cheating!`;
    updateMessage.style.color = '#ff0000';
    score.numLosses++;
    losses.textContent = `${score.numLosses}`;
    localStorage.setItem('userScore', JSON.stringify(score));
}

playGame();
