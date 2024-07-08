
console.log('ф'.codePointAt(0));

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
    return str[0].toUpperCase() + (str.slice(1));
}

console.log(ucFirst('hellow!'));

//Напишите функцию checkSpam(str), 
// возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = (str) => {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
        return console.log(true);
    }
    else return console.log(false);
}

checkSpam('buy ViAgRA now') 
checkSpam('free xxxxx') 
checkSpam("innocent rabbit")

//Создайте функцию truncate(str, maxlength), 
//которая проверяет длину строки str и, если она превосходит maxlength, 
//заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

//Результатом функции должна быть та же строка, 
//если усечение не требуется, либо, если необходимо, усечённая строка.


const truncate = (str, maxlength) => {
    if(str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'
    } else return str;
}

console.log(truncate('privet!', 2));




// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять числовое значение и возвращать его.


function extractCurrencyValue(str) {
    if (typeof str[0] == 'string') str.slice(0, 1);
    return parseInt(str.slice(1, str.length));
}

console.log(extractCurrencyValue('%231'));

const extractCurrencyValue2 = (str) => {
    return +str.slice(1);
}