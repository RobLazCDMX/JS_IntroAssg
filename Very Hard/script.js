'use strict';

// These are the prompts
const numberOne = Number(prompt("Please enter a number"));
const operator = prompt("Please enter an operator");
const numberTwo = Number(prompt("Please enter a number"));

// Add function
function add(numberOne, numberTwo) {
    const totalAdd = numberOne + numberTwo;
    console.log(`${numberOne} + ${numberTwo} = ${totalAdd}`);
    return totalAdd;
}   

// Subtract function
function subtract(numberOne, numberTwo) { 
    const totalSubtract = numberOne - numberTwo;
    console.log(`${numberOne} + ${numberTwo} = ${totalSubtract}`);
    return totalSubtract;
}

// Multiply function
function multiply(numberOne, numberTwo) {
    const totalMultiply = numberOne * numberTwo;
    console.log(`${numberOne} + ${numberTwo} = ${totalMultiply}`);
    return totalMultiply;
}

// Divides function
function divide(numberOne, numberTwo) {
    const totalDivide = numberOne / numberTwo;
    console.log(`${numberOne} + ${numberTwo} = ${totalDivide}`);
    return totalDivide;
}

// If else statement determines which function to run
if(operator === "+" ) {
    add(numberOne, numberTwo);
} else if (operator === "-") {
    subtract(numberOne, numberTwo);
} else if (operator === "*") {
    multiply(numberOne, numberTwo);
} else if(operator === "/") {
    divide(numberOne, numberTwo);
} else {
    console.log(`Please make sure to follow instructions and try again`);
}

