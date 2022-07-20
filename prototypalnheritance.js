const parent = { firstName: "anna", lastName: "foo" };
const child = { firstName: "max" };

console.log(child["__proto__"]);

Object.setPrototypeOf(child, parent);

console.log(child["__proto__"]);

console.log(child.lastName.toUpperCase());
