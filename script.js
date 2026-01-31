
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

const blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    if (gameBoard.board[index] == "") {
      gameBoard.placeMark(index, currentPlayer.marker);

      e.target.textContent = currentPlayer.marker;

      e.target.style.fontSize = "48px";
      e.target.style.display = "flex";
      e.target.style.justifyContent = "center";
      e.target.style.alignItems = "center";

      switchTurn();
    }
  });
});

const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

//const win = 

// const playButton = document.querySelector(".play-button"); --> Not used currently

const gameFlow = {

}

