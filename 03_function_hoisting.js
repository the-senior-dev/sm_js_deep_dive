// 🚀 Main Function: Determines what message to show
function reply(action) {
  // 📦 Hoisting in Action: sayHello is accessible here even before its actual definition
  if (action === "greet") return sayHello("foo");  
  return `bye ... ${additionalText}!`;  // ❗ Error: additionalText is not defined
}

// 📦 Let and Const Hoisting: Initialized but not assigned
let additionalText;  
const additionalConstText = "read me";  // Const requires immediate initialization

{
  // 👋 Helper Function: Greets the user
  // 📜 Defined Later: But thanks to hoisting, it's like it was always there!
  function sayHello(username) {
    return `Hi, I am ${username}!`;
  }
  
  // 🚀 Set Let and Const: Now they're available for use
  additionalText = "see you again"; 
}

// Run reply function
console.log(reply("greet"));  // Output: "Hi, I am foo!"

