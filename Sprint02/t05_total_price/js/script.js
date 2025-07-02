function total(addCount, addPrice, currentTotal = 0) {
    return (Number(addCount) * Number(addPrice) + Number(currentTotal)).toFixed(2);
}