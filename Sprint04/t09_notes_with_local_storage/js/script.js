const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const textarea = document.querySelector("textarea");
const notes = document.querySelector('.notes');

function getNotes() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(localStorage.getItem(`note${i}`));
    }

    return arr;
}

function displayNotes() {
    const notesArray = getNotes();
    notes.innerHTML = '';

    if (localStorage.length === 0) {
        notes.innerHTML = '[Empty]';
    }
    else {
        notesArray.forEach((note) => {
            const noteElement = document.createElement('p');
            noteElement.textContent = note;
            notes.appendChild(noteElement);
        });
    }
}

addBtn.addEventListener("click", () => {
    if (!textarea.value) {
        window.alert(`It's empty. Try to input something in "Text input".`);
        return;
    }
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const year = String(now.getFullYear()).slice(-2); // Get last 2 digits of the year
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;

    localStorage.setItem(`note${localStorage.length}`, `--> ${textarea.value} [${date}]`);
    displayNotes();
});

clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        localStorage.clear();
        displayNotes();
    }
});

window.onload = displayNotes;