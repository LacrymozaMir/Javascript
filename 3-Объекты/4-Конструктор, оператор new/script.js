// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается 
// в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

function Accumulator(startValue) {
  this.value = startValue;

  this.read = function () {
    this.value += +prompt('num');
  }
}


let acc1 = new Accumulator(1);

acc1.read();
acc1.read();
acc1.read();

console.log(acc1.value);