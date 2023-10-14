// Node.js style of importing and exporting modules.
// math.js
module.exports.add = function (a, b) {
    return a + b;
};

// app.js
const math = require('./math');
console.log(math.add(1, 2)); // Output: 3 👌
