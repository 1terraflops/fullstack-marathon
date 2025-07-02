const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dataFile = 'notes.json';

function loadNotes() {
    if (!fs.existsSync(dataFile)) return {};
    const data = fs.readFileSync(dataFile, 'utf-8');
    return data ? JSON.parse(data) : {};
}

function saveNotes(notes) {
    fs.writeFileSync(dataFile, JSON.stringify(notes, null, 2));
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.get('/api/notes', (req, res) => {
    const notes = loadNotes();
    const formattedNotes = {};

    for (const id in notes) {
        notes[id].date = formatDate(notes[id].date);
        formattedNotes[id] = notes[id];
    }
    res.json(formattedNotes);
});

app.post('/api/notes', (req, res) => {
    const notes = loadNotes();
    const timestamp = Date.now();
    notes[timestamp] = {
        date: timestamp,
        name: req.body.name,
        importance: req.body.importance,
        content: req.body.content
    };
    saveNotes(notes);
    res.redirect('/');
});

app.get('/api/note/:id', (req, res) => {
    const notes = loadNotes();
    const note = notes[req.params.id];
    if (note) {
        note.date = formatDate(note.date);
    }
    res.json(note);
});

app.get('/api/delete/:id', (req, res) => {
    const notes = loadNotes();
    delete notes[req.params.id];
    saveNotes(notes);
    res.redirect('/');
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));