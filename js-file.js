let displayContent = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

let isFirst = true;
let emptyString = true;
let isEvaluated = false;

const display= document.querySelector('.display');
const zero= document.querySelector("#zero");
const one= document.querySelector("#one");
const two= document.querySelector("#two");
const three= document.querySelector("#three");
const four= document.querySelector("#four");
const five= document.querySelector("#five");
const six= document.querySelector("#six");
const seven= document.querySelector("#seven");
const eight= document.querySelector("#eight");
const nine= document.querySelector("#nine");

const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiplication = document.querySelector("#multiply");
const division = document.querySelector("#divide");
const evaluate = document.querySelector("#evaluate");
const clear = document.querySelector("#clear");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        return "ERROR";
    }
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
    else {
        console.log("ERROR");
    }
}

function reset() {
    firstNumber = "";
    secondNumber = "";
    displayContent = "";
    display.textContent = "";
    operator = "";
    emptyString = true;
    isFirst = true;
    isEvaluated = false;
}


function operatorClick(opp) {
    isFirst = false;
    isEvaluated = false;
    operator = opp;
}

function digitClick(digit) {
    if (isEvaluated || firstNumber === "0") {
       reset();
    }
    if (isFirst) {
        firstNumber += digit;
    }
    else {
        if (emptyString || secondNumber === "0") {
            display.textContent = "";
            displayContent = "";
            emptyString = false;
        }
        secondNumber += digit;
    }
    displayContent += digit;
    display.textContent = displayContent;
}

zero.addEventListener("click", () => {
   digitClick("0");
})

one.addEventListener("click", () => {
    digitClick("1");
})

two.addEventListener("click", () => {
    digitClick("2");
})

three.addEventListener("click", () => {
    digitClick("3");
})

four.addEventListener("click", () => {
    digitClick("4");
})

five.addEventListener("click", () => {
    digitClick("5");
})

six.addEventListener("click", () => {
    digitClick("6");
})

seven.addEventListener("click", () => {
    digitClick("7");
})

eight.addEventListener("click", () => {
    digitClick("8");
})

nine.addEventListener("click", () => {
    digitClick("9");
})

addition.addEventListener("click", () => {
   operatorClick("+");
})

multiplication.addEventListener("click", () => {
    operatorClick("*");
})

subtraction.addEventListener("click", () => {
    operatorClick("-");
})

division.addEventListener("click", () => {
    operatorClick("/")
})

clear.addEventListener("click", () => {
    reset();
})

evaluate.addEventListener("click", () => {
    isEvaluated = true;
    if (firstNumber !== "" && secondNumber !== "") {
        displayContent = "";
        displayContent = operate(parseInt(firstNumber), parseInt(secondNumber), operator).toString();
        firstNumber = displayContent;
        secondNumber = "";
        isFirst = true;
        emptyString = true;
        display.textContent = displayContent;
    }
})