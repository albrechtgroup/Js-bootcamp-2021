// Asynchronous JS, Callbacks & Promises:
// *The Call Stack* - The mechanism the JS interpreter
// uses to keep track of its place in a script that 
// calls multiple functions. *How JS "Knows" what function
// is currently being run and what functions are called
// from within that function.
// "Last thing In, First thing out"

// Asynchronous Code:
console.log('I happen FIRST');
alert('HELLO THERE! ME Second*');

setTimeout(() => {
    console.log('I print out after 3 seconds')
}, 3000);
console.log('I happen 3rd*');

// Callbacks:
const btn = document.querySelector('button');

// Promises - an object representing the eventual 
// completion or failure of an asynchronous operation
const willGetYouACareer = new Promise((resolve, reject) => {
    const rand = Math.random();
    if(rand < 0.5) {
        resolve();
    }
    else {
        reject();
    }
});

willGetYouACareer.then(() => {
    console.log("Congradulations, you were Accepted!");
});
willGetYouACareer.catch(() => {
    console.log("SORRY, you were NOT accepted.");
});