//Objects can have functions, but to avoid undefined results, instead of arroa fuction syntax just [functionName](arguments)
const person ={
    name: 'Nattanahel',
    age: 40,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
};
person.greet();