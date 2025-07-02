const button = document.querySelector('button');

button.addEventListener('click', async () => {
    try {
        await axios.post('/api/logout');
    }
    catch (err) {
        console.error(err);
    }

    window.location.href = '/';
});