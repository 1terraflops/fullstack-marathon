const fs = require('fs');

module.exports = class File {
    constructor(filename) {
        this.filename = filename + '.txt';
        this.create();
    }

    create() {
        if (!fs.existsSync(__dirname + '/tmp/')) {
            fs.mkdirSync(__dirname + '/tmp/');
            fs.writeFileSync(__dirname + '/tmp/' + this.filename, '');
        }
    }

    write(text) {
        fs.appendFileSync(__dirname + '/tmp/' + this.filename, text);
    }

    append(text) {
        fs.appendFileSync(__dirname + '/tmp/' + this.filename, text);
    }

    read() {
        return fs.readFileSync(__dirname + '/tmp/' + this.filename, 'utf-8');
    }

    delete() {
        fs.unlinkSync(__dirname + '/tmp/' + this.filename)
    }
}