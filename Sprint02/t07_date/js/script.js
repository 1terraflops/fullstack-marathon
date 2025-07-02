function getFormattedDate(dateObject) {
    return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} ${dateObject.toLocaleDateString("en-GB", {weekday: "long"})}`;
}