const name="Nattanahel";
let age=40;
const hasHbbies=true;

//with function keyword
const simpleFunction=function(userName,userAge){
    return 'The user ' + userName + ' is ' + userAge +' years old.';
}

//arrow funtion
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return(
            'Name is ' + userName +
            ' age is ' + userAge +
            ' and the user has hobbies:' + userHasHobbies
        );
};

const smallAdd=(a,b) => a+b;
const addOne = a => a+1;

console.log(simpleFunction(name,age));
console.log(summarizeUser(name,age,hasHbbies));
console.log('The sum of 3 + 5 is');
console.log(smallAdd(3,5));
console.log('Adding 1 to 5 is equal to:');
console.log(addOne(5));