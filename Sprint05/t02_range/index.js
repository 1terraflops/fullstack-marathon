function checkDivision(start = 1, end = 60) {
    if (start > end) return;

    for (let i = start; i <= end; i++) {
        switch (true) {
            case i % 2 === 0 && i % 3 === 0 && i % 10 === 0:
                console.log(`The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`);
                break;
            case i % 2 === 0 && i % 3 === 0:
                console.log(`The number ${i} is divisible by 2, is divisible by 3`);
                break;
            case i % 2 === 0 && i % 10 === 0:
                console.log(`The number ${i} is divisible by 2, is divisible by 10`);
                break;
            case i % 3 === 0 && i % 10 === 0:
                console.log(`The number ${i} is divisible by 3, is divisible by 10`);
                break;
            case i % 2 === 0:
                console.log(`The number ${i} is divisible by 2`);
                break;
            case i % 3 === 0:
                console.log(`The number ${i} is divisible by 3`);
                break;
            case i % 10 === 0:
                console.log(`The number ${i} is divisible by 10`);
                break;
            default:
                console.log(`The number ${i} -`);
        }
    }
}

module.exports = {checkDivision};