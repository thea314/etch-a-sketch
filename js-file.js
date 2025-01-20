let buttonReset = document.createElement('button');
buttonReset.style.margin = '10px';
buttonReset.style.padding = '10px';
buttonReset.style.backgroundColor = 'blue';
buttonReset.style.color = 'white';
buttonReset.style.border = 'none';

buttonReset.textContent = 'Redraw Grid';
document.body.appendChild(buttonReset);

    let squaresPerSide = 0;

buttonReset.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '';
    
    let squaresPerSide = Number(prompt('How many squares per side?'));

    if (squaresPerSide > 100) {
        squaresPerSide = 100;
    } 

    let totalSquares = squaresPerSide ** 2;
    document.querySelector('.container').style.width = (12 * squaresPerSide) + 'px';
    drawGrid(totalSquares);
});

    
function drawGrid(totalSquares) {

    for (let i = 1; i <= totalSquares; i++) {
        
        let content = document.createElement('div');
        content.classList.add('square');
        document.querySelector('.container').appendChild(content);
        content.style.border = '1px solid black';
        content.style.backgroundColor = 'white';
        content.style.width = '10px';
        content.style.height = '10px';
        content.style.margin = '0px 0px 0px 0px';
        content.style.padding = '0px';

        content.addEventListener('mouseover', () => {
            content.style.backgroundColor = 'black';
        })
            
        }

    }
