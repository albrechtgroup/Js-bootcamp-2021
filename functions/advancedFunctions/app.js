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

/// Higher Order functions
function addition(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

const operations = [ add, subtract, multiply, divide ];

operations[2](3, 7); // 21

for (let func of operations) {
	let result = func(33, 7);
	console.log(result);
}

const thing = {
	doSomething: multiply
};

/// creating a 'method'
thing.doSomething(33, 7); ///  231

///  functions as arguements:
function cry() {
	console.log('Boo Hoo!!!');
}

function laugh() {
	console.log('Ahahahhaa!!!');
}

function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

repeatNTimes(laugh, 7); 	

///  functions as return values
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

///
function inBetween(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

const iSChild = inBetween(0, 18);
const isEighties = inBetween(1979, 1989);
const isNiceWeather = inBetween(70, 89);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('Why did you click me!?!?!?');
});

/// Array callback methods
///  'for Each':
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

/// anonomous function
numbers.forEach(function(num) {
	console.log(num * 2);
});

function printTriple(n) {
	console.log(n * 3);
}

numbers.forEach(printTriple);

numbers.forEach(function(num, idx) {
	console.log(idx, num);
});

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36
	}
];
/// forEach (runs a function)
books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});

/// for of (runs a 'block')
for (let book of books) {
	console.log(book.title.toUpperCase());
}

/// old school
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title.toUpperCase());
}

///  'map'
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});

/// .map
const numbs = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const doubles = numbs.map(function(num) {
	return num * 2;
});

const numDetail = numbers.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

const abbreviations = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});

///  Arrow Functions
/// Old
const square = function(x) {
	return x * x;
};
/// New
const sqr = (x) => {
	return x * x;
};

const isEven = (num) => {
	return num % 2 === 0;
};

const mult = (x, y) => {
	return x * y;
};

const greet = () => {
	console.log('Hi!');
};
///
const square3 = (n) => {
	return n * n;
};
//// alittle shorter
const square4 = (n) => n * n;
////  Shortest
const square5 = (n) => n * n;

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const doubles1 = nums.map(function(n) {
	return n * 2;
});

const doubles2 = nums.map((n) => {
	return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

/// .reduce
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const maxGrade = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
}); //  99
