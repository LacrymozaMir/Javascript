// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert( i-- );
}

//Последним значением на выводе станет i = 1, т.к  while принимает логическое условие
// (при i == 0 цикл остановится)

//При помощи цикла for выведите чётные числа от 2 до 10. 

for(let i = 2; i <= 20; i+=2) {
    console.log(i);
}