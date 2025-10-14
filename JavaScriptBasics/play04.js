const hobbies =['Sports', 'Cooking', 'Chess'];
//Regular for loop.
for (let hobbie of hobbies)
{
    console.log(hobbie);
}

//Map method. First array doesn't change. It takes a functions as a parameter that runs for each item in the arrary.
const greatHobbies=hobbies.map(item=>{
    if(item=='Chess') 
        return item;
    else
        return 'No great sport';
});
console.log(hobbies);
console.log(greatHobbies);