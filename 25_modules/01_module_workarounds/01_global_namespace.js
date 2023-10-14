// In the global scope, variables are accessible everywhere.
var globalVar = "I'm global! 👀";


// Namespace collisions can cause unexpected behavior
// Imagine if another file also defined a global variable called `globalVar`
// As applications grow, it becomes more and more likely that this will happen
var globalVar = "I'm also global! 👀";
