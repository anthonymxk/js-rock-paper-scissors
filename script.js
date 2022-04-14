// Win, lose, tie, and error messages.
// also establish variable to track wins
const win = 'Win'
const lose = 'Lose'
const tie = 'Tie'
const error = 'Error' // catch all/error msg

let winTracker = 0
let gameTracker = 0
let tieTracker = 0
let lossTracker = 0

// buttons
const rock = document.querySelector('#rockButton')
const paper = document.querySelector('#paperButton')
const scissors = document.querySelector('#scissorsButton')
// text values that will be updated
let lastRound = document.querySelector('#lastRound')
let runningScore = document.querySelector('#runningScore')

// computerPlay - randomly returns rock, paper, or scissors
function computerPlay() {
const options = ['rock', 'paper', 'scissors'];
return options[Math.floor(Math.random() * options.length)];
}

// simulateRound - simulates a single round of RPS
function simulateRound(userChoice) {
    computerChoice = computerPlay()
    gameTracker++
    switch (userChoice){
        // If user chooses rock
        case `rock`:
            if (computerChoice === 'rock') {
                lastRound.textContent = tie
                tieTracker++
                return tie
            }
            else if (computerChoice === 'paper') {
                lastRound.textContent = lose
                lossTracker++
                return lose
            }
            else if (computerChoice === 'scissors') {
                lastRound.textContent = win
                winTracker++
                return win
            }
        break;
        // If user chooses paper
        case `paper`:
            if (computerChoice === 'rock') {
                lastRound.textContent = win
                winTracker++
                return win
            }
            else if (computerChoice === 'paper') {
                lastRound.textContent = tie
                tieTracker++
                return tie
            }
            else if (computerChoice === 'scissors') {
                lastRound.textContent = lose
                lossTracker++
                return lose
            }
        break;
        // If user chooses scissors
        case `scissors`:
            if (computerChoice === 'rock') {
                lastRound.textContent = lose
                lossTracker++
                return lose
            }
            else if (computerChoice === 'paper') {
                lastRound.textContent = win
                winTracker++
                return win
            }
            else if (computerChoice === 'scissors') {
                lastRound.textContent = tie
                tieTracker++
                return tie
            }
        break;
        default: //if user somehow chooses none
            return error
    }
}

function updateRunningScore() {
    runningScore.textContent = `${winTracker} wins, ${tieTracker} draws, and ${lossTracker} losses out of ${gameTracker} games.`
}

rock.addEventListener("click", function() {
    simulateRound('rock')
    updateRunningScore()
})

paper.addEventListener("click", function() {
    simulateRound('paper')
    updateRunningScore()
})

scissors.addEventListener("click", function() {
    simulateRound('scissors')
    updateRunningScore()
})
