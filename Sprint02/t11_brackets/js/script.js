function checkBrackets(str) {
    if (typeof str !== "string") return -1;
    if (!str.includes('(') && !str.includes(')')) return -1;

    let left = 0;
    let right = 0;

    for (let i of str) {
        if (i === '(')
            left++;
        else if (i === ')') {
            if (left > 0)
                left--;
            else
                right++;
        }
    }

    return left + right;
}

module.exports = checkBrackets;