// Function 'scope':
// The location where a variable is defined, 
// dictates where we have access to that variable.
// *msg is defined and can only be used inside of 
// the helpMe() function.
function helpMe() {
	let msg = "I'm on Fire!!!";
	console.log(msg); // "I'm on Fire!!!"
}
// This receives an Error*
// console.log(msg); // Not defined!

function lol() {
	let person = 'Tom';
	const age = 45;
	var color = 'teal';
	console.log(color);
}

function changeColor() {
	let color = 'purple';
	const age = 23;
	console.log(color);
}
// color is 'scoped' to each function
lol(); // teal
changeColor(); // purple 

let bird = 'Mandarin Duck';

function birdWatch() {
	let bird = 'Golden Pheasant';
	console.log(bird);
};
// local scope
birdWatch(); // Golden Pheasant
// global scope, Outside of the function
console.log(bird); // Mandarin Duck

// Block scope {}: 
// 'let' & 'const' are scoped to their {} blocks
// Here, PI & 'circ' are scoped to the BLOCK {}
let radius = 9;

if (radius > 0) {
	const PI = 3.14;
	let circ = 2 * PI * radius;
}

console.log(radius); // 9
// console.log(PI); // NOT DEFINED
// console.log(circ); // NOT DEFINED

// *Keyword 'var' is NOT scoped in Blocks*
if (true) {
	var animal = 'tiger';
	console.log(animal); // tiger
}
console.log(animal); // tiger

// Below is an example of when using 'var' in a for
// loop was a bad idea*
let bears = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
var i = 10;
for (var i = 0; i < bears.length; i++) {
	console.log(i, bears[i]);
}
// Below prints 3, the # of items in the loop, var*
console.log(i); // 3 

// for loop using 'let':
let animals = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
let j = 13;
for (let j = 0; j < animals.length; j++) {
	console.log(j, animals[j]);
}
// j is global outside of the for loop block
console.log(j); // 13

// 'lexical Scope' Nested functions are 'lexically'
// bound to their parents scope
function outer() {
	let movie = 'Amadeus';

	function inner() {
		let movie = 'The Shining';
		console.log(movie.toUpperCase());
	}
	inner(); 
} 
// the function 'outer' is running func 'inner'
outer(); // THE SHINING

// *Nested Example (React.js)
function TodoList() {
	let todos = [];
	let username = '';
	function addTodo() {

	}
	function removeTodo() {

	}
	function updateTodo() {

	}
};

// Function expressions:
// Another syntax we can use to define functions
// The function 'statements' we have been using:
function add(x, y) {
	return x + y;
}

// The same function as an 'expression':
// Assingning the function(which is an object),
// to a variable to pass around and use.
const sum = function(x, y) {
	return x + y;
}

const squared = function(num) {
	return num * num;
}

sum(1, 1); // 2
squared(7); // 49

// Higher Order functions - Functions that operate
// on/with other functions: 
function addition(x, y) {
	return x + y;
}
// function 'expression':
const subtract = function(x, y) {
	return x - y;
}
// function 'statement':
function multiply(x, y) {
	return x * y;
}
// function 'expression':
const divide = function(x, y) {
	return x / y;
}

// Higher Order funcs can = Accept other funcs as 
// arguments & Return a function:
// function 'statement':
// This is an array of above functions: 
const operations = [ addition, subtract, multiply, divide ];

// using the 'multiply' function, index of 2
console.log(operations[2](3, 7)); // 21
operations[0](3, 4); // 7

// 'for of' is running the parameters of func
// looping over each of the operations in array 
for (let func of operations) {
	let result = func(33, 7);
	console.log(result);
}

// Can store functions as a value in objects:
const thing = {
	doSomething: multiply
};
// Adding a function to an object, we have 
// created a .method()
thing.doSomething(33, 7); ///  231

// Higher Order funcs can = Accept other funcs as 
// arguments & Return a function:
// Functions as Arguments: Very Common*
// Here: func is the parameter:
function callThrice(func) {
	func();
	func();
	func();
}
// 'cry' and 'laugh' are arguments:
function cry() {
	console.log('Boo Hoo!!!');
}

function laugh() {
	console.log('Ahahahahaha!!!');
}
// Can call cry or laugh alone, or pass into the 
// 'callThrice" function:
laugh(); // Ahahahahaha!!!
callThrice(laugh); // passes laugh func as an arg!
callThrice(cry); // passes cry func as an arg!

function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}
// arguments for (action, num) parameters:
repeatNTimes(laugh, 3); 	
repeatNTimes(cry, 1);

//  functions as return values:
console.log("---Functions as Return values---");



// This 'function factory' gives us 2 functions
// below: 'triple' & 'double'
function multiplyBy(num) {
	// Here is where we write 'anonomous' function:
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
console.log(triple(9)); // 27
console.log(double(100)); // 200 

// Another 'function factory' - inBetween
function inBetween(x, y) {
	return function(num) {
		return num >= x && num <= y;
	}
}

const isChild = inBetween(0, 18);
isChild(17); // true
const isEighties = inBetween(1979, 1989);
const isNiceWeather = inBetween(70, 89);
isNiceWeather(63); // false

// Callback Functions - A function passed into 
// another function as an arguement, which is then
// invoked in the Outer function.
// We created this 'callback fuction' earlier*
callThrice(laugh); // passes a func as an arg!

// Passing in an Anonomous func is VERY common*
setTimeout(function() {
	alert("Anonomous Function, setTimout after 3 s.")
}, 3000);

// Button Event Listener - Also using Callback
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('WHY did you click me!?!?!?');
});

// Hoisting (Not Crucial*)
// In Js, 'var' declarations are hoisted above 
// console.log
console.log(monkey);
var monkey = 'Spider Monkey';
// let and const Cannot be hoisted

// function declarations are also hoisted
howl();
function howl() {
	console.log("AWWOOOOOOO!!!");
}



