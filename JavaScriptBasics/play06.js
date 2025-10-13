//Spread and Rest
const hobbies =['Sports', 'Cooking', 'Chess'];
const firstCopy=hobbies.slice();

console.log('First array');
console.log(hobbies);
console.log('Creating another copy of the array');
const secondCopy=[...hobbies];
console.log('Add Baseball to the original array');
hobbies.push('Baseball');
console.log('Content of the original array after adding Baseball');
console.log(hobbies);
console.log('Content of the second copy after adding Baseball');
console.log(secondCopy);


//Rest operator
const toArray = (...args) =>{
    return args;
};

console.log(toArray(1,2,3,'Nata'));