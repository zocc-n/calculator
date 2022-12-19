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
        console.log(calc.result);
        return calc.result;
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


numButtons.forEach( (numButton) => numButton.addEventListener('click', getNumButtonValue));
operators.forEach( (operator) => operator.addEventListener('click', addOperator))
equal.addEventListener('click', calc.operate);


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





