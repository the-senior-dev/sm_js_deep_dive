// Enclose code inside an IIFE to create a new scope.
(function() {
    var iifeVar = "I'm not global! 🎉";
})();

console.log(typeof iifeVar); // Output: 'undefined' 🚫