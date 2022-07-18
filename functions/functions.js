/// Functions:
/// 'Defining' the function:
function motivation() {
	console.log('If you beleive you Can,');
	console.log('Or you beleive you Cannot,');
	console.log('Either way, you are Correct.');
}
/// 'Declaring' that function:
motivation();
console.log('----------------');

/// Using the function above in a loop:
for (let i = 0; i < 3; i++) {
	motivation();
}
console.log('----------------');

/// Generating a random dice roll:
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`You Rolled: ${roll}`);
}

rollDie();

/// throwDice() function calls the rollDie() function
/// 5 times
function throwDice() {
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
}

throwDice();
console.log('---------------');

/// Adding Parameters/Arguements to functions:
function greet(name) {
	console.log(`Hello ${name}!!`)
} 

greet('Ava'); // Hello Ava!!

/// Multiple parameters in a function:
function add(x, y) {
	return x + y;
}
add(3, 4); // 7

/// Same function, just declared differently
const sum = function(x, y) {
	return x + y;
};
sum(3, 7); // 7
console.log('------------');

/// Multiple parameters. *Order matters*
function introduction (name, age) {
	console.log(`Hello, my name is ${name}, and I am ${age} years old. `)
}

introduction('Arietta', 21);

/// 'return' keyword:
function addd(x, y) {
	return x + y;
}

const summ = addd(33, 74); 
summ; // 107
const answer = addd(100, 203);
answer; // 303

/// Return can only be executed 1 time:
function isPurple(color) {
	if(color === 'purple') {
		return true;
	}
	return false;	
}

/// An even shorter version:
function issPurple(color) {
	return color.toLowerCase() === 'purple';
}

isPurple('blue'); // false
issPurple('red'); // false

////////////////////////////// ?? moreFunctios ??
/// Higher Order functions
function add(x, y) {
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
console.log('-----------------------');

///  functions as arguements
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
console.log('-----------------------');

///  functions as return values
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
console.log('-----------------------');

///
function inBetween(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

const iSChild = inBetween(0, 18);
const isEighties = inBetween(1979, 1989);
const isNiceWeather = inBetween(70, 89);

console.log('---------------');

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('Why did you click me!?!?!?');
});


