function sortEvenOdd(arr) {
    return arr.sort((a, b) => {
        if (a % 2 === 0 && b % 2 !== 0)
            return -1;
        else if (a % 2 !== 0 && b % 2 === 0)
            return 1;
        return a - b;
    })
}