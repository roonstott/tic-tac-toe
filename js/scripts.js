// Buisness Logic

function Player(turn, name) {
    this.turn = turn;
    this.clicks = [];
    this.name = name;
}

let Game = {
    winningCombos: [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a1", "b2", "c3"],
        ["a3", "b2", "c1"],
        ["a3", "b3", "c3"]
    ],
    gameOver: false
}

let playerOne = new Player(true, "Player One");
let playerTwo = new Player(false, "Player Two");

Player.prototype.changeTurn = function () {
    let turn = this.turn
    if (turn === true) {
        turn = false;
    } else if (turn === false) {
        turn = true;
    }
    this.turn = turn;
}

Player.prototype.amIWinner = function () {
    let clicks = this.clicks;
    let winStatus = false;
    let winKey = Game.winningCombos;
    for (i=0; i<winKey.length; i++) {
        let winCombo = winKey[i];
        for (i=0; i<winCombo.length; i++) {
            let winDigit = winCombo[i];
            let counter = 0;
            
            if (clicks.includes(winDigit)) {
                counter += 1;
            } 
            
            if (counter === 3) {
                winStatus = true;
            }
        }
    }
    return winStatus;
}

function didIDraw() {
    let totalClicks = playerOne.clicks.length + playerTwo.clicks.length;
    if (totalClicks === 9) {
        return true;
    } else {
        return false;
    }
}

//User Interface Logic

window.addEventListener("load", function () {

    const cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.addEventListener("click", cellClick)});
    document.querySelector('.btn-reset').addEventListener("click", function() {
        window.location.reload();
    })
})

function cellClick (event) {
   if (Game.gameOver) {
    return false
    } else {
    let player;

    if (playerOne.turn) {
        player = playerOne;
    } else {
        player = playerTwo;
    }

    player.clicks.push(event.target.id);

    let cell = document.getElementById(event.target.id);

    if (playerOne.turn === true) {
        cell.innerHTML="X"
    } else {
        cell.innerHTML="O"
    }

    let result = gameStatus();
    document.getElementById("outcomeMessage").innerHTML = result;
    playerOne.changeTurn();
    playerTwo.changeTurn();
    }
}
    
function gameStatus() {
    console.log(playerOne) 
    console.log(playerTwo)
    if (didIDraw()) {
        Game.gameOver = true
        return "The Game Is A Draw"
    } else if (playerOne.amIWinner()) {
        Game.gameOver = true
        return "Congratulations Player One! You won!";
    } else if (playerTwo.amIWinner()) {
        return "Congratulations Player Two! YOu won!"
    }
    else {
        return " ";
    }
};