function firstUpper(str = '') {
    if (typeof str !== 'string' || !str) return '';

    str = str.trim();
    str = str.toLowerCase();
    str = str.slice(0, 1).toUpperCase() + str.slice(1);

    return str;
}

module.exports = {firstUpper};