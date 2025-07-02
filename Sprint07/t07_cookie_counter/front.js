const counter = document.querySelector('#counter');

document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get('/cookie');
    counter.textContent = `This page was loaded ${response.data} time(s) in the last minute`;
});