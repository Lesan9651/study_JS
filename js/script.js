'use strict';

let y = 10;

function one(x, z) {
    // lexicalEnviroment = {x: 3, z: undefined};
    //let y = 4;
    // scope = globalScope = window.y = 10;
    // lexicalEnviroment = {x: 3, y: 4, z: undefined};
    ///console.log(z, y, z);

    function two() {
        // lexicalEnviroment = {};
        // scope = one.lexicalEnviroment = {x: 3, y: 4, z: undefined};
        console.log(y);
    }
    two();
}
one();

let y = 5;

function one(x) {
    // scope = globalScope = window = {y: 5};
    console.log(x + y);
}

/* ===================================== */

function two() {
    let y = 15;
    one(3);
}
two();

let a = 50;

function one() {
    let x = 10;

    function two(y) {
        function tree() {
            return x * y * a;
        }
        console.dir(tree);
        return x + y + tree();
    }
    return two(15);
}
console.log(one());

/* ================================== */

function funcMath() {
    const a = 10;
    return function() {
        console.log(a * a);
    };
}
const mathPow = funcMath();
funcMath();
console.dir(mathPow);

const mathPow2 = function() {
    console.log(a * a);
}
console.dir(mathPow2);

/* ======================================== */

function funcMath(a) {
    return function(b) {
        console.log(a * b);
    };
}
const mathPow = funcMath(10);
mathPow();
console.log(mathPow);