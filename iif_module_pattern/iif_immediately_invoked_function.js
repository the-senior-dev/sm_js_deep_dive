(function (module) {
  // module scoped variables - private
  const someVariable = "someVar";
  function returnFirstChar(text) {
    return text[0];
  }
  const firstChar = returnFirstChar(someVariable);

  // public - module vars
  module.returnFirstChar = returnFirstChar;
  module.firstChar = firstChar;
  window.myModule = module;
})({});

// IIF  - Immediately Invoked function
