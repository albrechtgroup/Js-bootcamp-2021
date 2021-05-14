alert('Connected Son!');

///////////// for loops
for (let i = 1; i <= 13; i++) {
	console.log('Hello', i);
}
//////
for (let num = 1; num <= 33; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}
//////
const animals = [ 'lions', 'tigers', 'bears' ];

for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

console.log('OH MY!!!');
///////
const examScores = [ 98, 91, 87, 93, 89, 83, 77 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}
//////
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
////// myStudents Average
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}

console.log(total / myStudents.length);
