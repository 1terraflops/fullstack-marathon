module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        const upperStr = this.str.toUpperCase();
        const result = {};

        for (let i = 0; i < upperStr.length; i++) {
            const char = upperStr[i];
            if (char >= 'A' && char <= 'Z') {
                if (result[char] === undefined) {
                    result[char] = 1;
                }
                else {
                    result[char] = result[char] + 1;
                }
            }
        }

        return result;
    }

    wordFrequencies() {
        let upperStr = this.str.toUpperCase();

        upperStr = upperStr.replace(/,|--|!|'|[0-9]/g, '');
        upperStr = upperStr.replace(/\s+/g, ' ').trim();

        const words = upperStr.split(' ');
        const result = {};

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (result[word] === undefined) {
                result[word] = 1;
            }
            else {
                result[word] = result[word] + 1;
            }
        }

        return result;
    }

    reverseString() {
        let newStr = '';
        for (let i = this.str.length - 1; i >= 0; i--) {
            newStr += this.str[i];
        }

        return newStr;
    }
}