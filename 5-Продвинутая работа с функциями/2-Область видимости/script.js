// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(num) {
    let sum = 0;
    return ((sum) => {
        return sum += num;
    })
}

console.log(sum(3)(2));


// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => (x) => (x >= a && x <= b);

const inArray = (arr) => (x) => (arr.includes(x));


console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2