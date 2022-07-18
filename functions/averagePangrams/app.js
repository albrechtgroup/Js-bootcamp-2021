/// Write a function to find the average value in 
/// an array of numbers
///     avg([0, 50])   // 25
///     avg([75, 76, 80, 95, 100])  //85.2
function avg(arr) {
	let total = 0;
	// loop over each num
	for (let num of arr) {
		// add them together
		total += num;
	}
	// divide by number of nums
	let res = total / arr.length;
	return res;
}

avg([2, 4, 6, 8, 10]); // 6

/// A Pangram is a sentence that contains every 
/// letter of the alphabet, like: "The quick brown 
/// fox jumps over the lazy dog"

/// Write a function called isPangram, which checks
/// to see if a given sentence contains every letter
/// of the alphabet.
///	Make sure you ignore string casing!

function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

/// Write a function getCard(), which returns a 
/// random playing card object.
/// Ex:
/// 	{
//		value: 'K',
//		suit: 'clubs'
///	}
/// Pick a random value from:
/// 	2,3,4,5,6,7,8,9,10,J,K,Q,A
/// Pick a random suit from:
// 		clubs, spades, hearts, diamonds
/// Return Both in an object.

function pick(arr) {
	// return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A' ];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

	return { value: pick(values), suit: pick(suits) };
}
