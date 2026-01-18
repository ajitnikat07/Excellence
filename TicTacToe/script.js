// Game state - Simple variables
let board = ['', '', '', '', '', '', '', '', '']; // 9 empty cells (0-8)
let currentPlayer = 'X'; // X plays first
let gameActive = true; // Is the game still running?

// All winning combinations (8 ways to win)
const winCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Anti-diagonal
];

// Player clicks a cell
function play(index) {
    // If cell is already taken or game is over, do nothing
    if (board[index] !== '' || !gameActive) {
        return;
    }

    // Place player's symbol in the cell
    board[index] = currentPlayer;
    
    // Update cell on screen
    document.querySelectorAll('.cell')[index].textContent = currentPlayer;

    // Check if someone won or if it's a draw
    if (checkWin()) {
        document.getElementById('status').textContent = 'Player ' + currentPlayer + ' Wins! 🎉';
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        document.getElementById('status').textContent = 'It\'s a Draw! 🤝';
        gameActive = false;
        return;
    }

    // Switch player (X to O or O to X)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = 'Player ' + currentPlayer + '\'s Turn';
}

// Check if current player won
function checkWin() {
    // Check each winning combination
    for (let combo of winCombinations) {
        const [a, b, c] = combo;
        
        // If all three cells in the combo have the same symbol, someone won
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true;
        }
    }
    return false;
}

// Check if the board is full (draw)
function checkDraw() {
    // If no empty cells left and no winner, it's a draw
    return !board.includes('');
}

// Reset the game
function resetGame() {
    // Empty the board
    board = ['', '', '', '', '', '', '', '', ''];
    
    // Reset player to X
    currentPlayer = 'X';
    
    // Game is active again
    gameActive = true;
    
    // Update display
    document.getElementById('status').textContent = 'Player X\'s Turn';
    
    // Clear all cells
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}