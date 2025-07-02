const correctAnswer = document.getElementById('radio3');
const result = document.querySelector('p');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!correctAnswer.checked) {
        result.textContent = 'Shame on you! Go and watch Avengers!'
    }
    else {
        result.textContent = 'Correct!';
    }
});