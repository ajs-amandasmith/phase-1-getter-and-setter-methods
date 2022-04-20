// Add your Circle class here

// class Bird {
//   #phrase;

//   constructor(name) {
//     this.name = name;
//   }

//   set phrase(phrase) {
//     this.#phrase = phrase;
//   }

//   get speak() {
//     return `${this.name} says ${this.#phrase || "squawk"}`;
//   }
// }

// const daffy = new Bird("Daffy");
// console.log(daffy.speak); // => 'Daffy says squawk'
// daffy.phrase = "it's rabbit season!";
// console.log(daffy.speak); // => 'Daffy says it's rabbit season!'

// const buddy = new Bird("Buddy");
// buddy.phrase = "What 'cha doin'?";
// console.log(buddy.speak); // returns 'Buddy says What 'cha doin'?'

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * (this.radius ** 2);
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}