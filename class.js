class Student {
  name;
  email;
  #phone; //private
  address;
  group;

  static role = "student";

  constructor(name, email, phone, address, group) {
    this.name = name;
    this.email = email;
    (this.address = address), (this.group = group);
    this.#phone = phone;
  }

  getPhone() {
    return this.#phone;
  }
}

//object of a class
const std = new Student(
  "Ankit",
  "ankitsunuwar181@gmail.com",
  9818881185,
  "Lalitpur",
  "Mern-Stack"
);

// std.name = "Ankit";
// std.email = "ankitsunuwar181@gmail.com";
// (std.address = "Kathmandu"), (std.group = "Mern-Stack");

// console.log(std.role);
console.log(Student.role);

console.log(std.getPhone());

//creat a class called Animal
// Assign name and sound to the class using constructior.
// create a function within some class to pront what animal does make what sound
class Animal {
  name;
  sound;
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makesound = () => {
    console.log(`${this.name} makes ${this.sound} sound`);
  };
}
const dog = new Animal("Dog", "woof");
const cat = new Animal("cat", "meow");

dog.makesound();
cat.makesound();

// Create a class called Student
// assign name, score, address as properties using constructor
// assign percentage and division as private property.
// Using function within class, get and populate percentage and divsion
// by create a function to display the student's performance using the object within the class.
class Studentz {
  name;
  score;
  address;
  #percentage;
  #division;

  constructor(name, score, address) {
    this.name = name;
    this.score = score;
    this.address = address;
  }

  //Method to calculate percentage and division
  calculatePerformance = () => {
    this.#percentage = this.score;

    if (this.#percentage >= 80) {
      this.#division = "Distinction";
    } else if (this.#percentage >= 60) {
      this.#division = "First Division";
    } else if (this.#percentage >= 50) {
      this.#division = "Second Division";
    } else if (this.#percentage >= 40) {
      this.#division = "Third Division";
    } else {
      this.#division = "Fail";
    }
  };

  displayPerformance = () => {
    this.calculatePerformance();
    console.log(
      `${this.name} scored ${this.score}%(${this.#division}) and lives at ${
        this.address
      }`
    );
  };
}

const student1 = new Studentz("Ankit", "92", "Satdobato");
const student2 = new Studentz("Sunuwar", "89", "Lagankhel");

student1.displayPerformance();
student2.displayPerformance();
