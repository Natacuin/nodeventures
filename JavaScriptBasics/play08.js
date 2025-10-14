//Regular way to handle async code.
setTimeout(() => {
    console.log('Hello world from the timer');
    fetchData(text=>{
        console.log(text);
    });
}, 3000);

const fetchData = callback =>{
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

setTimeout(() => {
    console.log('Hello world from the timer');
    fetchDataWithPromise().then(text=>{
        console.log(text);
    });
}, 3000);

const fetchDataWithPromise = () =>{
    const promise= new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

console.log('This message will appear before')