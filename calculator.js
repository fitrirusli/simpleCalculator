let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        secondOperand = parseFloat(currentInput);
        firstOperand = performCalculation();
    }
    currentOperation = operation;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || currentOperation === null) return;
    secondOperand = parseFloat(currentInput);
    display.value = performCalculation();
    currentInput = display.value;
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
}

function performCalculation() {
    switch (currentOperation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return;
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    display.value = '';
}
