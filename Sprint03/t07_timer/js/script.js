class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount--})`);
        const id = setInterval(() => {
            if (this.stopCount < 0)
                this.stop(id);
            else
                this.tick();
        }, this.delay);
    }

    tick() {
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount--}`);
    }

    stop(id) {
        clearInterval(id);
        console.log(`Timer ${this.title} stopped`);
    }
}

function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}