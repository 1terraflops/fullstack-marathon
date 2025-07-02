const jsonData = document.getElementById('json');
const xmlData = document.getElementById('xml');

document.addEventListener('DOMContentLoaded', async() => {
    const response = await axios.get('/data');
    jsonData.textContent = JSON.stringify(response.data.json);
    xmlData.textContent = response.data.xml;
});