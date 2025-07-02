const houseMixin = {
    wordReplace(specifiedWord, wordToReplaceWith) {
        if (this.description.includes(specifiedWord))
            this.description = this.description.replace(specifiedWord, wordToReplaceWith);
    },

    wordInsertAfter(specifiedWord, wordToInsert) {
        if (this.description.includes(specifiedWord))
            this.description = this.description.replace(specifiedWord, `${specifiedWord} ${wordToInsert}`);
    },

    wordDelete(wordToDelete) {
        if (this.description.includes(wordToDelete))
            this.description = this.description.replace(wordToDelete, '').replace('  ', ' ');
    },

    wordEncrypt() {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let encoded = '';

        for (let i = 0; i < this.description.length; i++) {
            const char = this.description[i];
            const index = input.indexOf(char);
            if (index !== -1) {
                encoded += output[index];
            }
            else {
                encoded += char;
            }
        }

        this.description = encoded;
    },

    wordDecrypt() {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let decoded = '';

        for (let i = 0; i < this.description.length; i++) {
            const char = this.description[i];
            const index = output.indexOf(char);
            if (index !== -1) {
                decoded += input[index];
            }
            else {
                decoded += char;
            }
        }

        this.description = decoded;
    }
}