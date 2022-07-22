(function (module) {
  const someVariable = "someVar";
  function returnFirstChar(text) {
    // ...
  }
  module.returnFirstChar = returnFirstChar;
  module.firstChar = firstChar;
  window.myModule = module;
})({});



