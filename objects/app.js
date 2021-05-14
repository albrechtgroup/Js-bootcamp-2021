const student = {
	firstName: 'Mayla',
	lastName: 'Matrix',
	strengths: [ 'Playful', 'Snuggly' ],
	exams: {
		midterm: 92,
		final: 88
	}
};

const avgScore = (student.exams.midterm + student.exams.final) / 2;

console.log(avgScore);
