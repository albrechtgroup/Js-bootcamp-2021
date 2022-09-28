///  Default Parameters (The New way)
function multiply(a, b = 1) {
    return a * b;
}

multiply(3); // 3
multiply(3, 5); // 15

// Order of Parameters MATTER:
// Default Parameters cannot be first*
const greet = (person, greeting = 'Hi') => {
    // Here is where arguements can be switched*
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
const numms1 = [1, 2, 3];
const numms2 = [4, 5, 6];

[...numms1, ...numms2]; // [1, 2, 3, 4, 5, 6]

['a', 'b', ...numms2]; // ["a", "b", 4, 5, 6]

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

// New array 'mollusca' with copies of both arrays inside
const mollusca = [...cephalopods, ...gastropods];
// Makes an exact copy of ""
const gastroCopy = [...gastropods];

// Spread in Object Literals:
// Copies properties from one object into another 
// object literal {}.
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

const dog = {...canine, isPet: true};
// {family: "Caninae", furry: true, isPet: true}
const lion = {...feline, genus: 'Panthera'};
// {legs: 4, family: "Felidae", genus: "Panthera"}

// Rest Params: Collects all remaining arguements into
// in actual array.
// ...Rest is similar to spread but it 'Collects' data
function sumAll(...nums) {
    let total = 0;
    for(let n of nums) total += n;
    return total;
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15

// Destructuring: A short, clean syntax to 'unpack'
// - Values from arrays - Properties from objects
// Into distinct variables.
// Array Destructuring: 'Unpack' based on Position in array
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];
// Order Matters*
const [gold, silver, bronze] = raceResults;
gold; // "Eliud Kipchoge"
silver; // "Feyisa Lelisa"
bronze; // "Galen Rupp"

// *Comma skips places/elements in the array
const [firstt, , , fourth] = raceResults;
const [fastest, ...everyoneElse] = raceResults;
fastest; // "Eliud Kipchoge"
everyoneElse; // ["Feylisa Lelisa", "Galen Rupp"]

// Object Destructuring: The Variables are based on 
// the key name of properties. 
const newHire = {
    first: "Andrew",
    last: "Albrecht",
    country: "U.S.A.",
    title: "Software Engineer"
}
const {first,last,country} = newHire;
first; // "Andrew"
last; // "Albrecht"
country; // "U.S.A."

// Nested Destructuring: 
const friends = [{
    first: "Andrew",
    last: "Albrecht",
    home: "U.S.A.",
    title: "Software Engineer"
},
{
    first: "P",
    last: "Diddy",
    home: "U.S.A.",
    title: "Rap Mogul"
},
{
    fake: "Ava",
    last: "Miller",
    home: "France",
    title: "Entertainer"
}
]

const [,,{fake}] = friends; // 'Ava'
const [,{title}] = friends; // 'Rap Mogul'

// Param Destructuring: Inside of the function definition
// Where the Parameters are listed.
const fullNme = ({frst, lst}) => {
    return `${frst} ${lst}`
}
const runner = {
    frst: "Eliud",
    lst: "Kipchoge",
    country: "Kenya",
}
fullNme(runner); // "Eliud Kipchoge"

// Example: 
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
} // Status: 200 OK

