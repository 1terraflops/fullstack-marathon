let cursor = {
    x: null,
    y: null
};

let box = {
    id: null,
    x: null,
    y: null
};

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('boxes')) {
        e.target.classList.toggle('disabled');
    }
});

document.addEventListener('mousedown', e => {
    if (e.target.classList.contains('boxes') && !e.target.classList.contains('disabled')) {
        cursor = {
            x: e.clientX,
            y: e.clientY
        };

        e.target.style.position = 'absolute';

        box = {
            id: e.target,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        };
    }
});

document.addEventListener('mousemove', e => {
    if (box.id) {
        const dx = e.clientX - cursor.x;
        const dy = e.clientY - cursor.y;

        box.id.style.left = (box.x + dx) + 'px';
        box.id.style.top = (box.y + dy) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    box.id = null;
});