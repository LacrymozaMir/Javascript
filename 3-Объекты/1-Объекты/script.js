// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = 'dany';
user.surname = "smith";
user.name = 'Pete';
delete user.name;

function propsObj(obj) {
    let res = '';
    for(key in obj) {
        res += `${key}: ${obj[key]}`;
    }
    return res;
}

console.log(propsObj(user));

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let dog = {
    bloom: 'random'
};

let cat = {};

const isEmpty = (obj) => {
    for (key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(cat));
console.log(isEmpty(dog));


//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const getSumSalary = (obj) => {
    let res = 0;

    for (key in obj) {
        res += obj[key];
    }

    return res;
}

console.log(getSumSalary(salaries));

//Умножаем все числовые свойства на 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(multiplyNumeric(menu));
