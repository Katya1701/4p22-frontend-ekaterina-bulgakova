'use strict'

function makeFibonacciFunction() {
    let a = 1;
    let b = -1;

    return function() {
        const result = a + b;
        b = a;
        a = result;
        console.log(result);
        return result;
    };
};

const fibonacci = makeFibonacciFunction();

fibonacci(); // Вывод в консоль: 0
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3

