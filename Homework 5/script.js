'use strict';

class Stack {
    constructor(stackLength = 10) {
        if(!Number.isSafeInteger(stackLength)) {
            throw new Error('Не валидное число');
        }
        if(stackLength <= 0 && Number.isSafeInteger(stackLength)) {
            stackLength = 1;
        }
        this.size = stackLength;
        this.head = 0;
        this.last = null;
    }
    push(data) {
        if(this.head == this.size) {
            throw new Error('Вы не можете больше добавлять элементы');
        } else {
            let prev = this.last;
            let element = {prev, data}
            this.last = element;
            this.head += 1;
        }    
    }
    pop() {
        if(!this.head) {
            throw new Error('Вы не можете удалить элемент, потому что стак пустой');
        }
        let element = this.last;
        if(!element) {
            return null;
        } else {
            this.head = this.head - 1;
            this.last = element.prev;
            return element.data;
        }
    }
    peek() {
        if(!this.head) {
            return null;
        } else {
            return this.last.data;
        }
    }
    isEmpty() {
        return this.head === 0;
    }
    toArray() {
        let newArray = [];
        let elem = this.last;
        while(elem) {
            newArray.push(elem.data);
            elem = elem.prev;
        }
        return newArray;
    }
    static fromIterable(iterable) {
        if(typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error ('Не итерируемая сущность');
        }
        let newStack = new Stack(iterable.length);
        for (let item of iterable) {
            newStack.push(item);
        }
        return newStack;
    }
}
 let stack = new Stack(-5);
 stack.push('ssadad')
 stack.push('2132123')
 

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        let node = {data, next: null};
        if(this.tail) {
            this.tail.next = node;
        }
        if(!this.head) {
            this.head = node;
        }
        this.tail = node;
    }
    prepend(data) {
        let node = {data, next: this.head};
        this.head = node;
        if(!this.tail) {
            this.tail = node;
        }
    }
    find(data) {
        if(!this.head) {
            throw new Error('Наш список пустой')
        }
        let current = this.head;
        while(current) {
            if(current.data === data) {
                return current;
            } 
            if(current.data !== data && current === this.tail) {
                return null;
            }
            current = current.next;
        }
    }
    toArray() {
        let resultArray = [];
        let currentValue = this.head;
        while(currentValue) {
            resultArray.push(currentValue.data);
            currentValue = currentValue.next;
        }
        return resultArray;
    }
    static fromIterable(iterable) {
        if(typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error ('Не итерируемая сущность');
        }
        let newLinkedList = new LinkedList();
        for (let item of iterable) {
            newLinkedList.append(item);
        }
        return newLinkedList;
    }            
}






