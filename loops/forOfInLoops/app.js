alert('Welcome!');

///////////'for Of/IN' Loops
let subreddits = [ 'football', 'snacks', 'tech', 'remote control' ];
/////// Traditional 'for'
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
console.log('-----------------------');

/////// 'for OF' Loop
for (let sub of subreddits) {
	console.log(sub);
}
console.log('-----------------------');

///////////// taditional "for"
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}
console.log('-----------------------');

//////////// "for Of"
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}
console.log('-----------------------');

///////////
const words1 = [ 'mail', 'milk', 'bath', 'pink' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	console.log(words1[i], words2[i]);
}
console.log('-----------------------');

///////////// for Of with Objects
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

////// for (let x of movieReviews){}
///      console.log(x);
//     }

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = (total /= ratings.length);
console.log(avg);
console.log('-----------------------');

///////////// for In Loop
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
/////////
for (let keys in jeopardyWinnings) {
	total += jeopardyWinnings[keys];
}
console.log(`Ken Jennings Total Earnings: ${total}`);
console.log('-----------------------');
