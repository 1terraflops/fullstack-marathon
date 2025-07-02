function* stepGenerator() {
    let value = 1;

    while (true) {
        let increment = window.prompt(`Previous value: ${ value }. Enter new value or 'q' to exit.`);

        if (increment === 'q') {
            console.log('Exiting generator...');
            return;
        }

        increment = Number(increment);
        if (isNaN(increment)) {
            console.error('Invalid number!');
        }
        else {
            value += increment;
            if (value > 10000) value = 1
            yield value;
        }
    }
}