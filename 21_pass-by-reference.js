const myColor = "red";

// pass by reference of pass by value ?
function changeColor(color) {
  if (color == "red") {
    color = "blue";
  } else {
    color = "yellow";
  }
  return color;
}

console.log(changeColor(myColor));
console.log(myColor);


// Objects

const theme = { color: "red" };

function changeColorTheme(theme) {
  if (theme.color === "red") {
    theme.color = "blue";
  } else {
    theme.color = "red";
  }
  return theme.color;
}

console.log(changeColorTheme(theme));
console.log(theme);
