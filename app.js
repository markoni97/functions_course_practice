const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPLayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const number = Math.random();
    if(number < 0.34){
        return ROCK;
    } else if(number < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (pChoice, cChoice) => {
    if(pChoice === cChoice){
        return RESULT_DRAW;
    } else if(
        pChoice === ROCK && cChoice === SCISSORS ||
        pChoice === PAPER && cChoice === ROCK ||
        pChoice === SCISSORS && cChoice === PAPER){
            return RESULT_PLAYER_WINS;
        } else{
            return RESULT_COMPUTER_WINS;
        }
};

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting..')
    const playerSelection = getPLayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerSelection} and therefore you `;
    if(winner === RESULT_DRAW){
        message = message + 'had a draw';
    } else if(winner === RESULT_PLAYER_WINS){
        message = message + 'wone';
    } else {
        message = message + 'lost';
    }

    alert(message);
    gameIsRunning = false;
});