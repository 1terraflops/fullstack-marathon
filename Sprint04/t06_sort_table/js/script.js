function fillTable() {
    for (let i = 0; i < names.length; i++) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        const tdStrength = document.createElement("td");
        const tdAge = document.createElement("td");

        tdName.textContent = names[i];
        tdStrength.textContent = `${strength[i]}`;
        tdAge.textContent = `${age[i]}`;

        tr.appendChild(tdName);
        tr.appendChild(tdStrength);
        tr.appendChild(tdAge);

        tbody.appendChild(tr);
    }
}

function updateMessage(column, order) {
    message.textContent = `Sorting by ${column}, order: ${order}`;
}

const div = document.querySelector("div");
div.innerHTML = '';

const header = ["Name", "Strength", "Age"];
let names = [
    "Black Panther", "Captain America", "Captain Marvel", "Hulk",
    "Iron Man", "Spider-Man", "Thanos", "Thor", "Yon-Rogg"
];
let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
div.appendChild(table);

header.forEach(cell => {
   const th = document.createElement("th");
   th.textContent = cell;
   thead.appendChild(th);
});

const h1 = document.querySelector("h1");
const message = document.createElement("div");
message.classList.add("message");
h1.appendChild(message);

updateMessage("Name", "ASC");
fillTable();

const sortingRules = {
    Name: true,
    Strength: true,
    Age: true
};

thead.addEventListener("click", (e) => {
    const column = e.target.textContent;
    const ascending = sortingRules[column];
    let indices;

    if (column === "Name") {
        indices = names.map((_, i) => i);
        indices.sort((a, b) => {
            updateMessage("Name", ascending ? "ASC" : "DESC");
            return ascending ? names[a].localeCompare(names[b]) : names[b].localeCompare(names[a]);
        });
    }
    else if (column === "Strength") {
        indices = strength.map((_, i) => i);
        indices.sort((a, b) => {
            updateMessage("Strength", ascending ? "ASC" : "DESC");
            return ascending ? strength[a] - strength[b] : strength[b] - strength[a];
        });
    }
    else if (column === "Age") {
        indices = age.map((_, i) => i);
        indices.sort((a, b) => {
            updateMessage("Age", ascending ? "ASC" : "DESC");
            return ascending ? age[a] - age[b] : age[b] - age[a];
        });
    }

    names = indices.map(i => names[i]);
    strength = indices.map(i => strength[i]);
    age = indices.map(i => age[i]);

    sortingRules[column] = !ascending;

    tbody.innerHTML = '';
    fillTable();
});