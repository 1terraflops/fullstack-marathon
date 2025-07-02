function concat(string1, string2) {
    if (string1 && string2) {
        return string1.concat(" ").concat(string2);
    }

    promptForString.count = 0;
    function promptForString() {
        promptForString.count++;
        string2 = window.prompt("Enter the seconds string");
        return string1.concat(" ").concat(string2);
    }

    return promptForString;
}