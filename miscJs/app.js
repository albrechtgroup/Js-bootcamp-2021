///  Default Parameters (The New way)
function multiply(a, b = 1) {
    return a * b;
}

multiply(3); // 3
multiply(3, 5); // 15

// Order of Parameters MATTER:
// Default Parameters cannot be first*
const greet = (person, greeting = 'Hi') => {
    // Here is where arguement can be switched*
    console.log(`${greeting}, ${person}!`)
}

greet('Ava'); // Hi, Ava!
// Arguements are switched below*
greet('Hello', 'Mariya'); // Mariya, Hello! 

// Spread for Function Calls:
// Expands an iterable(array, string, etc.) into a
// list of arguements.

const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
// Use Spread!
Math.max(...nums); // 9
// Same as calling Math.max(9,3,2,8)

// Spread in Array Literals:
// Create a new Array using and existing array.
// Spreads the elements from one into the other.
const numms1 = [1, 2, 3, 4];
const numms2 = [5, 6, 7, 8];




