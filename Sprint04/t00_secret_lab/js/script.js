function transformation() {
    const text = document.getElementById("hero");
    const background = document.getElementById("lab");

    if (text.textContent === "Bruce Banner") {
        text.textContent = "Hulk";
        text.style.font = "130px 'Bowlby One', cursive";
        text.style.letterSpacing = "6px";
        background.style.background = "#70964b";
    }
    else {
        text.textContent = "Bruce Banner";
        text.style.font = "60px 'Bowlby One', cursive";
        text.style.letterSpacing = "2px";
        background.style.background = "#ffb300";
    }
}