'use strict'

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scorePlayerOneEl = document.getElementById('score--0');
const scorePlayerTwoEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentPlayerOne = document.getElementById('current--0');
const currentPlayerTwo = document.getElementById('current--1');

let playerOneScore = 0;
let playerTwoScore = 0;


const rollDice = () => {

    // Info del dado
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    console.log(dice);
    // Cual jugador esta activo
    const activePlayer = playerOne.classList.contains('player--active')

    if (activePlayer) {
        if (dice !== 1) {
            playerOneScore += dice;
            currentPlayerOne.textContent = dice;
            scorePlayerOneEl.textContent = playerOneScore;

            if (playerOneScore >= 50) {
                playerOne.classList.add('player--winner');
                diceEl.classList.add('hidden')
                btnRoll.disabled = true;
                btnHold.disabled = true;
            }
        } else {
            playerOneScore = 0;
            scorePlayerOneEl.textContent = playerOneScore;
            currentPlayerOne.textContent = 0;
            playerOne.classList.remove('player--active')
            playerTwo.classList.add('player--active')
        }
    } else {
        if (dice !== 1) {
            playerTwoScore += dice;
            currentPlayerTwo.textContent = dice;
            scorePlayerTwoEl.textContent = playerTwoScore;

            if (playerTwoScore >= 50) {
                playerTwo.classList.add('player--winner');
                diceEl.classList.add('hidden')
                btnRoll.disabled = true;
                btnHold.disabled = true;
            }
        } else {
            playerTwoScore = 0;
            scorePlayerTwoEl.textContent = playerTwoScore;
            currentPlayerTwo.textContent = 0;
            playerTwo.classList.remove('player--active')
            playerOne.classList.add('player--active')
        }
    }
}

const holdScore = () => {
    const activePlayer = playerOne.classList.contains('player--active')

    if (activePlayer) {
        currentPlayerOne.textContent = 0;
        playerOne.classList.remove('player--active')
        playerTwo.classList.add('player--active')
    } else {
        currentPlayerTwo.textContent = 0;
        playerTwo.classList.remove('player--active')
        playerOne.classList.add('player--active')
    }
}

const newGame = () => {
    diceEl.classList.add('hidden')
    playerOneScore = 0;
    playerTwoScore = 0;
    scorePlayerOneEl.textContent = playerOneScore;
    scorePlayerTwoEl.textContent = playerTwoScore;
    currentPlayerOne.textContent = 0;
    currentPlayerTwo.textContent = 0;
    playerTwo.classList.remove('player--active')
    playerOne.classList.add('player--active')
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    btnRoll.disabled = false;
    btnHold.disabled = false;
}

btnRoll.addEventListener('click', rollDice)
btnHold.addEventListener('click', holdScore)
btnNew.addEventListener('click', newGame)

newGame();