// Arrays:
let shoppingList = ['Avacodos', 'Cereal', '2% Milk'];

// Update/Change value: Arrays are Changable, unlike
// variables.
shoppingList[2] = 'Chocolate Almond Milk';
shoppingList[0] = 'Flour Tortillas';
shoppingList[1] = 'Ice Cream';

console.log(shoppingList); // ['Chocolate Almond Milk', etc..] 

// Array Methods:
// .length
console.log(shoppingList.length); // 3

// This array is broken up into different lines due
// to the length of the strings.
let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

// .push - adds to the End of array
topSongs.push('Fortunate Son');
topSongs.push('Strokin');
console.log(topSongs);

// .pop - removes from the End *PERMANENTLY & 
// returns the item
topSongs.pop(); // 'Strokin'
console.log(topSongs);

// Ideal kitchen sink 'Stack"
// Last thing added, is First thing out.. l.I.F.O.
let dirtyDishes = ['big platter'];
// .unshift - adds to Start 
dirtyDishes.unshift('big plate');
dirtyDishes.unshift('small plate');
dirtyDishes.unshift('bowl');
dirtyDishes.unshift('cup');

// .shift - removes from the Start of array &
// returns the item
dirtyDishes.shift(); // 'cup'
dirtyDishes.shift(); // 'bowl'
dirtyDishes.shift(); // 'small plate'

// .concat() - Used to merge two or more arrays:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
// *Order matters
console.log(array2.concat(array1));
// ['d', 'e', 'f', 'a', 'b', 'c',]


let fruits = ['Strawberries', 'Watermelon'];
let veggies = ['Asparagus', 'Brocolli'];
let meats = ['Steak', 'Turkey'];
// Can also concat Several arrays at a time:
let market = fruits.concat(veggies, meats);
console.log(market);

// .includes() - Determines whether an array includes
// a certain value. Returning true or false
let array3 = [1, 2, 3, 4];

console.log(array3.includes(3)); // true

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'butter',
    'sugar',
    'cheese'
];

if (ingredients.includes('flour')) {
    console.log('I am Glueten-Free, I cannot eat that.');
}

// .indexOf() - method returns the first index at 
//  which the element liste can be found in array:
ingredients.indexOf('sugar');  // 4

// .reverse() - method reverses an array IN PLACE*:
let arrayReverse = ['first', 'second', 'third'];

console.log(arrayReverse.reverse()); 
// ['third', 'second', 'first']
 
// .join() - returns a new String combining all 
// elements of the array:
let noWorries = ['Hak', 'una', 'matada'];

console.log(noWorries.join()); // Hak,una,matada
console.log(noWorries.join('-')); // Hak-una-matada
console.log(noWorries.join('')); // Hakunamatada

// .slice() - method returns a COPY of a portion of
// the array into a new array object:
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
// Up to and Not including index 3*
let swimmers = animals.slice(0, 3);
// ['shark', 'salmon', 'whale']

let mammals = animals.slice(2, 4);
// ['whale', 'bear']
let reptiles = animals.slice(4);
// ['lizard', 'tortoise']

// Makes a copy of the array*
let copy = animals.slice();

// .splice() - method CHANGES the contents of ar array
// by removing or replacing existing elements, 
// and/or adding new elements:

// .splice(starting, deleteCount, itemsToInsert)
animals.splice(3,2); // ['whale', 'bear']

// INSERTING with splice:
// at index 1, delete 0 items, and insert octopus
animals.splice(1, 0,'octopus');

// DELETING with splice:
// at index 5, delete 2 items
animals.splice(5, 2);

// REPLACING with splice:
// at index 3, delete 2 items, and replace them with 'orca'
animals.splice(3, 2, 'orca');

// .sort() - sorts the elements of an array IN PLACE
// and returns the sorted array
// *They are sorted by comparing their UTF-16 values
let ladySongs = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

ladySongs.sort(); // ['Angie', 'Jolene', 'Maggie May', 'Mrs. Robinson', 'Roxanne']

// Reference Types*

// 'Const' and arrays:
// Values in arrays Can change, as long as the 
// reference remains the same
const myEggs = ['brown', 'brown'];
myEggs.push('purple');
console.log(myEggs); 

myEggs[0] = 'green';
console.log(myEggs); // ['green', 'brown', 'purple'];

myEggs = ['blue', 'pink']; // ERROR. Nope!!

// My Analogy* const groceryList = [], will always 
// be a list with items; But the items themselves
// can be Changed, Modified, Updated..
const groceryList = [];

// Nested arrays:
const colors = [
    ['green', 'olive'],
    ['purple', 'lavendar'],
    ['blue', 'royal blue']
];

colors[0][1]; // 'olive'
colors[1][0]; // 'purple'






 
 

