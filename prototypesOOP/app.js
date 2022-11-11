// Constructor Functions:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// The 'new' operator:
let andy = new Car('Mazda', '929', 1992);

console.log(andy.model);  // '929'

// The 'new' operator:
// 1. Creates a blank, plain JavaScript object.
// 2. Links(sets the constructor of) 'this' object to 
//    another object.
// 3. Passes the newly created object from step 1 as
//    the this context.
// 4. Returns this if the function doesn't return its
//    own object.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

const color1 = new Color(30, 70, 90);
const color2 = new Color(90, 70, 30);

// JS Classes: The *Better alternative and less clunky
// than Above:



// 'Extends'


// 'Super'