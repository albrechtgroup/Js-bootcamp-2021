// 'Defining' the function:
// Function Statement:
function motivation() {
	console.log('If you beleive you Can,');
	console.log('Or you beleive you Cannot,');
	console.log('Either way, you are Correct.');
}
// 'Declaring' the function:
motivation();
console.log('----------------');

// Using the function above in a loop:
for (let i = 0; i < 3; i++) {
	motivation();
}
console.log('----------------');

// Generating a random dice roll 1 to 6:
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Die Rolled: ${roll}`);
}

rollDie();
console.log('---------------');

// throwDice() function calls the rollDie() function
// 5 times
function throwDice() {
	rollDie();
	rollDie();
	rollDie();
	rollDie();
	rollDie();
}

throwDice();
console.log('---------------');

// Adding Parameters/Arguements to functions:
function greet(name) {
	console.log(`Hello ${name}!!`)
} 

greet('Frank'); // Hello Frank!!
greet("Tom Sawyer"); // Hello Tom Sawyer!!

// Multiple parameters: *Order matters*
function introduction (name, age) {
	console.log(`Hello, my name is ${name}, and I am ${age} years old. `)
}
// Order of the arguements matter*
introduction('Andrew', 43);

// Multiple parameters(x, y):
function add(x, y) {
	return x + y;
}
// Add Arguements(3, 4):
add(3, 4); // 7

// The 'return' keyword:
// Same function, just declared differently:
// Function captured in a variable 'sum', so that
// we can call/use it later.
function addd(x, y) {
	return x + y;
}
const sum = function(x, y) {
	return x + y;
};
sum(3, 4); // 7

const summ = addd(33, 74); 
summ; // 107
const answer = addd(100, 203);
answer; // 303

// Return can only be executed 1 time:
function isPurple(color) {
	if(color === 'purple') {
		return true;
		console.log("This does NOT run after 'return'");
	}
	return false;	
}

isPurple('blue'); // false

// An even shorter version:
function issPurple(color) {
	return color.toLowerCase() === 'purple';
}

issPurple('red'); // false


