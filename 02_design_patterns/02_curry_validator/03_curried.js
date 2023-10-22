// Generic validation function
function createValidator(rule, errorMessage) {
    return function (value) {
        if (!rule(value)) {
            throw new Error(errorMessage) ;
        }
        return null;  // No error
    };
}

// Specialized validation functions
const isNotEmpty = createValidator(value => value.trim().length > 0, "Field cannot be empty");
const isNumber = createValidator(value => !isNaN(value), "Must be a number");
const isEmail = createValidator(value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), "Invalid email format");

// Usage
const nameField = " John ";
const ageField = "30a";
const emailField = "john.doe@example.com";

console.log(isNotEmpty(nameField));  // Output: null (no error)
console.log(isNumber(ageField));     // Output: "Must be a number"
console.log(isEmail(emailField));    // Output: null (no error)
