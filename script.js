let date = $('#currentDay');
// Calls upon day.js to access the current weekday, month, and day
let dateFormat = dayjs().format('dddd, MMMM D');
// Appends the date to the p tag
date.append(dateFormat);