let range = window.prompt("Enter a range in this format: num1-num2");

if (range !== "") {
    let num1 = range.slice(0, range.indexOf("-"));
    let num2 = range.slice(range.indexOf("-") + 1);
    num1 = +num1;
    num2 = +num2;

    checkDivision(num1, num2);
}
else {
    let num1 = 1;
    let num2 = 100;
    checkDivision(num1, num2);
}

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            console.log(`${i} is even, a multiple of 3, a multiple of 10`);
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            console.log(`${i} is even, a multiple of 3`);
        }
        else if (i % 2 === 0 && i % 10 === 0) {
            console.log(`${i} is even, a multiple of 10`);
        }
        else if (i % 10 === 0) {
            console.log(`${i} is a multiple of 10`);
        }
        else if (i % 3 === 0) {
            console.log(`${i} is a multiple of 3`);
        }
        else if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
        else {
            console.log(`${i} -`);
        }
    }
}