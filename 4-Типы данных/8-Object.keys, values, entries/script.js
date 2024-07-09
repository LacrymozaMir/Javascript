//Напишите функцию sumSalaries(salaries), 
//которая возвращает сумму всех зарплат с помощью метода 
//Object.values и цикла for..of.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  let res = 0;

  for(let val of Object.values(salaries)){
    res += val;
  }
  return res;
}

console.log(sumSalaries(salaries));


// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}


console.log(count(user));