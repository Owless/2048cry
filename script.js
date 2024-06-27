document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 4;
    const board = document.getElementById('board');
    let tiles = [];

    function createBoard() {
        for (let i = 0; i < boardSize * boardSize; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            board.appendChild(tile);
            tiles.push(tile);
        }
        generateRandomTile();
        generateRandomTile();
    }

    function generateRandomTile() {
        let randomIndex = Math.floor(Math.random() * tiles.length);
        while (tiles[randomIndex].innerHTML !== '') {
            randomIndex = Math.floor(Math.random() * tiles.length);
        }
        tiles[randomIndex].innerHTML = 2;
        tiles[randomIndex].style.background = '#eee4da';
    }

    createBoard();
});
