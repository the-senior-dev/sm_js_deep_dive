console.log(Symbol() === Symbol());

const reference = Symbol("reference");

const product = {
  [reference]: "MDP-02",
  id: 3,
  name: "laptop",
  price: 45,
};

console.log(Object.keys(product));
console.log(product[reference]);

// not enumerable
for (key in product) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(product));
