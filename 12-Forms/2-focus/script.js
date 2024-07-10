// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
// <textarea> позволяет редактировать HTML в элементе <div>.

let area = null;
let view = document.getElementById('view');

view.addEventListener('click', () => {
    editStart();
});

function editStart() {
    area = document.createElement('textarea');
    area.value = view.innerHTML;

    area.onkeydown = (e) => {
        if (e.key == 'Enter') this.blur();
    }

    area.onblur = () => {
        editEnd();
    }

    view.replaceWith(area);
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}