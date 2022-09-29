// Shorthand Object Properties:

// Computed Properties: We can use a variable as a key
// name in an object literal property.
const user = 'Jools';

const userRoles = {
	[user]: 'Admin'
}
userRoles; // {Jools: "Admin"}

// Adding Methods to Objects: We can add fuctions as 
// propeties on objects, they are called Methods*
const math = {
	multiply: function(x, y) {
		return x * y;
	},
	divide:   function(x, y) {
		return x / y;
	},
	square:   function(x) {
		return x * x;
	}
}

math.multiply(3, 7); // 21

// Method Shorthand syntax:
const mathh = {
	blah: 'Hi!',
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	}
}

math.add(50, 60) // 110

// this.
function sayHi() {
	console.log("Welcome to 'this'!");
	console.log(this);
}
// this refers to the window (global scope
// object in the browser)

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
// person.fullName()

// this here, console.logs the 'person' object
// that it is in.

// Annoy-O-Matic
const annoyer = {
	phrases: [ 'Literally', 'cray cray', "I can't even!", 'Totes', 'YOLO', "Can't stop, won't stop" ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {}
};
