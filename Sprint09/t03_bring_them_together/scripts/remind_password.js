const form = document.querySelector('form');
const p = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    p.style.display = 'none';

    try {
        const response = await axios.post('/api/remind', new FormData(form));

        if (response.data.error) {
            throw { error: response.data.error}
        }
    }
    catch (err) {
        p.style.display = 'block';
        p.textContent = err.error;
    }
});