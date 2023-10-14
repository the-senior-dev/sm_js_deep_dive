// Initialize counter
let counter = 0;

// While loop to print numbers 0 to 4
while (counter < 5) {
  console.log("While loop counter: " + counter); // Output will be 0, 1, 2, 3, 4
  counter++;
}

// For loop to print numbers 0 to 4
for (let i = 0; i < 5; i++) {
    console.log("For loop counter: " + i); // Output will be 0, 1, 2, 3, 4
}

// Using a for loop inside a while loop
let outerCounter = 0;
while (outerCounter < 3) {
  console.log("Outer loop iteration: " + outerCounter); // Output will be 0, 1, 2

  for (let innerCounter = 0; innerCounter < 2; innerCounter++) {
    console.log("  Inner loop iteration: " + innerCounter); // Output will be 0, 1 for each outer loop
  }

  outerCounter++;
}
