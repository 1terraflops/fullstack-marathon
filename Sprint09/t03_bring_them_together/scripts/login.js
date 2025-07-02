const form = document.querySelector('form');
const p = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    p.style.display = 'none';

    try {
        const response = await axios.post('/api/login', new FormData(form));
        const data = response.data;

        if (data.error) {
            throw new Error(data.error);
        }

        window.location.href = '/';
    }
    catch(e) {
        p.style.display = 'block';
        p.textContent = e;
    }
});