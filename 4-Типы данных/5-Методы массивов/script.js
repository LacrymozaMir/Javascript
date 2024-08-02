// // Напишите функцию camelize(str), 
// // которая преобразует строки вида «my-short-string» в «myShortString».

// const camelize = (str) => {
//     return str
//             .split('-')
//             .map(
//                 (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//             ).join('');
// }

// console.log(camelize('background-color'));

// // Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы 
// // со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//     return arr.filter(item => (a <= item && item <= b));
// }

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr ); // 5,3,8,1 (без изменений)


// // Напишите функцию filterRangeInPlace(arr, a, b), 
// //которая принимает массив arr и удаляет из него все значения кроме тех, 
// //которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value < a || value > b) { // a <= arr[i] <= b
            arr.slice(i, 1);
            i--; // Важный момент!
        }
    }
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]

// Сортировать в порядке по убыванию

let arrSort = [5, 2, 1, -10, 8];

console.log(arrSort.sort((a, b) => b - a));