let sketchArea = document.querySelector('.sketch-area');
sketchArea.setAttribute('style', 'display: flex; flex-direction: column;')

let n = 16;

function makeGrid(n) {
    for (let j=0; j < n; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'display: flex;')
        
        for (let i=0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add(`square`);
            square.setAttribute('style', 'border: 1px grey solid; width: 25px; height: 25px;');
            
            row.appendChild(square);
        }
        sketchArea.appendChild(row);
    }
}

makeGrid(n);