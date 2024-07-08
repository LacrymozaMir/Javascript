// Переписать условия "if" на "switch"

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
  
  case 0: {
    alert(0);
  }
  case 1: {
    alert(1);
  }
  case 2:
  case 3: {
    alert('2 or 3');
  }

}