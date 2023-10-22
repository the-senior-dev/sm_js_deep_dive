// Generic validation function
function validate(rule, errorMessage, value) {
    if (!rule(value)) {
        return errorMessage;
    }
    return null;  // No error
}

// Validation rules
const isNotEmptyRule = value => value.trim().length > 0;
const isNumberRule = value => !isNaN(value);
const isEmailRule = value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

// Usage
const nameField = " John ";
const ageField = "30a";
const emailField = "john.doe@example.com";

console.log(validate(isNotEmptyRule, "Field cannot be empty", nameField));  // Output: null (no error)
console.log(validate(isNumberRule, "Must be a number", ageField));          // Output: "Must be a number"
console.log(validate(isEmailRule, "Invalid email format", emailField));     // Output: null (no error)
