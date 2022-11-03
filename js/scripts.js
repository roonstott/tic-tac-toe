// [ 0, 1, 2,]
// [ 3, 4, 5,]
// [ 6, 7, 8,]

// Buisness Logic

function Player(mark, turn) {
    this.mark = mark;
    this.turn = turn;
    this.clicks = [6, 3, 1, 0, 5];
}



Player.prototype.amIWinner = function () {
    let clicks = this.clicks
    let message;
    winningCombos.forEach(function (winCombo) {
        let counter = 0;
        winCombo.forEach(function (winDigit) {
            if (clicks.includes(winDigit)) {
                counter += 1;
            }
        })
        if (counter === 3) {
            message = "You're a winner!";
        }
    })
    return message;
}



function didIDraw() {
    let totalClicks = playerOne.clicks.length + playerTwo.clicks.length
    if (totalClicks === 9) {
        console.log('draw');
    }
}


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

const playerOneClicks = [];
const playerTwoClicks = [];


// function loopWinner() {
//     let win = winningCombo;
//     playerOneClicks.forEach(win) {
//         if (playerOneClicks.includes(win)) {

//         }

//     }
// }







let playerOne = new Player("X");
let playerTwo = new Player("O");





//User Interface Logic


//Code For Testing
// console.log(playerTwo.mark);
// console.log(winningCombo[4]);
// console.log(playerOne.amIWinner());
console.log(didIDraw());