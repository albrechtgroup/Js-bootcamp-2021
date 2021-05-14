console.log('More Functions is Connected*');
//////////////////////////// Array callback methods
////////////////  'forEach'
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

console.log('------------------------');

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
/// forEach   (runs a function)
books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});

/// for of     (runs a 'block')
for (let book of books) {
	console.log(book.title.toUpperCase());
}

/// old school
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title.toUpperCase());
}

////////////////  'map'
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});

///////
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
