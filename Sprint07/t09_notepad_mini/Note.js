async function loadNotes() {
    const res = await fetch('/api/notes');
    const notes = await res.json();
    const listDiv = document.getElementById('notesList');
    listDiv.innerHTML = '';

    for (const id in notes) {
        const note = notes[id];
        const div = document.createElement('div');
        div.className = 'note-item';
        div.innerHTML = `
            <strong>${note.date} › ${note.name}</strong>
            <a href="#" onclick="showNote('${id}')">[view]</a>
            <a href="/api/delete/${id}">[delete]</a>
        `;
        listDiv.appendChild(div);
    }
}

async function showNote(id) {
    const res = await fetch(`/api/note/${id}`);
    const note = await res.json();
    document.getElementById('noteDetail').innerHTML = `
        <h3>Details</h3>
        <p><strong>Date:</strong> ${note.date}</p>
        <p><strong>Name:</strong> ${note.name}</p>
        <p><strong>Importance:</strong> ${note.importance}</p>
        <p><strong>Content:</strong><br>${note.content}</p>
    `;
}

document.addEventListener('DOMContentLoaded', loadNotes);