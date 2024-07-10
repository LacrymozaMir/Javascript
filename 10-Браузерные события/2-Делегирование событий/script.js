// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

let container = document.getElementById('container');

container.addEventListener('click', (e) => {
    if (e.target.className != 'remove-button') {
        return
    }

    let pane = e.target.closest('.pane');
    pane.remove();
})
