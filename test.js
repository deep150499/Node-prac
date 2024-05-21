let name = 'Abhishek';
console.log(name);

const greet = (name) => {
    console.log(`Hello ${name}`);
}

greet('Sidh');
greet('Nidhi')

console.log(global);

setTimeout(() => {
    console.log('hey');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('set-interval');
},1000)


console.log(int);
console.log(__dirname);
console.log(__filename);