let number = window.prompt("Enter a number from 1-10");

while (Number.isNaN(Number(number)) || Number(number) < 1 || Number(number) > 10) {
    number = window.prompt("Enter a number from 1-10");
}

switch (Number(number)) {
    case 1: window.alert("Back to square 1"); break;
    case 2: window.alert("Goody 2-shoes"); break;
    case 3: case 6: window.alert("Two's company, three's a crowd"); break;
    case 4: case 9: window.alert("Counting sheep"); break;
    case 5: window.alert("Take five"); break;
    case 7: window.alert("Seventh heaven"); break;
    case 8: window.alert("Behind the eight-ball"); break;
    case 10: window.alert("Cheaper by the dozen"); break
}