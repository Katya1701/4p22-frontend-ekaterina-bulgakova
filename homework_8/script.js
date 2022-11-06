'use strict';

const operandInputFirst = document.querySelector('.calculator-operand__first');
const operatorInput = document.querySelector('.calculator-operator');
const operandInputSecond = document.querySelector('.calculator-operand__second');
const button = document.querySelector('.calculator-button__submit');
const resultContainer = document.querySelector('.calculator-result__input');

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (operandInputFirst.value === '') {
        resultContainer.value = 'Первое число не указано';
        throw new Error('Первое число не указано');
    } else if (operatorInput.value === '') {
        resultContainer.value = 'Не введён знак';
        throw new Error('Не введён знак');
    } else if (operandInputSecond.value === '') {
        resultContainer.value = 'Второе число не указано';
        throw new Error('Второе число не указано');
    }

    let result = null;

    switch (operatorInput.value) {
        case '+':
            operandInputFirst.value + operandInputSecond.value;
            break;
        case '-':
            operandInputFirst.value - operandInputSecond.value;
            break;
        case '/':
            operandInputFirst.value / operandInputSecond.value;
            break;
        case '*':
            operandInputFirst.value * operandInputSecond.value;
            break;
        default:
            resultContainer.value = 'Программа не поддерживает такую операцию';
            throw new Error('Программа не поддерживает такую операцию');
    }

    if (result !== Infinity
        && result !== 'undefined')
    {
        console.log(result);
        resultContainer.value = result;
    } else {
        resultContainer.value = 'Операция не корректна';
        throw new Error('Операция не корректна');
    }
});