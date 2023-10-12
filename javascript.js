const body = document.querySelector('body')
const container = document.createElement('div');
container.setAttribute('class','container');
body.appendChild(container);

let rows = 16;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
        let divTemporary = document.createElement('div');
        divTemporary.setAttribute('class','child');
        container.appendChild(divTemporary);
        divTemporary.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = "black";

            // setTimeout(() => {
                // event.target.style.backgroundColor =  "";
            // }, 2000);
        });
    }
}
