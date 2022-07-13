/// Arrays:
let shoppingList = ['Avacodos', 'Cereal', '2% Milk'];

/// Update/change value:
shoppingList[2] = 'Chocolate Almond Milk';


/// Array Methods:
/// This array is broken up into different lines due
/// to the length of the strings.
let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

/// .pop - removes from the End *PERMANENTLY & 
/// returns the item
topSongs.pop(); // 'Life of Mars'

/// .push - adds to the End of array
topSongs.push('Fortunate Son');
topSongs.push('Strokin');

let dirtyDishes = ['big platter'];

/// .unshift - adds to Start 
dirtyDishes.unshift('big plate');
dirtyDishes.unshift('small plate');
dirtyDishes.unshift('bowl');
dirtyDishes.unshift('cup');

/// .shift - removes from the Start of array &
/// returns the item
dirtyDishes.shift(); // 'cup'
dirtyDishes.shift(); // 'bowl'
dirtyDishes.shift(); // 'small plate'

/// .concat() - Used to merge two or more arrays:
/// *Order matters
let fruits = ['Strawberries', 'Watermelon'];
let veggies = ['Asparagus', 'Brocolli'];
let meats = ['Steak', 'Turkey'];

let market = fruits.concat(veggies, meats);

/// .includes() - Determines whether an array includes
/// a certain value. Returning true or false
let array1 = [1, 2, 3, 4];

console.log(array1.includes(3)); // true

/// 
 

