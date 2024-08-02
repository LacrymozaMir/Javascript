let list = document.getElementById('ul');

list.addEventListener("click", (event) => {
    // event.preventDefault();

    if (event.target.tagName != 'LI') return;

    if (event.ctrlKey || event.metaKey) {
        toggle(event.target);
    } else {
        single(event.target);
    }

})

list.onmousedown = () => {return false};


function toggle(li) {
    li.classList.toggle('selected');
} 


function single(li) {
    let selected = list.querySelectorAll('.selected');

    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
} 