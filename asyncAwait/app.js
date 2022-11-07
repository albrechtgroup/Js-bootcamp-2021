// Asynchronous JS, Callbacks & Promises:
// *The Call Stack* - The mechanism the JS interpreter
// uses to keep track of its place in a script that 
// calls multiple functions. *How JS "Knows" what function
// is currently being run and what functions are called
// from within that function.
// "Last thing In, First thing out"

// Asynchronous Callback:
console.log('I happen FIRST');
alert('HELLO THERE! ME Second*');

setTimeout(() => {
    console.log('I print out after 3 seconds')
}, 3000);
console.log('I happen 3rd*');

// The 'async' keywork:
// Async functions always return a promise. IF the 
// func returns a value, the promise will be resolved 
// with that value. If the func throws an exception,
// the promise will be rejected.
async function hello() {
    return 'Hey guy!';
}
hello();
// Promise resolved: "Hey guy!"
async function uhOh() {
    throw new Error('Oh No!!!');
}
uhOh();
// Promise rejected: Error! Oh No!!!

// Axios:
axios.get('https://pokeapi.co/api/v2/pokemon/1')
.then((data) => {
    console.log(data);
})

///////
async function greet() {
    return 'Hey.';
}

greet().then((val) => {
    console.log('PROMISE Resolved with: ', val);
});

///////
async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y Must be NUMBERS!';
    }
    return x + y;
}

add('e', 'r').then((val) => {
    console.log('PROMISE Resolved with: ', val);
})
.catch((err) => {
    console.log('PROMISE Rejected with: ', err);
});

// The 'await' keyword:
async function getPlanets() {
    const res = await axios.get('https://swapi.co/api/planets/');
    console.log(res.data);
}

getPlanets();


