const body = document.querySelector('body')
const container = document.createElement('div');
container.setAttribute('class','container');
body.appendChild(container);

let rows = 16;
function createField(rows) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            let divTemporary = document.createElement('div');
            divTemporary.setAttribute('class','child');
            let flexBasis = (100 / rows) + "%";
            divTemporary.style.cssText = "flex-basis: " + flexBasis + ";";
            container.appendChild(divTemporary);
            divTemporary.addEventListener('mouseenter', (event) => {
                event.target.style.backgroundColor = "black";
            });
        }
    }
}
createField(rows);
const button = document.createElement('button');
button.textContent = 'Restart';
button.addEventListener('click', () => {
    do {
        var newGrid = prompt("How many rows would you like to start with? (*100 max)");
    }
    while (isNaN(newGrid) || newGrid < 1 || newGrid > 100);
    createField(newGrid);
});
body.appendChild(button);

