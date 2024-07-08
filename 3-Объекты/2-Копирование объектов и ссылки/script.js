//Скопировать объект

let img = {
    src: '/',
    weight: 300,
    protection: false,
}

let clone = Object.assign({}, img);

console.log(clone);