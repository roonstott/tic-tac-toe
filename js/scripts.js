// [ 0, 1, 2,]
// [ 3, 4, 5,]
// [ 6, 7, 8,]

// Buisness Logic

function Player(mark, turn) {
    this.mark = mark;
    this.turn = turn;
    this.clicks = [];
}



Player.prototype.changeTurn = function () {
    let turn = this.turn
    if (turn === true) {
        turn = false;
    } else if (turn === false) {
        turn = true;
    }
    this.turn = turn;
}


Player.prototype.amIWinner = function (player) {
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
            message = "Congratulations" + player + "You're a winner!";
        }
    })
    return message;
}

let playerOne = new Player("🤓", true);
let playerTwo = new Player("😎", false);

function didIDraw() {
    let totalClicks = playerOne.clicks.length + playerTwo.clicks.length
    if (totalClicks === 10) {
        console.log('draw');
    }
}


const winningCombos = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"],
    ["a3", "b3", "c3"]
]

//User Interface Logic


window.addEventListener("load", function () {

    const cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.addEventListener("click", cellClick)});




    document.querySelector('.btn-reset').addEventListener("click", function () {
        window.location.reload();
    });
    
    

});


function cellClick (event) {
   let cell = document.getElementById(event.target.id);
   let player; 
   if (playerOne.turn === true) {
    player = playerOne;
   } else {
    player = playerTwo;
   }
   player.clicks.push(event.target.id);
   if (playerOne.turn === true) {
    cell.innerHTML="😎"
   } else {
    cell.innerHTML="🤓"
   }
   console.log(player.amIWinner(player));
   playerOne.changeTurn();
   playerTwo.changeTurn();

}
    