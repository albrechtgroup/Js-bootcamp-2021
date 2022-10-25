const words = ["Events: ", "Ja", "Mon", "!!!"];

for (let i = 0; i < words.length; i++) {
    console.log(words[i])
}

// Communicating w/ Events: Responding to user input 
// and actions.
// 'addEventLinster' - Specify the event type and a 
// callback to run.
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert("You are Logged IN")
})

// Adding another event listener to the same element
// *Actually runs before the 'click' event*
btn.addEventListener('mouseover', () => {
    console.log("Mouse Over Event!")
})

// Events on multiple elements: 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const h1 = document.querySelector('h1');
const changeColor = function() {
    console.log(this);
    h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}

// Key Events: keypress, keyup, keydown
const input = document.querySelector('#username');

// keyup and keydown will fire for any key touched*
input.addEventListener('keydown', function(e) {
    console.log(e);
    console.log("Key DOWN");
});
// keydown will fire when an item shows up or Enter*
input.addEventListener('keyup', function(e) {
    console.log("Key Up");
});
// keypress with an 'arrow' function:
input.addEventListener('keypress', (e) => {
    console.log("Key PRESS*");
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        // Add a new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }    
});

// Form events & PreventDefault:
const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');


form.addEventListener('submit', function(e) {
    alert("Submitted the Form");
    console.log('CC:', creditCardInput.value);
    console.log('Terms:', termsCheckbox.value);
    e.preventDefault();
})

// Input & Change Events:
creditCardInput.addEventListener('input', (e) => {
    console.log("Credit Card CHANGED!", e);
})





