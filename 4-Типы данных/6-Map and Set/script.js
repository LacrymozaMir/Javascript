// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const anagrammDelete = (arr) => {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
          let sorted = arr[i].toLowerCase().split("").sort().join("");
          obj[sorted] = arr[i];
        }
      
        return Object.values(obj);
    }
}

console.log(anagrammDelete(arr));