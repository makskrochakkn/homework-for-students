/*
    Функція з колбеком:
    Створити функцію calculate, яка приймає два числа і колбек.
    Колбек визначає дію: додавання або віднімання.
*/

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const calculate = (x, y, callback) => {
  return callback(x, y);
};
