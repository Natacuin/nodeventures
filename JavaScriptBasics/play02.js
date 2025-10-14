const name="Nattanahel";
let age=40;
const hasHbbies=true;

//It is possible to assign a function to a variable
const simpleFunction=function(userName,userAge){
    return 'The user ' + userName + ' is ' + userAge +' years old.';
}

//Arrow funtion. No need to use the word 'function'
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return(
            'Name is ' + userName +
            ' age is ' + userAge +
            ' and the user has hobbies:' + userHasHobbies
        );
};

//Arrow functions with only one line doesn't need {}
const smallAdd=(a,b) => a+b;

//Arrow function with only one parameter doesn't need ()
const addOne = a => a+1;

console.log(simpleFunction(name,age));
console.log(summarizeUser(name,age,hasHbbies));
console.log('The sum of 3 + 5 is');
console.log(smallAdd(3,5));
console.log('Adding 1 to 5 is equal to:');
console.log(addOne(5));