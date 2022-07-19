// Where is a available?

// Global Scope
function printValue() {}{
  // Function scope
  const myVar = true;
  if (true) {
    // if statement scope
    for (let i = 0; i < 20; i++) {
      // for statement scope
      console.log(i);
    }
  }

  {
    
  }
}



printValue();
