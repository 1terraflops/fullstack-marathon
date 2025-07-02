class Avenger extends Function {
    constructor(name, alias, gender, age, superpowers = [], hp) {
        super();
        const self = this;

        const func = function (...args) {
            return self.call.call(func, ...args);
        };

        Object.setPrototypeOf(func, new.target.prototype);

        func._name = name;
        func.alias = alias;
        func.gender = gender;
        func.age = age;
        func.powers = superpowers;
        func.hp = hp;

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