const gridContainer = document.querySelector('#grid-container');

for (i = 0; i < 256; i++) {
    const sqrDiv = document.createElement('div');
    sqrDiv.className = 'square-div';
    gridContainer.appendChild(sqrDiv);
}


// const gridContainer = document.querySelector('.flex-container');

// for (i=0; i<64; i++) {
//     const sqrDiv = document.createElement('div');
//     sqrDiv.className = 'square-div';
//     gridContainer.appendChild(sqrDiv);
// }