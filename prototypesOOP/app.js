// Constructor Functions:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// The 'new' operator:
let andy = new Car('Mazda', '929', 1992);

console.log(andy.model);  // '929'
