// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

function clear(elem) {
    // for (let i = 0;  i < elem.childNodes.length; i++) {
    //     elem.childNodes[i].remove();
    // }

    elem.innerHTML = '';
}

let list = document.getElementById('elem');

clear(list);