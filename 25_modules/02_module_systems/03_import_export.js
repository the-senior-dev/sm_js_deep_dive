// Use import and export for a cleaner syntax.
// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math';

// tree-shaking, only import what you need
// dynamic imports
// code splitting
// static code analysis: eslint, prettier, typescript

console.log(add(1, 2)); // Output: 3 🌟
