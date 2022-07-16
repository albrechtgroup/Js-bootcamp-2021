/// Objects - Collections of data in key/value pairs:
const fitBitData = {
	totalSteps		: 30737,
	totalMiles		: 213.7,
	avgCalorieBurn	: 7377,
	workoutsWeekly	: '5 of 7',
	avgSleepHrs 	: '7:37'
};

console.log(fitBitData.avgSleepHrs); // 7.37

/// Accessing Object Properties:
const palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
}

/// Either the .method like above:
console.log(fitBitData.totalMiles); // 213.7

console.log(palette.red);

/// Or, using brackets with key inside:
console.log(fitBitData['totalSteps']); // 30737

console.log(palette['blue']); // #30336b

/// Also use a variable:
let color = 'yellow';
palette[color] // #f9ca24

/// Updating properties:
fitBitData.workoutsWeekly = '6 of 7';
fitBitData.totalMiles = 9.37;

// Adding properties:
fitBitData.heartBeating = true;

/// Nested arrays and objects:
const student = {
	firstName: 'Ava',
	lastName: 'Matrix',
	strengths: [ 'Playful', 'Innovative' ],
	exams: {
		midterm: 92,
		final: 88
	}
};

const avgScore = (student.exams.midterm + student.exams.final) / 2;

console.log(avgScore); //90

student.strengths[1]; // 'Innovative'

/// Common format is making an Array and each 
/// element in the array is an Object:
const shoppingCart = [
	{
		product: 'Super Mario Bros.',
		price: 13.99,
		quantity: 1
	},
	{
		product: 'Echo Dot',
		price: 29.99,
		quantity: 2
	},
	{
		product: 'GoTrax Mega',
		price: 799.00,
		quantity: 1
	}
];


