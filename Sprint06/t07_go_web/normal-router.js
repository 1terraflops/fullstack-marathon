function calculateTime() {
    const now = new Date(Date.now());
    const start = new Date("January 1, 1939 03:00:00");

    const _years = now.getFullYear() - start.getFullYear();
    const _months = now.getMonth() - start.getMonth();
    const _days = now.getDate() - start.getDate();

    function years() {
        return _years;
    }

    function months() {
        return _months;
    }

    function days() {
        return _days;
    }

    return {years, months, days};
}

module.exports = {calculateTime};