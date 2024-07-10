// Задача 1 

let coords = elem.getBoundingClientRect();

let ans1 = [coords.left, coords.top];
let ans2 = [coords.right, coords.bottom];

let ans3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

let ans4 = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
  ];