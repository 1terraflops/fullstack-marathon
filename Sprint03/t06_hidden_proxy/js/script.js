const validator = {
    get (target, property) {
        console.log(`Trying to access the property '${property}'`);
        if (property in target)
            return target[property];
        else
            return false;
    },

    set(target, property, newValue) {
        if (property === "age") {
            if (Number.isNaN(Number(newValue))) {
                throw new TypeError(`The age is not an integer`);
            }
            if (newValue < 0 || newValue > 200) {
                throw new RangeError(`The age is invalid`);
            }

            console.log(`Setting value '${newValue}' to '${property}'`);
            target[property] = newValue;
            return true;
        }
        else {
            console.log(`Setting value '${newValue}' to '${property}'`);
            target[property] = newValue;
            return true;
        }
    }
}