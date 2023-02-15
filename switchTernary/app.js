// Switch Statement:
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

// We can double them without the 'break;', it the 
// outcome is the same
let emoji = 'happy face';

switch (emoji) {
	case 'heart':
	case 'lips':
		console.log('red');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'happy face':
	case 'sad face':
		console.log('YELLOW!!!');
		break;
}

// Ternary Operator- 3 Pieces:
// Replaces only the 'if, else' statement. Where if 
// its not the one thing, its the other.

// Standard if, else:
let num = 7;

if (num === 7) {
	console.log('LUCKY!!!');
} else {
	console.log('BAD!');
}

// Turnary turns into a single line below: ? :
num === 5 ? console.log('LUCKY!!!') : console.log('BAD! Not lucky at ALL!!!');

// Use Turnary to assign a value to a variable:
let status = 'offline';

let color;
if(status === 'offline') {
	color = 'red';
}
else{
	color = 'green';
}

// Or with Ternary Operator:
let colors = status === 'offline' ? 'red' : 'green';
console.log(color);