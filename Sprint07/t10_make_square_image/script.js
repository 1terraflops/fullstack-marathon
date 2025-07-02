document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const url = input.value;

    if (!url) return;

    const res = await fetch(`/upload?url=${encodeURIComponent(url)}`);
    const data = await res.json();

    const container = document.getElementById('results');
    container.innerHTML = '';

    data.img.forEach(src => {
        const img = document.createElement('img');
        img.src = '/' + src;
        img.width = 250;
        img.height = 250;
        container.appendChild(img);
    });
});