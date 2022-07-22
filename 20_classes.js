class Person {
  name = ""; // public
  #age = 0; // private
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  greeting() {
    return `$Hi, I am ${this.name} and I study at ${this.school} `;
  }
  static sayHi() {
    // static
    console.log("I am a static method");
  }
}

class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  greeting() {
    return `$Hi, I am ${this.name} and I study at ${this.school} `;
  }
}

const mario = new Person("mario", 45);

// console.log(mario.#age);
