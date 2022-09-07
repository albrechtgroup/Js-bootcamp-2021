/// Functions on Collection of Data:
/// Array callback methods

/// 'forEach' Method - Accepts a callback function.
/// Calls the function once per element in the array.
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
/// Anonomous/One-time function to multiply each 
/// number in array times 2
numbers.forEach(function(num) {
	console.log(num * 2);
});

console.log('---------');
/// Another way to use for each. Re-Usable func
function printTriple(num) {
	console.log(num * 3);
}

numbers.forEach(printTriple);

/// 'forEach' using a Second parameter:
/// *Order of parameters does Not matter here:
numbers.forEach(function(num, idx) {
	console.log(idx, num);
})

/// 'forEach' Object in the array:
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
/// 'forEach' Object in the array:
books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});

/// 'for of' (runs a 'block')
for (let book of books) {
	console.log(book.title.toLowerCase());
}

/// old school 'for'
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title.toUpperCase());
}

/// *Very Common, more than the other methods*
/// .map() - Creates a New array with the result of 
/// calling a calback on every element in the array.
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});
console.log(caps); // ['ROFL', 'LOL', 'OMG', 'TTYL']

/// .map() 
const numbs = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
// .map creates a new array 'doubles' from 'numbs'
const doubles = numbs.map(function(num) {
	return num * 2;
});
console.log(doubles); // [40, 42, 44, etc]

/// return true or false if a value is even:
const numDetail = numbs.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});
console.log(numDetail); 

/// .map 'words' array(above), return it uppercase & 
/// .split & .join by period
const abbreviations = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});

console.log(abbreviations); // ['A.S.A.P.', B.Y.O.B', etc.]

/// .map an array returned with 'books' title
const bookTitle = books.map(function(b) {
	return b.title;
})

console.log(bookTitle); // ['Good Omens', 'Bone: The', etc]
console.log(bookTitle[2]); // American Gods

/// Arrow Functions Intro: Syntactically compact
/// alternative to a regulear function Expression

/// Old function expression
const square = function(x) {
	return x * x;
};

/// New arrow func syntax, Same result
const squareArrow = (x) => {
	return x * x;
};

/// More...
const isEven = (num) => {
	return num % 2 === 0;
};

const mult = (x, y) => {
	return x * y;
};

/// No params still needs parenthesis
const greet = () => {
	console.log('Hi!');
};

greet(); // Hi!

/// Arrow Functions: Implicit returns: 
/// Arrow function w parenthesis around params
const square2 = (n) => {
	return n * n;
};
/// Shorter, No parenthesis around params
const square3 = n => n * n;
/// Shortest one-liner Implicit Return
const square4 = n => n * n;

/// .map Implicit returns:
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
/// Old, Non-Implicit way:
const doubles1 = nums.map(function(n) {
	return n * 2;
});
/// Regular, Non-Implicit Arrow function:
const doubles2 = nums.map((n) => {
	return n * 2;
});
/// One-liner- Drop the curly braces & use parenthesis
/// Implicit return(Without the 'return' keyword)
const doubles3 = nums.map(n => n * 2);

/// Array .find() - Returns the value of the first element in 
/// the satisfies the providee testing function.
let movies = [
	"The Fantastic Mr. Fox",
	"Mr. and Mrs. Smith",
	"Mrs. Doubtfire",
	"Mr. Deeds"
]

const movie = movies.find(movie => {
	return movie.includes('Mrs.')
}) // "Mr. and Mrs. Smith"

/// Implicit .find()
const goodBooks = books.find(b => b.rating >= 4.3)
console.log(goodBooks.title);  

/// Array .filter() - Creates a new array with all elements
/// that pass the test, implemented by the func.
const sizes = [28, 30, 32, 34, 36, 38, 40, 42];
const smallSize = sizes.filter(s => s <= 34);
const plusSize = sizes.filter(s => s >= 38);

/// .filter to create an array of books with rating
/// greater or equal to 4.3
const greatBooks = books.filter(b => b.rating >= 4.3)
console.log(greatBooks);

/// .every() - tests whether ALL elements in the array 
/// pass the provided function. Returns Boolean value
const moreWords = ['dog', 'dig', 'log', 'bag', 'wag'];

const threeLetter = moreWords.every(word => {
	return word.length === 3;
}) 
threeLetter; // true

/// .some() - Similar to every, but returns true if 
/// ANY of the array elements pass the test func.
/// Also returns a Boolean value
/// *** Changes the original array. Mutates it.

/// .sort() - Accepts to parameters to compare?
const prices = [400.50, 3000, 99.99, 35.99, 12, 9500];
/// .sort from Acsending value..
const sort1 = prices.sort((a, b) => a - b);
console.log(sort1); // [12, 35.99, 99.99, etc.]
/// .sort from Descending value
const sort2 = prices.sort((a, b) => b - a);
console.log(sort2); // [9500, 3000, 400.50, etc]

/// .sort Descending 'books' ratings
const bookRating = books.sort((a, b) => b.rating - a.rating);

/// .reduce() - Executes a reducer function on each
/// element of the array, Resulting in a Single value
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
})

/// Multiply each num in array by the next num
const totalNum = [3, 4, 5, 6, 7];
const product = totalNum.reduce((total, currVal) => {
	return total * currVal;
})
console.log(product); // 2520

/// .reduce shopping cart items to total
const amazonCart = [999.99, 11.99, 17.99, 5.99, 27.98];
const checkout = amazonCart.reduce((total, items) => {
	return total + items;
})
console.log(checkout); // 1063.94

/// find the highest value/grade
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const maxGrade = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
}); //  99

/// Using Math.max
const topGrade = grades.reduce((max, currVal) => {
	return Math.max(max, currVal);
}) // 99

/// .reduce() specify an initial value as the starting 
/// point
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const results = votes.reduce((tally, val) => {
	if(tally[val]) {
		tally[val]++
	} else {
		tally[val] = 1;
	}
	return tally;
}, {})

/// Shorter 