let gridSize = 16;
let randomColorMode = false;
let progressiveDarkeningMode = false;


const gridContainer = document.querySelector('#grid-container');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);
addEventListener('keydown', (e) => {
    e.key === 'r' ? resetGrid() : void (0);
});


const gridSizeButton = document.querySelector('#gridSize');
gridSizeButton.addEventListener('click', changeGridSize);
addEventListener('keydown', (e) => {
    e.key === 'c' ? changeGridSize() : void (0);
});

const trailColorButton = document.querySelector('#color');
trailColorButton.addEventListener('click', toggleTrailColor);
addEventListener('keydown', (e) => {
    e.key === 't' ? toggleTrailColor() : void (0);
});

const progressiveDarkeningButton = document.querySelector('#progressive-darkening');
progressiveDarkeningButton.addEventListener('click', toggleProgressiveDarkening);
addEventListener('keydown', (e) => {
    e.key === 'p' ? toggleProgressiveDarkening() : void (0);
});


initializeGrid();







function toggleTrailColor() {
    randomColorMode = !randomColorMode;
}

function toggleProgressiveDarkening() {
    progressiveDarkeningMode = !progressiveDarkeningMode;
}



function initializeGrid() {

    for (i = 0; i < gridSize * gridSize; i++) {
        const sqrDiv = document.createElement('div');
        sqrDiv.className = 'square-div';
        gridContainer.appendChild(sqrDiv);
        
        sqrDiv.addEventListener('mouseenter', () => {
            if (randomColorMode) {
                let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                sqrDiv.style.backgroundColor = randomColor;
            }
            
            else {
                if (progressiveDarkeningMode === true && !sqrDiv.style.backgroundColor) {
                    sqrDiv.style.backgroundColor = "#909090";
                }

                else if (progressiveDarkeningMode === true && sqrDiv.style.backgroundColor) {
                    let newColor = updateColor(sqrDiv.style.backgroundColor);
                    sqrDiv.style.backgroundColor = newColor;
                }

                else {
                    sqrDiv.style.backgroundColor = 'black';
                }
            }
        })
    }
    const classSquareDiv = document.getElementsByClassName('square-div');
    for (i = 0; i < classSquareDiv.length; i++) {
        classSquareDiv[i].style.cssText = `height: ${960 / gridSize}px; flex: 0 0 ${960 / gridSize}px`;
    }
}


function updateColor(rgbColor) {
    rgbArr = rgbColor.substring(4, rgbColor.length - 1).replace(/ /g, '').split(',');

    for (i = 0; i < 3; i++) {
        rgbArr[i] = parseInt(rgbArr[i]) - 20;
    }

    return (`rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`);
}


function changeGridSize() {
    let exitPrompt = 0; // 0=stay in prompt loop | 1=cancel | 2=proceed with function
    let promptInputValue = 0;
    while (exitPrompt == 0) {
        promptInput = prompt('Type the number (<=100) of squares for each side of the grid');
        promptInputValue = parseInt(promptInput);
        if (promptInput === null) {
            exitPrompt = 1;
        }
        else if (promptInputValue <= 100) {
            exitPrompt = 2;
            gridSize = promptInputValue;
        }
    }

    switch (exitPrompt) {
        case 1: {
            void (0);
        }
        case 2: {
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
            initializeGrid();
        }
    }
}


function resetGrid() {
    const allSquares = document.querySelectorAll('.square-div');

    allSquares.forEach((square) => {
        square.style.backgroundColor = '';
    })
}
