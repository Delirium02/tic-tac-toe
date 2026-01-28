
const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
    placeMark: function(position, marker) {
        this.board[position] = marker;
    }
}

const createPlayer = (name, marker) => {
  return {
    name: name,
    marker: marker,
  };
};

const player1 = createPlayer("Leo", "X");
const player2 = createPlayer("Opp", "O");

let currentPlayer = player1;

function switchTurn() {

  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
};

const gameFlow = {

}