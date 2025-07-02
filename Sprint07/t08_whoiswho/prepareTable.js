const fs = require('fs');

function index(insert = '') {
    const html = fs.readFileSync('./index.html', 'utf8');
    return html.replace('#TEXT#', insert);
}

function createTable(data, sentiment = '', file = '') {
    const cleanSentiment = sentiment.trim().toLowerCase();

    const filtered = data.filter(row => {
        const value = row.Alignment?.trim().toLowerCase();
        return cleanSentiment === '' || cleanSentiment === 'all' || value === cleanSentiment;
    });

    let result = `
    <form action="/filter" method="get">
      <input type="hidden" name="file" value="${file}">
      <label>Filter:
        <select name="sentiment" onchange="this.form.submit()">
          <option value="all"${cleanSentiment === 'all' || cleanSentiment === '' ? ' selected' : ''}>All</option>
          <option value="good"${cleanSentiment === 'good' ? ' selected' : ''}>Good</option>
          <option value="bad"${cleanSentiment === 'bad' ? ' selected' : ''}>Bad</option>
          <option value="neutral"${cleanSentiment === 'neutral' ? ' selected' : ''}>Neutral</option>
        </select>
      </label>
    </form>
    `;

    if (filtered.length === 0) {
        return result + '<p>No matching results.</p>';
    }

    const headers = Object.keys(filtered[0]);
    result += `<table><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;

    for (const row of filtered) {
        result += `<tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>`;
    }

    result += '</table>';
    return result;
}

module.exports = { index, createTable };