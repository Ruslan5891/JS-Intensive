'use strict';

function concatStrings(argument, separator) {
    if (typeof separator !== 'string') {
        separator = '';
    }
    let result = [];
    let innerConcat = argument => {
          if (typeof argument !== 'string') {
            return result.join(separator);
          } else {
            result.push(argument);
            return innerConcat;
          }  
    }
    return innerConcat(argument);
}


class Calculator {
    constructor(firstValue, secondValue) {
        if (Number.isSafeInteger(firstValue) && Number.isSafeInteger(secondValue)){
            this.firstValue = firstValue
            this.secondValue = secondValue 
        } else {
            throw new Error ('Ошибка!!!');
        }
    }
    setX = (num) => {
        if(!Number.isSafeInteger(num)) {
            throw new Error('Ошибка!!!');
        } else {
            this.firstValue = num;
        }
        
    }
    setY = (num) => {
        if(!Number.isSafeInteger(num)) {
            throw new Error('Ошибка!!!');
        } else {
            this.secondValue = num;
        }
    }
    logSum = () => {
        return console.log(this.firstValue + this.secondValue);
    }
    logMul = () => {
        return console.log(this.firstValue*this.secondValue);
    }
    logSub = () => {
        return console.log(this.firstValue - this.secondValue);
    }
    logDiv = () => {
        return console.log(this.firstValue/this.secondValue);
    }
}


