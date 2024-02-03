// Abstract Animal class
class Animal {
  constructor(name, backbone, coldBlooded) {
    this.name = name;
    this.backbone = backbone;
    this.coldBlooded = coldBlooded;
  }

  // Method to display information about the animal
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Has Backbone: ${this.backbone}`);
    console.log(`Cold-Blooded: ${this.coldBlooded}`);
  }
}

// Arthropoda class inheriting from Animal
class Arthropoda extends Animal {
  constructor(name) {
    super(name, false, true); // Arthropods do not have backbone but are cold-blooded
  }

  // Method to display specific information about arthropods
  displaySpecificInfo() {
    console.log(`${this.name} is an arthropod.`);
  }
}

// Fish class inheriting from Animal
class Fish extends Animal {
  constructor(name) {
    super(name, true, true); // Fish have backbone and are cold-blooded
  }

  // Method to display specific information about fish
  displaySpecificInfo() {
    console.log(`${this.name} is a fish.`);
  }
}

// Amphibia class inheriting from Animal
class Amphibia extends Animal {
  constructor(name) {
    super(name, true, true); // Amphibians have backbone and are cold-blooded
  }

  // Method to display specific information about amphibians
  displaySpecificInfo() {
    console.log(`${this.name} is an amphibian.`);
  }
}

// Reptiles class inheriting from Animal
class Reptiles extends Animal {
    constructor(name){
        super(name, true, true); // Reptiles have backbone and are cold-blooded
 }

 // Method to display specific information about Reptiles
    displaySpecificInfo() {
        console.log(`${this.name} is a Reptile.`);

    }

}

// Aves class inheriting from Animal
class AVES extends Animal{
    constructor(name){
        super(name, true, false); //aves have backbone and are warm-blooded
    }
// Method to display specific information about aves
    displaySpecificInfo() {
        console.log(`${this.name} is an aves.`);

    }
}

// Mammals class inheriting from Animal
class Mammals extends Animal{
    constructor(name){
        super(name, true, false); //Mammals have backbone and are warm-blooded
    }
// Method to display specific information about Mammals
    displaySpecificInfo() {
        console.log(`${this.name} is a Mammal.`);

    }
}

// Polymorphism example
function displayAnimalInfo(animal) {
  animal.displayInfo(); // Polymorphism: displayInfo behaves differently based on the type of animal
  animal.displaySpecificInfo(); // Polymorphism: displaySpecificInfo behaves differently based on the type of animal
}

// objects
const butterfly = new Arthropoda('Butterfly');
const salmon = new Fish('Salmon');
const frog = new Amphibia('Frog');
const tortoise = new Reptiles('Tortoise');
const bird = new AVES('Bird');
const cat = new Mammals('Cat')

displayAnimalInfo(butterfly);
console.log('---------------------');
displayAnimalInfo(salmon);
console.log('---------------------');
displayAnimalInfo(frog);
console.log('---------------------');
displayAnimalInfo(tortoise);
console.log('---------------------');
displayAnimalInfo(bird);
console.log('---------------------');
displayAnimalInfo(cat);
