let invoice = 10;
const stock = 100;

// Write code under this line
let message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);

// //если invoice равен 100
// invoice = 100;
// // то значение message будет равно
// console.log(message);
// // 'Заказ оформлен, с вами свяжется менеджер'

// //если invoice равен 50
// invoice = 50;
// // то значение message будет равно
// console.log(message);
// // 'Заказ оформлен, с вами свяжется менеджер'

// //если invoice равен 150
// invoice = 150;
// // то значение message будет равно
// console.log(message);
// // 'На складе недостаточно товаров!'
