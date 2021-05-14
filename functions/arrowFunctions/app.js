console.log('Connected...');
////////////  Arrow Functions
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

const multiply = (x, y) => {
	return x * y;
};

const greet = () => {
	console.log('Hi!');
};
////////////////////////

const square3 = (n) => {
	return n * n;
};
//// alittle shorter
const square4 = (n) => n * n;
////  Shortest
const square5 = (n) => n * n;

/////  Example
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const doubles1 = nums.map(function(n) {
	return n * 2;
});
////
const doubles2 = nums.map((n) => {
	return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

/////// reduce
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const maxGrade = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
});

///  99
