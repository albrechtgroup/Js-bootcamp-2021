/// Switch Operator
let day = 7;

switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;
	default:
		console.log('Invalid Day!');
}

/// Ternary Operator ("three")
let num = 7;

if (num === 7) {
	console.log('LUCKY!!!');
} else {
	console.log('BAD!');
}

// Turns into below
num === 7 ? console.log('LUCKY!!!') : console.log('BAD!');
