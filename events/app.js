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
    alert("Your FORM has been Submitted.")
})

// Adding another event listener to the same element
// *Actually runs before the 'click' event*
btn.addEventListener('mouseover', () => {
    console.log("Mouse Over Event!")
})

// Events on multiple elements: 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const printColor = function() {
    console.log(this);
    console.log(this.style.backgroundColor);
}

const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', printColor);
}


