// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

const ask = (quest, yes, no) => {
  if (confirm(quest)) yes()
  else no();
}

ask(
  () => alert(''),
  () => alert('')
);