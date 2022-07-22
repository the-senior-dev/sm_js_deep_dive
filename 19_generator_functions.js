function* countToFive() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const iterator = countToFive();

for (value in iterator) {
  console.log(value);
}
