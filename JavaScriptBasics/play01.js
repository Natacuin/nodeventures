//use let and const instead of var
const name='Nattanahel';
let age= 40;
const hasHbbies=true;

//now we can change age, but not name or hasHobbies.

function summarizeUser(userName, userAge, userHasHobbies)
{
    return(
        'Name is ' + userName +
        ' age is ' + userAge +
        ' and the user has hobbies:' + userHasHobbies
    );

}

console.log(summarizeUser(name,age,hasHbbies));

//To run and test this program just type node .\play00.js 
//be sure to open the terminal in the same folder of the file.