class EatException extends Error {
    constructor(error = 'No more junk food, dumpling') {
        super(error);
        this.message = error;
    }
}

module.exports.EatException = EatException;