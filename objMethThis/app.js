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

// Method Shorthand syntax: Dont have to use a Key: 
// Value pair syntax
const mathh = {
	blah: 'Hi!',
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	}
}

mathh.add(50, 60) // 110

const auth = {
	username: 'TommyBoy',
	logIn() {
		console.log("YOU ARE NOW LOGGED IN")
	},
	logOut() {
		console.log("GOODBYE")
	}
}

// Keywork 'this': "A reference to the current 
// execution's scope"
function sayHi() {
	console.log("Welcome to 'this'!");
	console.log(this);
}
// 'this' above refers to the window (global scope
// object in the browser) With a function NOT in 
// an object*

// Using 'this' in Methods:
// 'this' Below, console.logs the 'person' object
// that it is in. not the global window*
const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} AKA ${nickName}`;
	},
	// 'this' in printBio func, refers to the 'person'
	// parent/object as well
	printBio() {
		console.log(this);
		const fullName = this.fullName();
		console.log(`${fullName} is a person!!`);
	}
};
person.fullName() // 'Cherilyn Sarkisian AKA Cher'

// 'this' Invocation context: The value of 'this'
// depends on the invocation context of the function 
// it is used in.
// "The value of 'this' will change, depending on 
// how the function is executed, not just where
// you write it"


// Annoy-O-Matic Demo:
const annoyer = {
	phrases: [ 'Literally', 'cray cray', "I can't even!", 'Totes', 'YOLO', "Can't stop, won't stop" ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {}
};

annoyer.pickPhrase(); // 'YOLO'