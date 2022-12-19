calc = {
    currentNum: '',
    soFarNum : '',
    currentOperator: '',
    result: '',

    operate: function(){
        calc.currentNum = parseInt(calc.currentNum);
        calc.soFarNum = parseInt(calc.soFarNum);
        switch(calc.currentOperator){
            case '+':
                calc.result = calc.add(calc.currentNum, calc.soFarNum);
                console.log(calc.result);
                break;
            case '-':
                calc.result = calc.subtract(calc.currentNum, calc.soFarNum);
                break;
            case '*':
                calc.result = calc.multiply(calc.currentNum, calc.soFarNum);
                break;
            case '/':
                calc.result = calc.divide(calc.currentNum, calc.soFarNum);
                break;
        }
        display.innerText = calc.result;
    },

    add: function(num1, num2){
        return num1 + num2;
    },

    subtract: function(num1, num2){
        return num1 - num2;
    },

    multiply: function(num1, num2){
        return num1 * num2;
    },

    divide: function(num1, num2){
        return num1 / num2;
    }
}


const numButtons = document.querySelectorAll('[data-numButton]');
const operators = document.querySelectorAll('[data-operators]');
const display = document.querySelector('#display');
const equal = document.querySelector('[data-equal]');
const cButton = document.querySelector('#cButton');
const acButton = document.querySelector('#acButton');


numButtons.forEach( (numButton) => numButton.addEventListener('click', getNumButtonValue));
operators.forEach( (operator) => operator.addEventListener('click', addOperator))
equal.addEventListener('click', calc.operate);
cButton.addEventListener('click', clearChar);
acButton.addEventListener('click', allClear);


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
    continueCalculation();
}

function continueCalculation(){
    calc.soFarNum = display.innerText;
    calc.currentNum = '';
    display.innerText = '';
}

function clearChar(){
    calc.currentNum = calc.currentNum.split('');
    calc.currentNum.pop();
    calc.currentNum = calc.currentNum.join('');
    display.innerText = calc.currentNum;
}

function allClear(){
    display.innerText = '';
    calc.currentNum = '';
    calc.soFarNum = '';
    calc.currentOperator = '';
    calc.result = '';
}
