

let user = {
  name: "John",
  years: 30,
};

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let {name, years: age, isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);


// Создайте функцию topSalary(salaries), 
// которая возвращает имя самого высокооплачиваемого сотрудника.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (obj) => {
  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName
}

console.log(topSalary(salaries));