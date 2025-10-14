//Javascript traditional way to define variables.
var name='Nattanahel';
var age= 40;
var hasHbbies=true;

//Javascript tradicional way to define functions.
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