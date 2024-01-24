const gridContainer = document.querySelector('#grid-container');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

addEventListener('keydown', (e) => {
    e.key === 'r' ? resetGrid() : void(0);
});


for (i = 0; i < 256; i++) {
    const sqrDiv = document.createElement('div');
    sqrDiv.className = 'square-div';
    gridContainer.appendChild(sqrDiv);
    sqrDiv.addEventListener('mouseenter', () => {
        sqrDiv.style.backgroundColor = 'black';
    })
}

function resetGrid() {
    const allSquares = document.querySelectorAll('.square-div');

    allSquares.forEach((square) => {
        square.style.backgroundColor = '';
    })
}