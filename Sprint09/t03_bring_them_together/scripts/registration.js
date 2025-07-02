const form = document.querySelector('form');
const div = document.querySelector('div');
const p = document.getElementById('error');
const h1 = document.querySelector('h1');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    p.style.display = 'none';

    try {
        const response = await axios.post('/api/register', new FormData(form));
        const data = response.data;

        if (data.error) {
            throw new Error(data.error);
        }

        div.style.display = 'none';
        h1.textContent = 'Registration completed!';

        window.location.href = '/';
    }
    catch(e) {
        p.style.display = 'block';
        p.textContent = e;
    }
});