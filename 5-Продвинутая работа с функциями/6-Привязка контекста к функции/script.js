// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};


// askPassword(user.loginOk, user.loginFail);
// нужно прочто забиндить контекст u
askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // эту исправить надо было
