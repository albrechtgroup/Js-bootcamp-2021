// 'while' loop - continues to run as long as the
// condition is true. *Cautious of INFINITE Loops*
// 'for' loop:
for (let i = 0; i <= 7; i++) {
	console.log(i);
}
console.log('----------------------');

// 'while' loop:
let num = 0;
while (num < 7) {
	console.log(num);
	num++;
}
console.log('----------------------');

let j = 0;
while (j <= 7) {
	console.log(j);
	j++;
}
console.log('----------------------');

/// *While loop is good for situations when you dont
/// know how many times the loop will run..*
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congradulations, THE END')
console.log('-----------------------');
/// while(some condition)
/// in the loop, update or attempt to make thet 
/// condition false.