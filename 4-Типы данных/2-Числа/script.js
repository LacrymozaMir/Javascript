console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.round(3.6));




//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) 
// и после показывает их сумму.

function summ() {
    let a = +prompt('a');
    let b = +prompt('b');

    console.log(a + b);
}

summ();

//Напишите функцию random(min, max), 
// которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(10, 20));