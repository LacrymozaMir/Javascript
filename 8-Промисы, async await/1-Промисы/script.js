// Встроенная функция setTimeout использует колбэк-функции. 
// Создайте альтернативу, использующую промисы.

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}


delay(3000).then(() => alert('выполнилось через 3 секунды'));