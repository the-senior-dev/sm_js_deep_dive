// AMD uses require() and define().
// math.js
define(function () {
    return {
        add: function (a, b) {
            return a + b;
        }
    };
});

// app.js
require(['math'], function (math) {
    console.log(math.add(1, 2)); // Output: 3 🌐
});
