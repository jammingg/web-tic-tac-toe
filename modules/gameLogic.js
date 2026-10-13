

class GameLogic {
    constructor(gameBoard){
        this.gameBoard = gameBoard;
        this.currentPlayer = "X";
        this.gemeOver = false;
        this.turnCount = 0;
    }

    makeMove(row, col){
        if (this.gameOver) return;
        
        if (this.gameBoard.board[row][col] === null){
            this.gameBoard.updateCell(row, col, this.currentPlayer);
            this.gameBoard.renderBoard('game-container');

            if (this.checkForWin()){
                this.gameOver = true;
                alert(`Player ${this.currentPlayer} wins!`);
            } else if (this.checkForDraw()){
                this.gameOver = true;
                alert("It's a draw!");
            } else {
                this.switchPlayer();
                this.turnCount++;
            }

        }
    }

    checkForWin() {
        // ---
        for (let r = 0; r < this.gameBoard.rows; r++){
            if (this.checkLine(this.gameBoard.board[r][0], this.gameBoard.board[r][1], this.gameBoard.board[r][2])){
                return true;
            }
        }
        // |||
        for (let c = 0; c < this.gameBoard.rows; c++){
            if (this.checkLine(this.gameBoard.board[0][c], this.gameBoard.board[1][c], this.gameBoard.board[2][c])){
                return true;
            }
        }
        // \
        if (this.checkLine(this.gameBoard.board[0][0], this.gameBoard.board[1][1], this.gameBoard.board[2][2])){
            return true;
        }
        // /
        if (this.checkLine(this.gameBoard.board[0][2], this.gameBoard.board[1][1], this.gameBoard.board[2][0])){
            return true;
        }


    }

    checkLine(a, b, c){
        return a !== null && a == b && a == c;
    }


    checkForDraw(){
        if (this.turnCount >= 9) return true;

        return false;
    }

    switchPlayer(){
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X" ;
    }

   
}

export default GameLogic;