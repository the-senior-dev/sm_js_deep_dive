// Object literal notation to create an object
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2020,
    startEngine: function() {
      return "Engine started!";
    },
    details: function() {
      return `This is a ${this.year} ${this.make} ${this.model}`;
    },
  };
  
  // Accessing properties using dot notation
  console.log(car.make); // Output: "Tesla"
  
  // Accessing properties using bracket notation
  console.log(car["model"]); // Output: "Model S"
  
  // Calling a method
  console.log(car.startEngine()); // Output: "Engine started!"
  
  // Another way to call a method
  console.log(car["details"]()); // Output: "This is a 2020 Tesla Model S"
  
  // Adding a new property
  car.color = "Red";
  console.log(car.color); // Output: "Red"
  
  // Updating an existing property
  car.year = 2021;
  console.log(car.year); // Output: 2021
  
  // Deleting a property
  delete car.color;
  console.log(car.color); // Output: undefined
  