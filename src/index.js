//query selectors
let body = document.querySelector('body');
let sketchArea = document.querySelector('.sketch-area');
sketchArea.setAttribute('style', 'display: flex; flex-direction: column; border-radius: 15px;');
let colorBtn = document.querySelector('.color-btn');
let color = document.querySelector('#color');

//set color
let colorInput = color.value;
colorBtn.setAttribute('style', `background-color: ${colorInput}`);

colorBtn.addEventListener('click', function() {
    color.click();
});

color.addEventListener('change', function() {
    colorInput = color.value;
    colorBtn.setAttribute('style', `background-color: ${colorInput}`);
})


let n = 16;

function makeGrid(n) {
    for (let j=0; j < n; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'display: flex;')
        
        for (let i=0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add(`square`);
            square.setAttribute('style', 'border: 1px #e2e2e2 solid; width: 25px; height: 25px;');
            
            row.appendChild(square);
        }
        sketchArea.appendChild(row);
    }
}

makeGrid(n);
