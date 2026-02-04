const playButton = document.querySelector(".play-button");
const resetButton = document.querySelector(".reset-button");
resetButton.style.display = "none";

const title = document.querySelector(".title");
const winMessage = document.querySelector(".win-message");
const gameGrid = document.querySelector("#grid");
gameGrid.style.display = "none";

const gameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],
  placeMark: function (position, marker) {
    this.board[position] = marker;
  },
};

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
}

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

      if (win()) {
        switchTurn();
        winMessage.textContent = `${currentPlayer.name} wins!`;

        return;
      } else if (!gameBoard.board.includes("")) {
        winMessage.textContent = "It's a tie!";
      }
    }
  });
});

const winConditions = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const win = () => {
  for (let condition of winConditions) {
    const [a, b, c] = condition;

    const squareA = gameBoard.board[a];
    const squareB = gameBoard.board[b];
    const squareC = gameBoard.board[c];

    if (squareA === "") continue;

    if (squareA === squareB && squareA === squareC) {
      return true;
    }
  }
};

const gameReset = () => {
  gameBoard.board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = player1;

  // Clear content
  blocks.forEach((block) => {
    block.textContent = "";
  });

  winMessage.textContent = "";
};

resetButton.addEventListener("click", () => gameReset());

playButton.addEventListener("click", () => {
  gameGrid.style.opacity = "0";
  gameGrid.style.display = "grid";
  gameGrid.style.transition = "opacity 0.5s ease-in-out";
  // Force reflow to ensure the transition is applied
  void gameGrid.offsetWidth;
  gameGrid.style.opacity = "1";

  playButton.style.display = "none";
  title.textContent = "Tic Tac Toe";
  resetButton.style.display = "inline-block";
});
