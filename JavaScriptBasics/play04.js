const hobbies =['Sports', 'Cooking', 'Chess'];
for (let hobbie of hobbies)
{
    console.log(hobbie)
}


//Map method. First array doesn't change.
const greatHobbies=hobbies.map(item=>{
    if(item=='Chess') 
        return item;
    else
        return 'No great sport';
});
console.log(hobbies);
console.log(greatHobbies);