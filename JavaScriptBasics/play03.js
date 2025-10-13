const person ={
    name: 'Nattanahel',
    age: 40,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
};
person.greet();
console.log(person);
console.log(person.greet());