alert('You are Connected');

/// String Template Literals:
let item = 'tacos';
let price = 2.99;
let quantity = 3;

`You bought ${quantity} ${item}, your total is ${price * quantity}`;
// "You bought 3 tacos, your total is 8.97"


/// Conditionals Statements:
/// if, else
if (11 === 3) {
	console.log('You have cracked the Network Sir');
} else {
	console.log('Not today Nick!');
}

/// Example 2
let rating = 7;

if (rating === 7) {
	console.log('Yeah dude!!!');
}

/// Example 3
let num = 37;

if (num % 2 !== 0) {
	console.log('You have selected an ODD Number.');
}

/// Example 4
//  Ratings:
//  3 - Superstar
//  2 - Meets Expectations
//  1 - Needs Improvement
//  0 - Invalid Rating!

let ratingB = 0;

if (ratingB === 3) {
	console.log('You are a SUPERSTAR!');
} else if (ratingB === 2) {
	console.log('You Meet Expectations.');
} else if (ratingB === 1) {
	console.log('You desperately Need Improvement..');
} else {
	console.log('Invalid Rating*');
}

/// Example 5
let highScore = 1700;
let userScore = 1980;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highScore = userScore;
} else {
	console.log(`Good Game. Your Score of ${userScore} did not beat the high score of ${highScore}`);
}

/// Example 6  '&&' And
let password = 'assMan';

if (password.length >= 5 && password.indexOf(' ') === -1) {
	console.log('Valid Password');
} else {
	console.log('Invalid Password');
}

/// Example 7  '||' Or
let age = 76;

if (age < 6 || age >= 65) {
	console.log('You get in for FREE!');
} else {
	console.log('That will be $10 please.');
}
