let gridSize = 4;
let boxSize = (100 / gridSize) + "%";

const container = document.getElementById('container');

function gridDraw() {
    for (i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('box');
        box.classList.add('box');
        container.appendChild(box);
        box.style.cssText = (`width: ${boxSize}; height: ${boxSize}`);
        
        box.addEventListener('mouseenter', function() {
            this.style.background = 'red'; 
        });
    }
}

function refreshInit() {
    let x = document.getElementById('refresh');
    x.addEventListener('click', function(e) {
        const currentBoxes = document.getElementsByClassName('box');
        i = currentBoxes.length;
        while (i !== 0) {
            let z = i;
            container.removeChild(currentBoxes[0]);
            i--;
        }
        gridSize = document.getElementById('grid-size').value;
        boxSize = (100/ gridSize) + "%";
        gridDraw();
    })
}

refreshInit();
gridDraw();
