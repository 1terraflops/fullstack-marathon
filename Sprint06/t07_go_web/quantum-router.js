function calculateTime() {
    const start = new Date("January 1, 1939 03:00:00");
    const end = new Date(Date.now());

    const diffMs = end - start;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const diffYears = diffDays / 365;
    const quantumYears = diffYears / 7;

    const years = Math.floor(quantumYears);
    const months = Math.floor((quantumYears - years) * 12);
    const days = Math.round(((quantumYears - years) * 12 - months) * 30);

    return [years, months, days];
}

module.exports = { calculateTime };