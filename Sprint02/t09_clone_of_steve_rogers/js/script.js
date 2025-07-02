function copyObj(obj) {
    let copy = {};
    for (let i in obj)
        copy[i] = obj[i];

    return copy;
    // return { ...obj } -> using spread operator would result in a more elegant 1-line solution
}