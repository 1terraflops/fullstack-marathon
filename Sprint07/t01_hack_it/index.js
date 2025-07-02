const form = document.querySelector('form');
const result = document.getElementById('label');
const hacked = document.querySelector('p');
const div = document.querySelector('div');
const children = div.querySelectorAll('*');
const guessBtn = div.querySelector('button');
const clearBtn = document.getElementById('clear');
const guess = document.querySelector('#guess');

function reset() {
    hacked.textContent = '';
    result.textContent = 'Password not saved at session';
    children.forEach(el => {
        el.style.display = 'none';
    });

    form.style.display = 'block';
    form.reset();
    guess.value = '';
    sessionStorage.clear();
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    result.textContent = 'Password saved at session';
    form.style.display = 'none';

    children.forEach(el => {
        el.style.display = 'inline-block';
    });

    const data = {
        password: form.password.value,
        salt: form.salt.value
    };

    const response = await axios.post('/submit', data);

    sessionStorage.setItem('password', form.password.value);
    sessionStorage.setItem('salt', form.salt.value);
    sessionStorage.setItem('hash', response.data);

    document.getElementById('hash').textContent = `Hash is ${response.data}.`;
    hacked.textContent = '';
});

guessBtn.addEventListener('click', async () => {
    const response = await axios.post('/guess', { 'guess': guess.value });

    if (response.data) {
        reset();
        hacked.textContent = 'Hacked!';
        hacked.style.color = 'green';

    }
    else {
        hacked.textContent = 'Access denied!';
        hacked.style.color = 'red';
    }
});

clearBtn.addEventListener('click', async() => {
    reset();
});