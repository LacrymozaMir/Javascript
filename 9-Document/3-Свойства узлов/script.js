// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

for (let li of document.querySelectorAll('li')){
  console.log(li);
  console.log(li.firstChild.data);
  console.log(li.getElementsByTagName('li'));
}

