// Создайте декоратор spy(func), 
// который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.


function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

const patched = spy(work);

patched(1,2);
patched(3,4);

console.log(patched.calls);