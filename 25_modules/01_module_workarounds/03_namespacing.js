// Create a single global object to attach all functionalities.
var MyNamespace = {
    myFunction: function() {
      console.log("Namespaced! 🚀");
    }
};

MyNamespace.myFunction(); // Output: 'Namespaced! 🚀'