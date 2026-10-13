
class GameBoard{
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    renderBoard(containerID) {
        const container = document.getElementById(containerID);
        container.innerHTML = '';   // clean table

        const table = document.createElement("table");
        table.classList.add("game-board");

        for (let r = 0; r < this.rows; r++) {
            const row = document.createElement("tr");
            for (let c = 0; c < this.cols; c++){
                const cell = document.createElement("td");
                cell.textContent = this.board[r][c] || '';
                cell.dataset.row = r;
                cell.dataset.col = c;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        container.appendChild(table);
    }

    updateCell(row, col, value) {
        this.board[row][col] = value; 
    }
}


export default GameBoard;