function removeDuplicates() {
    let str = this.trim();

    let result = "";
    while (str.length > 0) {
        let spaceIndex = str.indexOf(" ");
        let word;

        if (spaceIndex === -1) {
            word = str;
            str = "";
        }
        else {
            word = str.slice(0, spaceIndex);
            str = str.slice(spaceIndex + 1).trimStart();
        }

        if (!(" " + result + " ").includes(" " + word + " ")) {
            result += word + " ";
        }
    }

    return result.trim();
}

String.prototype.removeDuplicates = removeDuplicates;