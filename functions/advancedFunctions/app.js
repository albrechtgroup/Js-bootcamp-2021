/// Function 'scope':
/// The location where a var is defined dictates
/// where we have access to that variable.
function helpMe() {
	let msg = "I'm on Fire!!!";
	msg; // "I'm on Fire!!!"
}
/// This receives an Error*
/// msg; // Not defined!

let bird = 'Mandarin Duck';

function birdWatch() {
	let bird = 'Golden Pheasant';
};

birdWatch(); // Golden Pheasant
console.log(bird); // Mandarin Duck

/// Block scope {}: 
/// *Keyword 'var' is NOT scoped in Blocks*
/// 'var'
let animls = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
var i = 10;
for (var i = 10; i < animls.length; i++) {
	console.log(i, animls[i]);
}
console.log(i);

/// 'let' & 'const' are scoped to their {} blocks
let animals = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
let j = 10;
for (let j = 10; j < animals.length; j++) {
	console.log(j, animals[j]);
}
console.log(i);

let radius = 9;

if (radius > 0) {
	const PI = 3.14;
	let circ = 2 * PI * radius;
}

console.log(radius); // 9
// console.log(PI); // NOT DEFINED
// console.log(circ); // NOT DEFINED

/// 'lexical Scope' Nested functions are 'lexically'
/// bound to their parents scope
function outer() {
	let movie = 'Amadeus';

	function inner() {
		let movie = 'The Shining';
		console.log(movie.toUpperCase());
	}
	inner(); 
} 

outer(); // THE SHINING

/// *Nested Example (React.js)
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

/// Function expressions:
/// Andther syntax we can use to define functions
/// The function 'statements' we have been using
function add(x, y) {
	return x + y;
}
/// The same function as an 'expression'
/// assingning the function(which is an object),
/// to a variable to pass around and use.
const sum = function(x, y) {
	return x + y;
}

const squared = function(num) {
	return num * num;
}

squared(7); // 49

/// Higher Order functions - Functions that operate
// on/with other functions:
/// function 'statement'...
function addition(x, y) {
	return x + y;
}
/// function 'expression'...
const subtract = function(x, y) {
	return x - y;
}
/// function 'statement'...
function multiply(x, y) {
	return x * y;
}
/// function 'expression'...
const divide = function(x, y) {
	return x / y;
}

const operations = [ addition, subtract, multiply, divide ];

/// using the 'multiply' function, index of 2
operations[2](3, 7); // 21

for (let func of operations) {
	let result = func(33, 7);
	console.log(result);
}

/// Can store functions in objects:
const thing = {
	doSomething: multiply
};
/// Adding a function to an object, we have 
/// created a .method()
thing.doSomething(33, 7); ///  231

///  functions as arguements:
function callThreeTimes(f) {
	f();
	f();
	f();
}

function cry() {
	console.log('Boo Hoo!!!');
}

function laugh() {
	console.log('Ahahahahaha!!!');
}

callThreeTimes(laugh); // passes a func as an arg!
callThreeTimes(cry); // passes a func as an arg!

function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

repeatNTimes(laugh, 3); 	

///  functions as return values
console.log("---Functions as Return values---");

/// This 'function factory' gives us 2 functions
/// below: 'triple' & 'double'
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
console.log(triple(9)); // 27
const double = multiplyBy(2);
console.log(double(100)); // 200 
 
/// Another 'function factory' - inBetween
function inBetween(x, y) {
	return function(num) {
		return num >= x && num <= y;
	}
}

const iSChild = inBetween(0, 18);
iSChild(17); // true
const isEighties = inBetween(1979, 1989);
const isNiceWeather = inBetween(70, 89);
isNiceWeather(63); // false

/// Callback Functions - A function passed into 
/// another function as an arguement, which is then
/// invoked in the Outer function.
/// We created this 'callback fuction' earlier*
callThreeTimes(laugh); // passes a func as an arg!

/// Passing in an Anonomouw func is VERY common*
setTimeout(function() {
	alert("Anonomous Function, setTimout after 3 s.")
}, 3000);

/// Button Event Listener - Also using Callback
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('WHY did you click me!?!?!?');
});

/// Hoisting (Not Crucial*)
/// In Js, var declarations are hoisted above 
/// console.log
console.log(monkey);
var monkey = 'Spider Monkey';
/// let and const Cannot be hoisted*

/// function declarations are also hoisted
howl();
function howl() {
	console.log("AWWOOOOOOO!!!");
}



