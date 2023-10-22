// Basic Callback Example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // callback executed later
}

greet("Alice", function () {
    console.log("Callback executed!");
}); // Output: "Hello, Alice!" "Callback executed!"