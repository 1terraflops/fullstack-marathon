const LLData = require('./LLData');

class LList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new LLData(value);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    remove(value) {
        if (!this.head) return;
        if (!this.contains(value)) return false;

        if (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head.next;
        let prev = this.head;

        while (current) {
            if (current.data === value) {
                prev.next = current.next;
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.data === value)
                return true;
            current = current.next;
        }

        return false;
    }

    [Symbol.iterator] = function *() {
        let current = this.head;

        while (current) {
            yield current.data;
            current = current.next;
        }
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    count() {
        return this.size;
    }

    getFirst() {
        return this.head ? this.head.data : null;
    }

    getLast() {
        let current = this.head;
        if (!current) return null;

        while (current.next !== null) {
            current = current.next;
        }

        return current.data;
    }

    addFromArray(arrayOfData = []) {
        arrayOfData.forEach(item => {
           this.add(item);
        });
    }

    removeAll(value) {
        while (this.head && this.head.data === value) {
            this.head = this.head.next;
            this.size--;
        }

        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data === value) {
                prev.next = current.next;
                this.size--;
                current = current.next;
            }
            else {
                prev = current;
                current = current.next;
            }
        }
    }

    toString() {
        let current = this.head;
        let arr = [];

        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        return arr.join(', ');
    }

    getIterator() {
        let current = this.head;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (current) {
                    const value = current.data;
                    current = current.next;
                    return { value, done: false };
                }
                else
                    return { value: undefined, done: true };
            }
        };
    }

    filter(callback) {
        const list = new LList();
        let current = this.head;

        while (current) {
            if (callback(current.data)) {
                list.add(current.data);
            }
            current = current.next;
        }

        return list;
    }
}

module.exports = {LList};