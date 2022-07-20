const fruit = { name: "apple" };
const anotherFruit = { name: "apple" };

const sameFruit = fruit;

console.log(fruit === anotherFruit);
console.log(fruit === anotherFruit);

// Solution: deep equality
function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(jsonEqual(fruit, anotherFruit));
