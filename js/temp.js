'use strict';

let money = prompt('Ваш месячный доход?', 50000),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные драсходы через запятую'),
    deposit = confirm('Усть ли у Вас депозит в банке?'),
    mission = 50000,
    period = 3;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.lenght);

let expenses1 = prompt('Введите обязательную статью расходов?'),
    expensesAmount1 = +prompt('Во сколько это обойдется?, 2500'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    expensesAmount2 = +prompt('Во сколько это обойдется?', 1500);

console.log('Период ' + period + ' месяца');
console.log('Цель заработать ${mission} Рублей');

console.log(addExpenses.toLowerCase().split(','));

let expensesAmount = expenses1Amount + expenses2Amount;
console.log(expensesAmount);
let budgetMonth = (money - (expensesAmount));
console.log('Доход за месяц: ' + budgetMonth);
let periodMission = Math.ceil(mission / budgetMonth);

let budgetMonth = budgetMonth / 30;

console.log('Бюджет на день: ' + Math.floor(budgetDay));

console.log('Цель будет достигнута за ' + periodMission + ' месяцев');

let getStatusIncome = function() {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }
}
console.log(getStatusIncome());