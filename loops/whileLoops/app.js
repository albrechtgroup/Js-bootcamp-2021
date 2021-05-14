for (let i = 0; i <= 7; i++) {
	console.log(i);
}
console.log('---------------------------');

let j = 0;
while (j <= 7) {
	console.log(j);
	j++;
}
console.log('---------------------------');
//////////

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('----------------------------');
