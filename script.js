const gridContainer = document.querySelector('#grid-container');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);
addEventListener('keydown', (e) => {
    e.key === 'r' ? resetGrid() : void(0);
});


const gridSizeButton = document.querySelector('#gridSize');
gridSizeButton.addEventListener('click', changeGridSize);

let gridSize = 16;



for (i = 0; i < 256; i++) {
    const sqrDiv = document.createElement('div');
    sqrDiv.className = 'square-div';
    gridContainer.appendChild(sqrDiv);
    sqrDiv.addEventListener('mouseenter', () => {
        sqrDiv.style.backgroundColor = 'black';
    })
}


function changeGridSize() {
    gridSize = parseInt(prompt('Type the number (<=100) of squares for each side of the grid'));
    //falta: pegar o grid size, multiplicar X*X (pra saber quantos quadrados são) e preencher o grid
}


function resetGrid() {
    const allSquares = document.querySelectorAll('.square-div');

    allSquares.forEach((square) => {
        square.style.backgroundColor = '';
    })
}