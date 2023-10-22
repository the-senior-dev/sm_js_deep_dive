// DRY - Don't Repeat Yourself
// Functions are first-class citizens in JavaScript
function map(array, operation) {
    // log performance of a function 
    if(typeof a !== 'number') {
        throw new Error('a must be a number');
    }
    return operation(a, b);
}

function performance(func){
    return function(...args) {
        console.time(new Date());
        const result = func(...args);
        console.time(new Date());
        return result;
    }
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, subtract)); // Output: 2