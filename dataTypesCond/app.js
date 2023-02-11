// String Template Literals:
let item = 'tacos';
let price = 2.99;
let quantity = 3;

`You bought ${quantity} ${item}, your total is ${price * quantity}.`;
// "You bought 3 tacos, your total is 8.97."

// Conditionals Statements:
// if
if(1 === 1) {
	console.log("It's True!");
}

/// Example 2
let ratings = 7;

if (ratings === 7) {
	console.log('You Got It Dude!!!');
}

/// if, else
if (11 === 3) {
	console.log('You have cracked the Network Sir');
} else {
	console.log('Not today Nick!');
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

let rating = 3;

if (rating === 3) {
	console.log('You are a SUPERSTAR!');
} else if (rating === 2) {
	console.log('You Meet Expectations.');
} else if (rating === 1) {
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

/// Nesting Conditionals:
let pssword = "cat dog";
if (pssword.length >= 6) {
	if(pssword.indexOf(' ') !== -1) {
		console.log("Password cannot include Spaces.");
	}
	else {
		console.log("Valid Password!!");
	}
}
else {
	console.log("Password too Short!");
}

/// Truthy and Falsy
let loggedInUser = 'Ava';
// let loggedInUser = null;

if (loggedInUser) {
	console.log("You are Logged IN");
}
else {
	console.log("Please LOG IN");
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

/// ! Not:
let userLoggedIn = null;

// If there isn't a logged In user.
if(!userLoggedIn) {
	console.log("Sign In");
}

/// Operator Precedence:
/// Not ! has a higher precedence than && and ||
/// && has a higher precedence that ||
/// You can alter this by using parens ()