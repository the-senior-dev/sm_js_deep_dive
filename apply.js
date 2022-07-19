const numbers = [1, 1, 1];

function sumThis(a, b, c) {
  return this + a + b + c;
}

// What will that return?
sumThis.apply(5, numbers);






