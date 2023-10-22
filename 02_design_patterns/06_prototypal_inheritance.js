const parent = { 
    firstName: "anna", 
    lastName: "foo" ,
    eyeColor: "blue",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    fullNameWithAge: function() {
        return this.firstName + " " + this.lastName + " " + this.age;
    },
    fullNameWithEyeColor: function() {  
        return this.firstName + " " + this.lastName + " " + this.eyeColor;
    }
};

const child = Object.create(parent);

child.firstName = "max";
child.age = 2;
child.fullName = function() {
    return "";
};

const gradchild = Object.create(child);

gradchild.firstName = "gradchild";
gradchild.age = 0;

console.log(gradchild.fullName());
