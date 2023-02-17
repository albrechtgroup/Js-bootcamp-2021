// Objects - Collections of data in key/value pairs:
const fitBitData = {
	totalSteps		: 30737,
	totalMiles		: 213.7,
	avgCalorieBurn	: 7377,
	workoutsWeekly	: '5 of 7',
	avgSleepHrs 	: '7:37'
};

// Accessing Object Properties:
// Either the .method:
console.log(fitBitData.avgSleepHrs); // 7.37
console.log(fitBitData.totalMiles); // 213.7

const palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
}

console.log(palette.red);

// Or, using brackets with key inside:
// Using Quotes* inside of the bracket
console.log(fitBitData['totalSteps']); // 30737
console.log(palette['blue']); // #30336b

// Also use a variable: 
let color = 'yellow';
palette[color] // #f9ca24

// Adding properties:
// Starting with an empty object:
const userReviews = {};

// Users add reviews, filling up the object
// Adding Either by .dot notatation:
userReviews.mrSmith = 3.7;
// Or by using square brackets to add properties.
userReviews['queenBee94'] = 4.0;

console.log(userReviews);

// Adding new Key: Value pair to fitBitData above:
fitBitData.heartBeating = true;

// Updating properties: Same choice of syntax as
// 'Adding' above:
fitBitData.workoutsWeekly = '6 of 7';
fitBitData.totalMiles = 9.37;
// Final Object fitBitData after all changes.
console.log(fitBitData);

// Nested Arrays and Objects:
const student = {
	firstName: 'Ava',
	lastName: 'Albrecht',
	strengths: [ 'Playful', 'Innovative' ],
	exams: {
		midterm: 92,
		final: 88
	}
};
// Accessing the exam totals to find the average
const avgScore = (student.exams.midterm + student.exams.final) / 2;

console.log(avgScore); //90

// Accessing the Second item in the object's array. 
student.strengths[1]; // 'Innovative'

// Common format is making an Array and each 
// element in the array is an Object:
const shoppingCart = [
	{
		product: 'Ghost Recon: Breakpoint',
		price: 54.99,
		quantity: 1
	},
	{
		product: 'R.C. Helicopter',
		price: 79.99,
		quantity: 2
	},
	{
		product: 'HiBoy VE1 Pro',
		price: 799.00,
		quantity: 1
	}
];

const favPurchase = shoppingCart[2].product;
console.log(favPurchase); // HiBoy VE1 Pro

// Objects and Reference types:
const palette2 = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
};
// Making a cope of the other. Both will have the
// the same reference:
const palette3 = palette2;
// Changing One, will change the Other*
palette3.mustard = '#ebf876';

console.log(palette2);

// Array & Object Equality:
// Both are refering to the Same object in memory*
// Checking for Equality of Reference, not Equality
// of Contents*
palette2 === palette3; // true

