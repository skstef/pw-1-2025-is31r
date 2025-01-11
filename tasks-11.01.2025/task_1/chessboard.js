const chessboard = document.querySelector("#chessboard");

const CHESSBOARD_SIZE = 8;

for (let i = 0; i < CHESSBOARD_SIZE; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < CHESSBOARD_SIZE; j++) {
    const cell = document.createElement("td");

    const isBlack = (i + j) % 2 === 1;

    cell.style.backgroundColor = isBlack ? "black" : "white";

    row.appendChild(cell);
  }

  chessboard.appendChild(row);
}
