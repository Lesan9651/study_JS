'use strict';

// let money;
// money = prompt('Ваш месячный доход?');
// console.log(money);

/* ======================================== */
// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ["0: ", "  1: ", "  2: ", "  3: "]);
// console.log(addExpenses);

/* ======================================== */
// let point = 0;
// let deposit = "";
// deposit = prompt('Есть ли у вас депозит в банке?');
// if (deposit == 'да') {
//     console.log(true);
//     point = point + 1;
// } else {
//     console.log(false);
// }
/* ======================================== */
// let expenses1;
// let amount1;
// let expenses2;
// let amount2;
// expenses1 = prompt('Введите обязательную статью расходов?');
// amount1 = prompt('Во сколько это обойдется?');
// expenses2 = prompt('Введите обязательную статью расходов?');
// amount2 = prompt('Во сколько это обойдется?');
// console.log(expenses1);
// console.log(amount1);
// console.log(expenses2);
// console.log(amount2);
/* ======================================== */
let a = +prompt();
let b = +prompt();
let c = +prompt();
let budgetMonth = a + b + c;
console.log('бюджет на месяц:', budgetMonth);

/* ======================================== */
// let n = prompt();

// if (n >= 1200) {
//     console.log('У Вас высокий уровень дохода');
// } else if (n >= 600) {
//     console.log('У Вас средний уровень дохода');
// } else if (n <= 600) {
//     console.log('К сожалению у Вас уровень дохода ниже среднего');
// } else if (n != 0) {
//     console.log('Что то пошло не так');
// } else {
//     console.log('Что то пошло не так');
// }