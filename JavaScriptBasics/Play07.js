const person ={
    name: 'Natta',
    age:40,
    hasHobbies:true
}

//Regular way to get only part of an object
const printName=(personData)=>{
    console.log(personData.name);
}
//Using destructuring to ask only for the value needed.
const printNameUsingDestructuring =({name})=>{
    console.log(name);
}

console.log('Printing the name using regular code');
printName(person);
console.log('Printing the name using destructuring');
printNameUsingDestructuring(person);



console.log();
//Destructuring an Array
const hobbies =['Chess','Baseball'];
console.log('Printing items of the array using regular code');
console.log(hobbies);
const [item1, item2]=hobbies;
console.log('Printing items of the array using destructuring');
console.log(item1,item2);

//Destructuring an object
const {age}=person;
console.log('Printing a value of an object without a function const {arg}=object;');
console.log(age);
