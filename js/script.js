'use strict';

let isNumder = function(m) {
    return !isNaN(parseFloat(n)) && Infinity();
}

let money = prompt('Ваш месячный доход?', 50000),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные драсходы через запятую'),
    deposit = confirm('Усть ли у Вас депозит в банке?'),
    mission = 50000,
    period = 3;

let start = function() {
    money = prompt('Ваш месячный доход?');

    while (isNamber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};
start();

let showTypeOf = function(item) {
    console.log(typeof(item));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = [];

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[1] = prompt('Введите обязательную статью расходов?', 'Садик государственный');

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount();
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth
};

let budgetDay = accumulatedMonth / 30;

console.log('Цуль будет достигнута за ' + Math.cell(getTargetMonth()) + ' месяца');

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