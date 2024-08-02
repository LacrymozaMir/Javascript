// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let div = document.querySelector('div');
let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    div.style.display = 'none';
})


// Создайте кнопку, которая будет скрывать себя по нажатию.

btn.addEventListener('click', () => {
    btn.style.display = 'none';
})


