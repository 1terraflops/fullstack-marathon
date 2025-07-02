const form = document.querySelector('form');
const files = document.querySelector('#files');
const selectedFile = document.querySelector('#selected-file');
let activeFile;

const updateList = async () => {
    const html = await axios.get('/select-file');
    files.innerHTML = html.data;
}

document.addEventListener('click', async (e) => {
    if (e.target.tagName === 'A' && e.target.closest('#files')) {
        e.preventDefault();
        const filename = e.target.href.slice(e.target.href.indexOf('=') + 1).replace('.txt', '');

        const response = await axios.get('/file?file=' + filename);
        selectedFile.style.display = 'block';
        selectedFile.innerHTML = `
        <h2>Selected file:</h2>
        <h2>${response.data.filename}</h2>
        <p>Content:</p>
        <p>${response.data.content}</p>
        <button id="delete">Delete file</button>`
        activeFile = response.data.filename;
    }
    if (e.target.tagName === 'BUTTON') {
        await axios.delete('/file?file=' + activeFile);
        await updateList();
        selectedFile.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', async() => {
    await updateList();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await axios.post('/submit', {filename: form.filename.value, content: form.content.value});
    await updateList();
});