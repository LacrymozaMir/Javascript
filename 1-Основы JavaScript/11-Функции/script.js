// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.


function min(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return b;
  }
  else return '='
}

function minTernar(a, b) {
  return a > b ? a : b;
}

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат. 

function pow(a, b) {
  let res = 1;
  for (i = 0; i < b; i++) {
    res *= a;
  }
  return res;
}

alert(pow(3, 5));