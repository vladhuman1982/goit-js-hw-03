let input;
let total = 0;
const numbers = [];

while (true) {
  input = prompt('Введите число');
  if (input === null) {
    console.log('Отмена пользователем');
    break;
  } else {
    input = Number(input);
    numbers.push(input);
  }
}
for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
