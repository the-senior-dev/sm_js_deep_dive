// 🌎 Global Scope
const globalVar = "I'm a global variable!";  // This variable is accessible everywhere

// 🏢 Function Scope
function printValue() {
  const functionVar = "I'm in the function scope!";  // Accessible within this function only

  if (true) {
    // 📦 if Statement Scope
    const ifVar = "I'm in the if statement scope!";  // Accessible within this if block

    for (let i = 0; i < 20; i++) {
      // 🔄 for Loop Scope
      // i is accessible only within this for loop
      console.log(globalVar);
      console.log(`Loop index: ${i}`);
    }

    // ✅ i is NOT accessible here
    console.log(`Loop index outside loop: ${i}`);  // Uncommenting this line would cause an error
  }

  // ✅ ifVar is NOT accessible here
  // console.log(ifVar);  // Uncommenting this line would cause an error
}

// 🚀 Invoke the function
printValue();

// ✅ functionVar is NOT accessible here
// console.log(functionVar);  // Uncommenting this line would cause an error

// 🌎 globalVar is accessible here
console.log(`Global Variable: ${globalVar}`);
