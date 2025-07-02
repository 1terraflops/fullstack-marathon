const form = document.querySelector('form');
const div = document.querySelector('div');
const destP = document.querySelector('#destination');
const bodyPre = document.querySelector('#body');

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        div.style.display = 'none';
        form.reset();
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await axios.post('/website', {url: form.url.value});
    console.log(response.data);
    div.style.display = 'block';
    destP.textContent = 'url: ' + form.url.value;
    bodyPre.textContent = response.data.html;
});