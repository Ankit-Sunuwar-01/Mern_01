// prototype based oop
// class and object
function Student(name, address, phone, group) {
  // public. protected, private
  // js ma chia public ra private use hunxa.
  // private ma chi aagadi # garyo bhani tyo cheej private hunxa, tara yo chai class ma bitra matra use garna paunxam hamile.
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.group = group;
}

// function as a class use garyo bhani prototype bhaninxa.
// arrow function bhitra 'this.' bhanni use garna paudaina.
// yo bhanye ko chai es6 bhanda aagadi use hunxa legacy(aaja bhanda dherai purano) software haru ma hami le use bhako paunxa sakxam.
Student.prototype.greetStudent = function () {
  console.log("Hello", this.name + "!");
  console.log("My Address is:", this.address + ".");
  console.log("My Phone is:", this.phone + ".");
  console.log("My group name is:", this.address + ".");
};

const std = new Student("Ankit", "Lalitpur", 9818881185, "Mern-Stack");

std.greetStudent();
console.log(std);
