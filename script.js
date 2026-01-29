
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

gameBoard.placeMark(4, currentPlayer.marker);

const blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    if (gameBoard.board[index] == "") {
      gameBoard.placeMark(index, currentPlayer.marker);

      e.target.textContent = currentPlayer.marker;

      switchTurn();
    }
  });
});

// const playButton = document.querySelector(".play-button"); --> Not used currently

const gameFlow = {

}

