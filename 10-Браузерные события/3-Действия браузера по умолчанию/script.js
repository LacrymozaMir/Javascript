let thum = document.getElementById('thumbs');

let largeImg = document.getElementById('largeImg');

thum.addEventListener('click', (e) => {
    let thumbnail = e.target.closest('a');

    if (!thumbnail) return;
    show(thumbnail.href);
    e.preventDefault();


    function show(href) {
        largeImg.src = href;
    }
})
