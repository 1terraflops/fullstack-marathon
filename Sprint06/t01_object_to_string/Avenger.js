class Avenger extends Function {
    constructor(avenger) {
        super();
        const self = this;

        const func = function (...args) {
            return self.call.call(func, ...args);
        };

        Object.setPrototypeOf(func, new.target.prototype);

        func._name = avenger.name;
        func.alias = avenger.alias;
        func.gender = avenger.gender;
        func.age = avenger.age;
        func.powers = avenger.powers;

        return func;
    }

    toString() {
        return `  name: ${this._name}\n  gender: ${this.gender}\n  age: ${this.age}`;
    }

    call() {
        return '  ' + this.alias.toUpperCase() + '\n  ' + this.powers.join('\n  ');
    }
}

module.exports.Avenger = Avenger;