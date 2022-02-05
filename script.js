/* 
    You’ll need to store the first number that is input into the calculator when a user presses an currentOperator,
    and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    You should already have the code that can populate the display,
    so once operate() has been called, update the display with the ‘solution’ to the operation.

    You need to figure out how to store all the values and call the operate function with them.
 */

// variables
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equalsButton = document.querySelector('#equals');

let currentDisplayValue;
let firstOperand;
let secondOperand;
let currentOperator;
let nextInputResetScreen = false;

// functions
function add(a, b) {
  return (+a) + (+b);
}

function subtract(a, b) {
  return (+a) - (+b);
}

function multiply(a, b) {
  return (+a) * (+b);
}

function divide(a, b) {
  return (+a) / (+b);
}

function operate() {
  if (currentOperator === '+') {
    display.innerHTML = add(firstOperand, secondOperand)
  } else if (currentOperator === '-') {
    display.innerHTML = subtract(firstOperand, secondOperand)
  } else if (currentOperator === '*') {
    display.innerHTML = multiply(firstOperand, secondOperand)
  } else if (currentOperator === '/') {
    display.innerHTML = divide(firstOperand, secondOperand)
  }
}

function appendNumbers(){
  if (display.innerHTML === '0') {
    resetScreen();
  }

  if (nextInputResetScreen === true) {
    resetScreen();
    nextInputResetScreen = false;
  }
  currentDisplayValue = display.innerHTML += this.innerHTML;
}

function resetScreen(){
  display.innerHTML = '';
}

function saveFirstNumber() {
  firstOperand = currentDisplayValue;
}

function saveOperator(e) {
  currentOperator = e.target.innerHTML;
}

function resetCalculator() {
currentDisplayValue = null;
firstOperand = null;
secondOperand = null;
currentOperator = null;
nextInputResetScreen = false;
display.innerHTML = 0;
}

// Events
numberButtons.forEach(number => {
  number.addEventListener('click', appendNumbers)
});

operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
      saveFirstNumber(e);
      saveOperator(e);
      nextInputResetScreen = true;
    })});

equalsButton.addEventListener('click', () => {
  secondOperand = currentDisplayValue;
  operate()
});

clearButton.addEventListener('click', resetCalculator);