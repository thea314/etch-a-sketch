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


        let counter = 0;
        
        content.addEventListener('mouseover', () => {
            
            if (content.style.backgroundColor === 'white') {
                content.style.backgroundColor = '#' + makeRandomColor();
                content.style.opacity = '0.1';
                counter++;
            } else if (counter == 1) {
                content.style.opacity = '0.1';
                counter++;
            }else if (counter == 2) {
                content.style.opacity = '0.2';
                counter++;
            }else if (counter == 3) {
                content.style.opacity = '0.3';
                counter++;
            }else if (counter == 4) {
                content.style.opacity = '0.4';
                counter++;
            }else if (counter == 5) {
                content.style.opacity = '0.5';
                counter++;
            }else if (counter == 6) {
                content.style.opacity = '0.6';
                counter++;
            }else if (counter == 7) {
                content.style.opacity = '0.7';
                counter++;
            }else if (counter == 8) {
                content.style.opacity = '0.8';
                counter++;
            }else if (counter == 9) {
                content.style.opacity = '0.9';
                counter++;
            }else if (counter == 10) {
                content.style.opacity = '1';
            } 

                
        })
            
        }

    }

    function makeRandomColor() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
