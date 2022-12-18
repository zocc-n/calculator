let result;


function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;

}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1. num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

const numButtons = document.querySelectorAll('[data-numButton]');

numButtons.forEach( (numButton) => numButton.addEventListener('click', (e) => {console.log(e)}));
