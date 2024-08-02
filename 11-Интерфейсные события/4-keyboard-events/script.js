// Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
// которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.


function runOnKeys(e, func, ...args) {
  let set = new Set();

  document.addEventListener('keydown', (e) => {
    set.add(e.code);

  for (let code of args) {
    if (!set.has(code)) return;
  }

  set.clear();

  func();
  });

  document.addEventListener('keyup', (e) => {
    set.delete(e.code);
  });
};

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
)