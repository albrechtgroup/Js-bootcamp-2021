alert('Scope Connected!');

////////////// 'var'
// let animals = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
// var i = 10;
// for (var i = 10; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
// console.log(i);

/////////////// 'let'
let animals = [ 'Grizzly bear', 'Panda bear', 'Black bear' ];
let i = 10;
for (let i = 10; i < animals.length; i++) {
	console.log(i, animals[i]);
}
console.log(i);

////////////// 'lexical Scope'
function outer() {
	let movie = 'Amadeus';

	function inner() {
		let movie = 'The Shining';
		console.log(movie.toUpperCase());
	}
	inner();
}
