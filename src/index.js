//query selectors
let body = document.querySelector('body');
let sketchArea = document.querySelector('.sketch-area');
sketchArea.setAttribute('style', 'display: flex; flex-direction: column; border-radius: 15px;');
let colorBtn = document.querySelector('.color-btn');
let color = document.querySelector('#color');

//set start color
let colorInput = color.value;
colorBtn.setAttribute('style', `background-color: ${colorInput}`);

//on color button click, click color input
colorBtn.addEventListener('click', function() {
    color.click();
});

//on change of color value, update color input value and button background color
color.addEventListener('change', function() {
    colorInput = color.value;
    colorBtn.setAttribute('style', `background-color: ${colorInput}`);
    return colorInput;
})

//set number of row/columns - may change this later
let n = 16;

//makes grid that is n squares wide and n squares tall
function makeGrid(n) {
    //this makes each of the rows
    for (let j=0; j < n; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'display: flex;')
        
        //this creates each square and puts it in a row
        for (let i=0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add(`square`);
            square.setAttribute('style', 'border: 1px #e2e2e2 solid; width: 25px; height: 25px;');
            
            row.appendChild(square);
        }
        sketchArea.appendChild(row);
    }
}

//creates grid on load
makeGrid(n);
