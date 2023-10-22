// Validation functions without being DRY
function validateNotEmpty(value) {
    if (value.trim().length === 0) {
        return "Field cannot be empty";
    }
    return null;  // No error
}

function validateIsNumber(value) {
    if (isNaN(value)) {
        return "Must be a number";
    }
    return null;  // No error
}

function validateIsEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
        return "Invalid email format";
    }
    return null;  // No error
}

// Usage
const nameField = " John ";
const ageField = "30a";
const emailField = "john.doe@example.com";

console.log(validateNotEmpty(nameField));  // Output: null (no error)
console.log(validateIsNumber(ageField));   // Output: "Must be a number"
console.log(validateIsEmail(emailField));  // Output: null (no error)
