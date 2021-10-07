'use strict';

Array.prototype.myFilter = function(callback, newObj) {
    if (this == null){
        throw new Error ('ERROR!!!')
    }
    if (typeof callback !== 'function') {
        throw new Error ('YOUR CALLBACK IS NOT A FUNCTION');
    }
    let context = this;
    if (arguments.length > 1){
        context = newObj;
    }
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (i in this){
            let current = this[i];
            if (callback.call(context, current, i, this)) {
                result.push(current);
            }
        }
    }
    return result;
}


Array.prototype.myFilter1 = function(callback, newObj) {
    if (this == null){
        throw new Error ('ERROR!!!');
    }
    if (typeof callback !== 'function') {
        throw new Error ('YOUR CALLBACK IS NOT A FUNCTION');
    }
    let context = this;
    if (arguments.length > 1){
        context = newObj;
    }
    let result = [];
    this.forEach((el, index) => {
                if (callback.call(context, el, index)) {
                    result.push(el);
                }
    })
    
    return result;
}


function createDebounceFunction(func, delay) {
    if (typeof func !== 'function') {
        throw new Error('NOT A FUNCTION');
    }
    if (!Number.isSafeInteger(delay)){
        throw new Error('YOUR DELAY IS NOT VALID NUMBER');
    }
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(this, args);
        }, delay);
    }
}

