'use strict';

// function outputMessage(name, age) {
//     console.log('Hello, ' + name);
//     console.log('My age: ' + age);
// }
// outputMessage('Max', 30);

// const consoleMessage = function() {
//     console.log('Hello, friend');
// }
// consoleMessage();

// const alertMessage = new Function('alert("Hi!")');

// alertMessage();

// const sum = function(a, b) {
// console.log(arguments);

//     if (!a) {
//         a = 0;
//     }
//     if (!b) {
//         b = 0;
//     }
//     return a + b;
// }

// let res = sum(5, 4);
// console.log('res: ', res);

// const sum = function(a, b) {
//     return a + b;
// }

// const sum2 = new Function('a', +'b', 'return a + b');
// console.log(sum);
// console.log(sum2);

// (function() {
//     console.log('Hello');
// })();

// //Callback

// const doNum = function(a, b, callback) {
//     if (typeof a === 'number' && typeof b == 'number') {
//         callback(a, b);
//     }
// }

// doNum(5, 10, function(a, b) {
//     console.log(a + b);
// })

// function mult(a, b) {
//     console.log(a * b);
// }

// doNum(3, 5, mult);

// function one(callback) {
//     console.log('Делаем запрос на сервер');
//     setTimeout(function() {
//         console.log('Получаем данные от сервера');
//         callback();
//     }, 1000);
// }

// function two() {
//     console.log('Выводим на сираницу');
// }

// one(two);

// Детерминированными функциями зависит только от входных данных
// Чистая функция; Детарминированная и без побочных эффектов

//let x = 5;

// function foo(a) {
//     const sum = a + x;
//     return sum;
// }

// console.log(foo(2));
// x = 3;
// console.log(foo(2));

function foo(a) {
    const sum = a + Math.random();
    return sum;
}
console.log(foo(2));
console.log(foo(2));
console.log(foo(2));