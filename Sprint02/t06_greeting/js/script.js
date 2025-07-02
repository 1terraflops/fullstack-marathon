function checkForDigits(str) {
    for (let i of str) {
        if (!isNaN(i)) return true;
    }

    return false;
}

const fullname = window.prompt("The your first and last name");

let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);

if (fullname.split(" ").length !== 2 || checkForDigits(firstName) ||
    checkForDigits(lastName) || firstName.length < 1 || lastName.length < 1)
{
    window.alert("Wrong input!");
    console.log("Wrong input!");
}
else
{
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    window.alert(`Greetings, ${firstName} ${lastName}!`);
    console.log(`Greetings, ${firstName} ${lastName}!`);
}