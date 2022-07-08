/// Switch Operator:
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

/// Ternary Operator- 3 Pieces:
/// Replaces only the 'if, else' statement. Where if 
/// its not the one thing, its the other.

/// Standard if, else:
let num = 7;

if (num === 7) {
	console.log('LUCKY!!!');
} else {
	console.log('BAD!');
}

// Turns into below
num === 5 ? console.log('LUCKY!!!') : console.log('BAD! Not lucky at ALL!!!');

let status = 'online';

let color;
if(status === 'offline') {
	color = 'red';
}
else{
	color = 'green';
}

/// Or with Ternary Operator:
let colors = status === 'offline' ? 'red' : 'green';