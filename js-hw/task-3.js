/*
    Сума чисел:
    Дано масив чисел [1, 2, 2, 3, 4, 4]. 
    Знайти суму.
*/

const numbers = [1, 2, 2, 3, 4, 4];

let sum = 0;
numbers.forEach((num) => (sum += num));
