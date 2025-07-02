const form = document.querySelector('form');
const select = document.querySelector('select');
const input = document.querySelector('input');
const inputString = document.getElementById('input-string');
const utfString = document.getElementById('utf8-string');
const isoString = document.getElementById('iso-string');
const winString = document.getElementById('windows-string');
const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const output3 = document.getElementById('output-3');
const output4 = document.getElementById('output-4');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const selectedOptions = Array.from(select.selectedOptions);
    const selectedValues = selectedOptions.map(option => option.value);

    utfString.style.display = 'none';
    isoString.style.display = 'none';
    winString.style.display = 'none';

    inputString.style.display = 'block';
    output1.textContent = input.value;

    for (const value of selectedValues) {
        if (value === 'utf-8') {
            const response = await axios.post('/utf', {'text': input.value });
            utfString.style.display = 'block';
            output2.textContent = response.data;
        }
        if (value === 'iso') {
            const response = await axios.post('/iso', {'text': input.value });
            isoString.style.display = 'block';
            output3.textContent = response.data;
        }
        if (value === 'win') {
            const response = await axios.post('/win', {'text': input.value });
            winString.style.display = 'block';
            output4.textContent = response.data;
        }
    }
});

form.addEventListener('reset',  () => {
    inputString.style.display = 'none';
    utfString.style.display = 'none';
    isoString.style.display = 'none';
    winString.style.display = 'none';
});