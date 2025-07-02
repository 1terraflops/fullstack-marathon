function addWords(obj, wrds) {
    let newWords = wrds.split(" ");
    let existingWords = obj.words ? obj.words.split(" ") : [];
    let allWords = existingWords.concat(newWords);
    let uniqueWords = [];

    for (let i = 0; i < allWords.length; i++) {
        let word = allWords[i];
        if (word !== "" && uniqueWords.indexOf(word) === -1) {
            uniqueWords.push(word);
        }
    }

    obj.words = uniqueWords.join(" ");
}

function removeWords(obj, wrds) {
    let toRemove = wrds.split(" ");
    let words = obj.words ? obj.words.split(" ") : [];
    let filteredWords = [];

    for (let i = 0; i < words.length; i++) {
        if (toRemove.indexOf(words[i]) === -1 && words[i] !== "") {
            filteredWords.push(words[i]);
        }
    }

    obj.words = filteredWords.join(" ");
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}