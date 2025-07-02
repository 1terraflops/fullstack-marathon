const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('/submit', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    result.innerHTML = `
<p>POST</p>
<pre>
Array
(
    [name] => ${data.name}
    [email] => ${data.email}
    [age] => ${data.age}
    [about] => ${data.about}
    [file] => ${data.file}
)
</pre>
    `;
});
