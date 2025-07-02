module.exports = class HardWorker {
    constructor(name, age, salary) {}

    set age(age) {
        if (age >= 1 && age <= 100)
            this._age = age;
    }

    set salary(salary) {
        if (salary >= 100 && salary <= 10000)
            this._salary = salary;
    }

    get age() {
        return this._age;
    }

    get salary() {
        return this._salary;
    }

    toObject() {
        return this;
    }
}