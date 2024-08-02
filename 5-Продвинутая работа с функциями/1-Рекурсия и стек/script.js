//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

const sumTo = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }

}

console.log(sumTo(5));


//Вычислить факториал

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }


}

console.log(factorial(3));