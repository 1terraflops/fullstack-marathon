const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const textarea = document.querySelector("textarea");
const notes = document.querySelector('.notes');

function getNotes() {
    const cookies = document.cookie.split('; ');
    const noteCookies = cookies.filter(cookie => cookie.startsWith('note'));
    return noteCookies.map(cookie => decodeURIComponent(cookie.split('=')[1]));
}

function displayNotes() {
    const notesArray = getNotes();
    notes.innerHTML = '';

    if (notesArray.length === 0) {
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

    const notesArray = getNotes();
    const noteIndex = notesArray.length;
    document.cookie = `note${noteIndex}=${encodeURIComponent(`--> ${textarea.value}`)}; max-age=2592000; path=/`;

    displayNotes();
});

clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        const notesArray = getNotes();
        notesArray.forEach((_, index) => {
            document.cookie = `note${index}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        });
        displayNotes();
    }
});

window.onload = displayNotes;