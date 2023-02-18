// for loops:
// Log 'Hello:' plus the integer to 17
for (let i = 1; i <= 7; i++) {
	console.log('Hello', i);
}

// Start i at 50 and subtract 10
for (let i = 50; i >= 0; i -= 10) {
	console.log(i)
}

// Log number 1 to 13 squared and the total
for (let num = 1; num <= 13; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// for loop over array and print integer and 
// string in the array
const animals = [ 'lions', 'tigers', 'bears' ];

for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

console.log('OH MY!!!');

// for loop over array and print each exam score
const examScores = [ 98, 91, 87, 93, 89, 83, 77 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

// for loop over array's objects and print properties
const myStudents = [
	{
		firstName: 'Zeus',
		grade: 87
	},
	{
		firstName: 'Artemis',
		grade: 93
	},
	{
		firstName0: 'Hera',
		grade: 83
	},
	{
		firstName: 'Apollo',
		grade: 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}

// for loop over a string:
const word = 'stressed';

for (let i = 0; i < word.length; i++) {
	console.log(word[i])
}

// loop over the string backwards:
// Stressed spelled backwards is Desserts!!
for (let i = word.length -1; i >= 0; i--) {
	console.log(word[i])
}

// for loop over myStudents to print average score
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}

console.log(total / myStudents.length);

// Nested for loops:
let str = 'LOL';
for(let i = 0; i <= 4; i++) {
	console.log("OUTER Loop:", i);
	for(let j = 0; j < str.length; j++) {
		console.log('	INNER Loop:', str[j]);
	}
}

// Traditional 'for' loop:
let subreddits = [ 'football', 'snacks', 'tech', 'remote control' ];

for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
console.log('-----------------------');

// 'for of' loop:
// Easier, Cleaner, and Newer in JS*
for (let sub of subreddits) {
	console.log(sub);
}
console.log('-----------------------');

// Magic Square game where each 3 numbers add to 15
// *Vertically and horizontally*
const magicSquare = [ 
	[ 2, 7, 6 ],
	[ 9, 5, 1 ],
    [ 4, 3, 8 ]
 ];
// 'for' loop:
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}
console.log('-----------------------');

// 'for Of' is shorter than 'for' Above:
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}
console.log('-----------------------');

// This is example of when Not to use 'for of'
// When you need to use an 'index'to iterate over
// the items in the arrays.
const words1 = [ 'mail', 'milk', 'bath', 'pink' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	console.log(words1[i], words2[i]);
}
console.log('-----------------------');

// 'for of' with Objects:
const movieReviews = {
	Arrival: 9.5,
	Alien: 9,
	AmericanSniper: 8.3,
	'In Bruges': 9,
	Chicago: 8.7,
	'Kill Bill': 8.2,
	'Little Miss Sunshine': 9.3,
	GIJoe: 8.9
};

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total1 = 0;
for (let r of ratings) {
	total1 += r;
}
let avg = (total1 /= ratings.length);
console.log(`Average Movie Rating is: ${avg}`);
console.log('-----------------------');

// 'for in' loop:
// Loops over the 'keys' in an object:
const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampions: 500000,
	battleOfTheDecades: 100000
};

for (let keys in jeopardyWinnings) {
	console.log(keys);
	console.log(jeopardyWinnings[keys]);
}
console.log('-----------------------');

for (let keys in jeopardyWinnings) {
	total += jeopardyWinnings[keys];
}
console.log(`Ken Jennings Total Earnings: ${total}`);
console.log('-----------------------');

