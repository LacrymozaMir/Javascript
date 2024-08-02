// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
};

let json;

console.log(json = JSON.stringify(user));

console.log(JSON.parse(json));