const number = document.querySelectorAll('.numberButton');


number.forEach(function(num) {
  num.addEventListener('click', appendNumber)
});

let displayValue;


function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  return a / b;
}


// function operate probably needs rework

function operate(operator, Nr1, Nr2) {
  if (operator === '+') {
    add(Nr1, Nr2)
  } else if (operator === '-') {
    subtract(Nr1, Nr2)
  } else if (operator === '*') {
    multiply(Nr1, Nr2)
  } else if (operator === '/') {
    divide(Nr1, Nr2)
  }
}

function appendNumber(){
  displayValue += num;
}
