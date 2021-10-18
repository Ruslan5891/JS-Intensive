'use strict';

class Car{
    
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    set brand(value) {
        let inRange =  value.length >= 1 && value.length <= 50 ? true : false;
        if(typeof value === 'string' && inRange) {
            this.#brand = value;
        } else {
            throw new Error('Указаное значение не является строкой либо не входит в диапазон 1-50');
        }
    }
    get brand() {
        return this.#brand;
    }

    set model(value) {
        let inRange =  value.length >= 1 && value.length <= 50 ? true : false;
        if(typeof value === 'string' && inRange) {
            this.#model = value;
        } else {
            throw new Error('Указаное значение не является строкой либо не входит в диапазон 1-50');
        }
    }
    get model() {
        return this.#model;
    }

    set yearOfManufacturing(value) {
        if(typeof value !== 'number' || value < 1900 || value > 2021 || isNaN(value)) {
            throw new Error('Не в диапазоне 1900-2021, либо не валидноне число');
        } else {
            this.#yearOfManufacturing = value;
        }
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(value) {
        if(typeof value !== 'number' || isNaN(value) || value < 100 || value > 300) {
            throw new Error('Не в диапазоне 100-300, либо не валидноне число');
        } else {
            this.#maxSpeed = value;
        }
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(value) {
        if(typeof value !== 'number' || isNaN(value) || value < 5 || value > 20) {
            throw new Error('Не в диапазоне 5-20, либо не валидноне число');
        } else {
            this.#maxFuelVolume = value;
        }
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set fuelConsumption(value) {
        if(!this.#isStarted) {
            throw new Error('Заведите автомбиль и начните движение чтобы узнать расход');
        }
        if(typeof value !== 'number' || isNaN(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
            throw new Error('Расход топлива должен быть числом больше 0');;
        } else {
            this.#fuelConsumption = value;
        }
    }
    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if(this.#isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this.#isStarted = !this.#isStarted;
        }
    }
    shutDownEngine() {
        if(this.#isStarted) {
            this.#isStarted = !this.#isStarted;
        } else {
            throw new Error('Машина ещё не заведена');
        }
    }
    fillUpGasTank(value) {
        if(typeof value !== 'number' || isNaN(value) || value <= 0 || value > Number.MAX_SAFE_INTEGER) {
            throw new Error('Неверное количество топлива для заправки');
        }
        let inRange = (value + this.#currentFuelVolume) > this.#maxFuelVolume;
        if(inRange) {
            throw new Error('Топливный бак переполнен');
        } else {
            this.#currentFuelVolume += value;
        }
    }
    drive(speed, hours) {
        if(!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }
        if(typeof speed !=='number' || speed <= 0 || speed > Number.MAX_SAFE_INTEGER || isNaN(speed)) {
            throw new Error('Неверная скорость');
        }
        if(typeof hours !=='number' || hours <= 0 || hours > Number.MAX_SAFE_INTEGER || isNaN(hours)) {
            throw new Error('Неверное количество часов');
        }
        if(speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }
        if (((speed * hours) / 100) * this.#fuelConsumption > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
          }
        this.#mileage += speed * hours;
        this.#currentFuelVolume -= ((speed * hours) / 100) * this.#fuelConsumption;
    }
}

