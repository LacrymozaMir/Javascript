// Напишите функцию camelize(str), 
// которая преобразует строки вида «my-short-string» в «myShortString».

const camelize = (str) => {
    return str
            .split('-')
            .map(
                (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
            ).join('');
}

console.log(camelize('background-color'));

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы 
// со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)