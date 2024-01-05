let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < board.length; i++) {
        document.getElementById(i).innerHTML = '';
    }
    turn = 'X';
}

function makeMove(index) {
    if (board[index] === '') {
        board[index] = turn;
        document.getElementById(index).innerHTML = turn;
        if (checkWin()) {
            setTimeout(function() {
                alert(turn + ' wins!');
                resetBoard();
            }, 100);
            return;
        } else if (checkDraw()) {
            setTimeout(function() {
                alert('Draw!');
                resetBoard();
            }, 100);
            return;
        }
        turn = turn === 'X' ? 'O' : 'X';
    }
}
function checkWin() {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        if (board[condition[0]] !== '' &&
            board[condition[0]] === board[condition[1]] &&
            board[condition[1]] === board[condition[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '') && !checkWin();
}