// let result;

calc = {
    currentNum: '',
    soFarNum : '',
    currentOperator: '',
    result: '',
}

// function add(num1, num2){
//     return num1+num2;
// }

// function subtract(num1, num2){
//     return num1-num2;
// }

// function multiply(num1, num2){
//     return num1*num2;
// }

// function divide(num1, num2){
//     return num1/num2;
// }

// function operate(num1, num2, operator){
//     switch(operator){
//         case '+':
//             result = add(num1, num2);
//             break;
//         case '-':
//             result = subtract(num1, num2);
//             break;
//         case '*':
//             result = multiply(num1. num2);
//             break;
//         case '/':
//             result = divide(num1, num2);
//             break;
//     }
//     return result;
// }

const numButtons = document.querySelectorAll('[data-numButton]');
const operators = document.querySelectorAll('[data-operators]');
const display = document.querySelector('#display');


numButtons.forEach( (numButton) => numButton.addEventListener('click', getNumButtonValue));
operators.forEach( (operator) => operator.addEventListener('click', addOperator))

// function getNumButtonValue(e){
//     let num = e.target.textContent;
//     console.log(num);
//     if(calc.currentNumArr.length < 18){
//         let pushNum = (num) => calc.currentNumArr.push(num);
//         pushNum(num);
//         display.innerText = calc.currentNumArr.join('');
//     }
// }

function getNumButtonValue(e){
    let num = e.target.textContent;
    if(display.innerText.length < 18){
        display.innerText += num;
        calc.currentNum = display.innerText;
    }
}

function addOperator(e){
    let operator = e.target.attributes['data-operators'].value;
    calc.currentOperator = operator;
    getSoFarNum();
}

function getSoFarNum(){
    calc.soFarNum = display.innerText;
}





