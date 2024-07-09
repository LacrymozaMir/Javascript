// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'formatError';
  }
}