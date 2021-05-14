///////  this.
function sayHi() {
	console.log("Welcome to 'this'!");
	console.log(this);
}
//// this refers to the window (global scope
//   object in the browser)

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		console.log(this);
		const fullName = this.fullName();
		console.log(`${fullName} is a person!!`);
	}
};
/// person.fullName()

/// this here, console.logs the 'person' object
//  that it is in.

////////////  Annoy-O-Matic
const annoyer = {
	phrases: [ 'Literally', 'cray cray', "I can't even!", 'Totes', 'YOLO', "Can't stop, won't stop" ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {}
};
