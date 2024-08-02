// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
 
  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('Wolf');
console.log(rabbit);

