'use strict'

let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let deleteButton = document.querySelector('[data-delete]');
let allClearButton = document.querySelector('[data-all-clear]');
let previousValue = document.querySelector('[data-previous-value]'); 
let currentValue = document.querySelector('[data-current-value]');
let opositeButton = document.querySelector('[data-oposite]');

class Calculator {
    constructor(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.clear();
    }
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.additionalValueForEqual = '0';
        this.valueForOperation = '0'
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number) {
        if(this.currentOperand.length > 15) {
            return
        }
        if(number === '.' && this.currentOperand.includes('.')) {
            return
        }
     
        this.currentOperand = this.currentOperand + number;
        let value = this.currentOperand.split('');
        if(value[0] === '0') {
            value.shift();
            this.currentOperand = value.join('');
        }
       
        if(value[0] === '.') {
            value.unshift('0');
            this.currentOperand = value.join('');
        }
    }
    chooseOperation(operation) {
        if(this.currentOperand === '0') {
            return
        }
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = `${this.currentOperand} ${this.operation} `;
        this.currentOperand = '0';
       
    }
    opositeValue() {
        this.currentOperand = -1 * this.currentOperand;
    }
    
    compute() {
        if(this.additionalValueForEqual === '0') {
        let result;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
             if(isNaN(prev) || isNaN(current)) {
                 return
             }
      
            switch(this.operation) {
            
            case '+': 
                result = Number((prev + current).toFixed(8));
                break
            case '-':
                result = Number((prev - current).toFixed(8));
                break
            case '×': 
                result = Number((prev * current).toFixed(8));
                break
            case '÷': 
                if(current === 0) {
                    result = 'Деление на ноль невозможно';
                    break
                } else {
                result = Number((prev / current).toFixed(8));
                break
                }
            default: return
        }
        this.total = result;
        this.currentOperand = result;
        this.additionalValueForEqual = current;
        this.previousOperand = `${prev} ${this.operation} ${current}`
        this.valueForOperation = this.currentOperand;           
        } else {

            let result;
            let prev = parseFloat(this.total);
            let current = parseFloat(this.additionalValueForEqual);
            if(isNaN(prev) || isNaN(current)) {
                return
            }
     
           switch(this.operation) {
           
           case '+': 
               result = Number((prev + current).toFixed(8));
               break
           case '-':
               result = Number((prev - current).toFixed(8));
               break
           case '×': 
               result = Number((prev * current).toFixed(8));
               break
           case '÷': 
               if(current === 0) {
                   result = 'Деление на ноль невозможно';
                   break
               } else {
               result = Number((prev / current).toFixed(8));
               break
               }
           default: return
            }
            this.currentOperand = result;
            this.previousOperand = `${prev} ${this.operation} ${current}`;
            this.total = result;
           
        }
    }
    updateDisplay() {
        this.currentValue.textContent = this.currentOperand ==='0'? this.valueForOperation : this.currentOperand;
        if(this.operation != null) {
            this.previousValue.textContent = this.previousOperand;
        } else {
            this.previousValue.textContent = '';
        }
    }
}


let calculator = new Calculator(previousValue, currentValue)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

opositeButton.addEventListener('click', () => {
    calculator.opositeValue();
    calculator.updateDisplay();
})
window.addEventListener('keydown', (e)=> {
    if(e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' 
    || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8'
    || e.key === '9' || e.key === '0' || e.key === '.') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    } else if(e.key ==='+' || e.key === '-' || e.key === '*' || e.key === '/' ) {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    } else if(e.key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();   
    } else if(e.key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    } else if(e.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    } else if(e.key === '`') {
        calculator.opositeValue();
        calculator.updateDisplay();
    }
})