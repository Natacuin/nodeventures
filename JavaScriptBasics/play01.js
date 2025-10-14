//New way to define variables with let or constants with const instead of var
const name='Nattanahel';
let age= 40;
const hasHbbies=true;

//now we can change age, but not name or hasHobbies.
//Next line will raise an error
//hasHbbies=false;

function summarizeUser(userName, userAge, userHasHobbies)
{
    return(
        'Name is ' + userName +
        ' age is ' + userAge +
        ' and the user has hobbies:' + userHasHobbies
    );

}

console.log(summarizeUser(name,age,hasHbbies));