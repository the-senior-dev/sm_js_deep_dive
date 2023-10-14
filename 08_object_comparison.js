// 🍎 Initialize an object with a single property 'name' set to "apple"
const fruit = { name: "apple" };

// 🍏 Initialize another object with the same property and value
const anotherFruit = { name: "apple" };

// 🍎🔗 Create a reference 'sameFruit' that points to the same object as 'fruit'
const sameFruit = fruit;

// ❓ Compare 'fruit' and 'anotherFruit' by reference
// 🚫 It returns false because they are two different objects in memory
console.log(fruit === anotherFruit);  // Output: false

// ❓ Compare 'fruit' and 'sameFruit' by reference
// ✅ It returns true because they both point to the same object in memory
console.log(fruit === sameFruit);  // Output: true

// 👇 Solution for Deep Equality Comparison 👇

// 🧪 Define a function called jsonEqual to compare objects by their JSON stringified version
// 📝 Note: This approach has limitations, e.g., it won't handle functions or Date objects correctly
function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);  // 🔄 Convert objects to JSON strings and compare
}

// 📊 Test the jsonEqual function on 'fruit' and 'anotherFruit'
// ✅ It returns true because the objects have the same properties and values
console.log(jsonEqual(fruit, anotherFruit));  // Output: true
