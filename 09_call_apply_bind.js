const numbers = [1, 1, 1];

function sumThis(a, b, c) {
  return this.value + a + b + c;
}

const newThis = { value: 1 };

// What will that return?
console.log(sumThis.apply(newThis, numbers));
console.log(sumThis.call(newThis, ...numbers));

const newSum = sumThis.bind(newThis, ...numbers);
console.log(newSum());


