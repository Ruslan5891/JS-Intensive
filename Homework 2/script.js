"use strict"

function makeObjectDeepCopy(obj) {
    if (obj === null || typeof obj !== 'object'){
        return obj;
    }

    if (obj instanceof Array){
        let newArr = [];
        for (let i = 0; i < obj.length; i++){
            newArr[i] = makeObjectDeepCopy(obj[i]);
        }
        return newArr;
    }

    if (obj instanceof Object){
        let newObj = {};
        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = makeObjectDeepCopy(obj[key]); 
            }
        }
        return newObj;
    }
}

function selectFromInterval(arr, firstRange, secondRange){
    let checkValidInput = Array.isArray(arr);
    if (!checkValidInput){
        throw new Error('Ошибка!!!');
     }
    let chekValidityAllItems = arr.every((item) => Number.isSafeInteger(item));

    if (!chekValidityAllItems){
       throw new Error('Ошибка!!!');
    }

    let checkFirstRange = Number.isSafeInteger(firstRange);
    let checkSecondRange = Number.isSafeInteger(secondRange);

    if(!checkFirstRange || !checkSecondRange){
        throw new Error('Ошибка!!!');
    }
  
    let result = [];
    arr.sort((a,b) => a-b);
    let compareRange = firstRange > secondRange;
    if (compareRange){
      for(let i = 0; i < arr.length; i++){
          if(arr[i] >= secondRange && arr[i]<=firstRange){
              result.push(arr[i]);
          }
      }

    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= firstRange && arr[i]<=secondRange){
                result.push(arr[i]);
            }
        }
    }
}


let myIterable = {
    from:1,
    to:10,
    [Symbol.iterator]() {
        return {
            firstValue: this.from,
            secondValue: this.to,
            firstValueForCompare: this.from,
            secondValueForCompare: this.to,
            next() {
                if (!Number.isSafeInteger(this.firstValue) || !Number.isSafeInteger(this.secondValue)){
                    throw new Error ('Ошибка!!!');
                } else if (this.firstValueForCompare > this.secondValueForCompare){
                    throw new Error ('Ошибка!!!');
                } else if (this.firstValue <= this.secondValue) {
                    return { done: false, value: this.firstValue++ };
                } else if (this.firstValue > this.secondValue) {
                    return { done: true};
                }
            }
        }
    }
}





