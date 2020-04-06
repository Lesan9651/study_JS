'use strict';


// let cart = {
//     model: 'mazda',
//     year: 2006,
//     turbocharging: true,
//     specifications: [],
//     style: {
//         color: 'blue'
//     }
// };

//let obj = new Object();
//car.turbocharging = true;
//console.log(car.model);
//obj.color = black;
//console.log(obj);
//car.style = obj;
//console.log(car);
//console.log(car.style === obj);
//car.style.color = 'red';
//console.log(odj);
//console.log(car);

// /* Метод объекта ======================= */
// car.ride = function(speed) {
//     console.log('Машина едет со скоростью ' + speed + ' км/ч');
// };
// car.ride(60);

// car.stop = stop;
// car.stop();
// stop();
// console.log(car);

// function stop() {
//     console.log('Машина стоит, скорость 0 км/ч');
// }

// /*  ======================= */

// console.log(car.model);
// console.log(car['model']);

// car['best place'] = 'city';
// console.log(car);

// let titleTrans = 'Коробка передач';
// let bodyTrans = 'Автоматическая коробка передач';

// car[titleTrans] = bodyTrans;

// console.log(car);

/* Массивы ======================= */

// let arr = [1, 2, 3, 4, 5];

// arr[0] = 'cat';
// //console.log(arr.lenght);

// arr[arr.lenght] = 'dog';
// c //onsole.log(arr);

// arr[10] = 'human';
// //console.log(arr);

// let array = new Array(1, 2, 3, 4);
// console.log(array);

// let arr = [1, 2, 3, 4, 5];
// arr.lenght = 3;
// console.log('arr: ', arr);
// console.log('arr.lenght: ', arr.lenght);

// /*  ======================= */

//let array = ['Apple', 'Orange', 'Banana'];

//array.push('Kivi'); // добавляет елемент
//array.unshift('Papaya', 'Mango'); // добавляет елемент в начала массива
// array.pop();
// console.log(arrat.pop());
// console.log(arrat.shift());
// console.log(array.sort()); // сортирует элементы

// console.log(array.slice(2));
// console.log(array.slice(1, 3));
// console.log(array.slice(-2));
// console.log(array);

//console.log(array.splice(1, 1, 'avocado', 'papaya'));
//console.log(array);

// console.log(array.join(' - '));

// console.log(array.reverse());

// console.log(array.concat(['avocado', 'papaya', 'kivi'], 'mango'));

/*  ======================= */

// let car = {
//     model: 'mazda',
//     year: 2006,
//     turbocharging: true,
//     specifications: [],
//     style: {
//         color: 'blue'
//     }
// }
// for (let key in car) {
//     console.log('Ключ: ' + key + ' Значение: ' + car[key]);
// }
// console.log(Object.keys(car).lenght);

let arr = [1, 3, 5, 10, 15];

// for (let i = 0; i < arr.lenght; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, array) {
//     console.log(item, i, array);
// });

// for (let item of arr) {
//     console.log(item);
// }

// delete arr[3];
// console.log('arr: ', arr[3]);

// let obj = {
//     a: 3,
//     b: true,
//     c: 'js'
// };

// delete obj.b;
// console.log('obj: ', obj);

// function test() {
//     console.log(arguments);
// }
// test(1, 2, 3, 4);