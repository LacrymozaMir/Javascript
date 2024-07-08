let user = {
    username: 'random',
    password: '123',
    email: 'da@gmail.com',
    sayHi1: () => console.log(`hi, my name is ${this.username}`),   // не выполнится, 
                                                                    //т.к function expression
    sayHi2() { console.log(`hi, my name is ${this.username}`)}, // выполнится
}

user.sayHi1();
user.sayHi2();


// Создайте объект calculator (калькулятор) с тремя методами:

let calculator = {
    a: null,
    b: null,
    sum() { return this.a + this.b},
    read(a, b) { this.a = a, this.b = b },
    mul() { return this.a * this.b},
    getNums() { console.log(`${this.a} and ${this.b}`)},
}

calculator.read(3, 10);
calculator.getNums();
console.log(calculator.sum());
console.log(calculator.mul());

// Измените код методов up, down и showStep таким образом, 
// чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };


ladder.up().up().down().showStep().down().showStep(); 