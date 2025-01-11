const chessboard = document.querySelector(".chessboard");

const CHESSBOARD_SIZE = 8;

for (let i = 0; i < CHESSBOARD_SIZE * CHESSBOARD_SIZE; i++) {
  const cell = document.createElement("div");

  const isBlack = i % 2 === Math.floor(i / CHESSBOARD_SIZE) % 2;

  cell.style.backgroundColor = isBlack ? "black" : "white";

  chessboard.appendChild(cell);
}
