// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

// 1
let table = document.getElementById("age-table");
// 2
table.getElementsByTagName('label');
// 3
table.querySelector('td');
// 4
let form = document.getElementsByName('search');

form.querySelector('input');

let inps = form.querySelectorAll('input');

console.log(inps[inps.length - 1]);

