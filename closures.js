const color = "blue";

function createFunc() {
  const color = "red";
  return function () {
    return color;
  };
}

const myFunc = createFunc();

myFunc(); // ???



