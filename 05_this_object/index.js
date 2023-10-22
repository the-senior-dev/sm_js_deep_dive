"use strict";
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const someVar = "some value";


function myNormalFunction() {
  console.log(this);
}

{ // local scope
    {
        const someVar = "some other value";
        function scopedFunction() {
            console.log(this);
        }
        console.info("this in local scope:")
        scopedFunction();
    }
}


const myArrowFunction = () => {
    console.log(this);
}

// this in object methods
const obj = {
    name: "my object",
    myNormalFunction: myNormalFunction,
    myArrowFunction: myArrowFunction,
    attachedArrowFunction: () => {
        console.log(this);
    }
}

console.info("this in global scope:")
console.log(this)

console.info("this in normal function:")
myNormalFunction()

console.info("this in arrow function:")
myArrowFunction()

console.info("this in object method:")
obj.myNormalFunction()

console.info("this in object method - arrow:")
obj.myArrowFunction()

console.info("this in object method - arrow attached:")
obj.attachedArrowFunction()