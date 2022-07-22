/// Functions on Collection of Data:
/// Array callback methods

/// 'forEach' - Accepts a callback function. Calls 
/// the function once per element in the array.
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
/// anonomous/One-time function
numbers.forEach(function(num) {
	console.log(num * 2);
});

/// Another way to use for each. Re-Usable func
function printTriple(n) {
	console.log(n * 3);
}

numbers.forEach(printTriple);

/// forEach using a Second parameter:
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
	console.log(book.title.toUpperCase());
}

/// old school 'for'
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title.toUpperCase());
}

/// .map - Creates a New array with the result of 
/// calling a calback on every element in the array.
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});
console.log(caps); // ['ROFL', 'LOL', 'OMG', 'TTYL']

/// .map creates a new array 'doubles' from 'numbs'
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
