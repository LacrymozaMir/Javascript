// Создайте декоратор spy(func), 
// который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.


function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}




work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"

}
