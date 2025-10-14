//Spread and Rest
const separatorWithLines='==========================';
console.log(separatorWithLines)
console.log('     Spread operator      ')
console.log(separatorWithLines)

const hobbies =['Sports', 'Cooking', 'Chess'];
console.log('Original array:');
console.log(hobbies)
console.log('Simple copy with the .slice function:');
const firstCopy=hobbies.slice();
console.log(hobbies);
console.log();

console.log('Creating another copy of the array using [...array]');
const secondCopy=[...hobbies];
console.log('Add Baseball to the original array');
hobbies.push('Baseball');
console.log('Content of the original array after adding Baseball');
console.log(hobbies);
console.log('Content of the second copy after adding Baseball');
console.log(secondCopy);
console.log();

console.log(separatorWithLines)
console.log('     Rest operator      ')
console.log(separatorWithLines)
//Rest operator
const toArray = (...args) =>{
    return args;
};
console.log('Create a function that receives an undetermine number of arguments using (...args)')
console.log(toArray(1,2,3,'Nata'));