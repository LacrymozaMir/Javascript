//Напишите функцию printNumbers(from, to), 
//которая выводит число каждую секунду, начиная от from и заканчивая to.


function printNumbers(from, to) {

  let current = from;

  let timer = setInterval(() => {
    console.log(current);

    if (current == to) {
      clearInterval(timer);
    };
    
    current++;

  }, 1000)


}


printNumbers(10, 100);