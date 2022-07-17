/// for loops:
/// Log 'Hello:' plus the integer to 13
for (let i = 1; i <= 13; i++) {
	console.log('Hello', i);
}

/// Log number 1 to 33 squared and the total
for (let num = 1; num <= 33; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

/// for loop over array and print integer and string in
/// the array
const animals = [ 'lions', 'tigers', 'bears' ];

for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

console.log('OH MY!!!');

/// for loop over array and print each exam score
const examScores = [ 98, 91, 87, 93, 89, 83, 77 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

/// for loop over array's objects and print properties
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

/// for loop over myStudents to print average score
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}

console.log(total / myStudents.length);

/// Nested for loops:
let str = 'LOL';
for(let i = 0; i <= 4; i++) {
	console.log("OUTER Loop:", i);
	for(let j = 0; j < str.length; j++) {
		console.log('	INNER Loop:', str[j]);
	}
}


