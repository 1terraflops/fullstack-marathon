class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);

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

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head.next;
        let prev = this.head;

        while (current) {
            if (current.value === value) {
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
            if (current.value === value)
                return true;
            current = current.next;
        }

        return false;
    }

    [Symbol.iterator] = function *() {
        let current = this.head;

        while (current) {
            yield current.value;
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

    log() {
        let values = [];

        for (let i of this)
            values.push(i);

        console.log(values.join(', '));
    }
}

function createLinkedList(arr) {
    const list = new LinkedList();

    arr.forEach((value) => {
        list.add(value);
    });

    return list;
}