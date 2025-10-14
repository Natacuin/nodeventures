console.log('Arrays are reference types, even using const, the items can change.')
const hobbies =['Sports', 'Cooking', 'Chess'];
//Arrays are reference type so can be changed even if were declared via const 
console.log('Original array');
console.log(hobbies);
console.log();
console.log('Adding a new item in the same array');
hobbies.push('Basketball');
console.log(hobbies);