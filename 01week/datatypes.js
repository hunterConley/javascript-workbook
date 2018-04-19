'use strict';

// Function that displays the current date and time.
const dateAndTime = () => {
    return new Date().toLocaleString();
}
console.log(dateAndTime());


// Function that converts number to string.
const numToString = (num) => {
    return num.toString();
}
console.log(numToString(5));

// Function that converts string to number
const strToNumber = (str) => {
    return Number.parseInt(str);
}
console.log(strToNumber('5'));

// Function that takes in different datatypes and returns what they are.
const displayTypeOf = (arg) => {
    return typeof(arg);
}
console.log(displayTypeOf('hello'));

// Function that takes in two numbers and adds them
const addTwoNums = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNums(1,2));

// Function that only runs when two things are true
const bothAreTrue = (arg1, arg2) => {
    if (arg1 && arg2) {
        return true;
    } else {
        return false;
    }
}
console.log(bothAreTrue(1,1));

// Function that runs when one of two are true
const oneIsTrue = (arg1, arg2) => {
    if (arg1 || arg2) {
        return true;
    }
}
console.log(oneIsTrue(false, 1));

// Function that runs when both parameters are not true
const bothAreFalse = (arg1, arg2) => {
    if (!arg1 && !arg2) {
        return true;
    }
}
console.log(bothAreFalse(false, false));






