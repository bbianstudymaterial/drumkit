function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1,num2);
}

const num1 = prompt("Enter first num")
const num2 = prompt("Ente second num")
const operator = prompt("Enter operator")

let output = calculator(num1,num2,operator);
console.log(output)
