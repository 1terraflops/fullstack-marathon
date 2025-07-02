const form = document.querySelector('form');
const h1 = document.querySelector('h1');

const div = document.createElement('div');
const name = document.createElement('p');
const alias = document.createElement('p');
const age = document.createElement('p');
const description = document.createElement('p');
const photo = document.createElement('p');
const experience = document.createElement('p');
const level = document.createElement('p');
const purpose = document.createElement('p');
const fieldset = document.createElement('fieldset');
const button = document.createElement('button');
button.textContent = 'FORGET';
fieldset.appendChild(button);
div.appendChild(name);
div.appendChild(alias);
div.appendChild(age);
div.appendChild(description);
div.appendChild(photo);
div.appendChild(experience);
div.appendChild(level);
div.appendChild(purpose);
div.appendChild(fieldset);

let selectedRadioIndex = -1;
const publicityRadios = document.querySelectorAll('input[name="publicity"]');
publicityRadios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        selectedRadioIndex = index;
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form.style.display = 'none';
    h1.after(div);
    div.style.display = 'block';

    const formData = new FormData(form);

    const fileInput = document.getElementById('photo-button');
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        formData.delete('photo');
        formData.append('photo', fileName);
    }

    await fetch('/submit', {
        method: 'POST',
        body: formData
    });

    const data = await fetch('/data');
    const formInfo = await data.json();

    for (let key in formInfo) {
        sessionStorage.setItem(key, formInfo[key]);
    }

    name.textContent = `name: ${sessionStorage.getItem('real-name')}`;
    alias.textContent = `alias: ${sessionStorage.getItem('hero-alias')}`;
    age.textContent = `age: ${sessionStorage.getItem('age')}`;
    description.textContent = `description: ${sessionStorage.getItem('about')}`;
    photo.textContent = `photo: ${sessionStorage.getItem('photo')}`;
    experience.textContent = `experience: ${sessionStorage.getItem('powers').split(',').length}`;
    level.textContent = `level: ${sessionStorage.getItem('range')}`;
    purpose.textContent = `purpose: ${selectedRadioIndex}`;
});

button.addEventListener('click', () => {
    div.style.display = 'none';
    form.style.display = 'block';
    form.reset();
    sessionStorage.clear();
    name.textContent = '';
    alias.textContent = '';
    age.textContent = '';
    description.textContent = '';
    photo.textContent = '';
    experience.textContent = '';
    level.textContent = '';
    purpose.textContent = '';
});