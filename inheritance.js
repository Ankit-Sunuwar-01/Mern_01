// Parent Class
class Sound {
  name;
  sound;

  constuctor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound = () => {
    console.log(`${this.name} makes ${this.sound}`);
  };
}

//child or derived (extends le parent id ko gudi haru access gar na paunxa.)
class Animal extends Sound {}

const dog = new Animal("Dog", "woof");
dog.makeSound();
