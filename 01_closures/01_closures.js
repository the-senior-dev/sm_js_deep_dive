// Define a variable `color` in the global scope
const globalColor = "blue";

// Define a function `createFunc` that contains its own `color` variable in its scope
function createFunc() {
  // This `color` variable is local to `createFunc`
  const localColor = "red";

  // Define and return an anonymous function that references `localColor`
  return function () {
    // The returned function retains access to the `localColor` variable from the outer function's scope,
    // even after `createFunc` has finished execution.
    return localColor;
  };
}

// Invoke `createFunc` to get a function, which is stored in `myFunc`
const myFunc = createFunc();


module.exports = myFunc;

// Invoke `myFunc` to execute the returned function from `createFunc`
// It still has access to `localColor`, so it returns "red"
console.log(myFunc());  // Output: "red"