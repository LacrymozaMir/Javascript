//Какую структуру данных вы бы предложили использовать для хранения информации о том, 
//когда сообщение было прочитано?


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2024, 7, 9));
