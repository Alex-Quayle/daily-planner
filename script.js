let date = $('#currentDay');
// Calls upon day.js to access the current weekday, month, and day
let dateFormat = dayjs().format('dddd, MMMM D');
// Appends the date to the p tag
date.append(dateFormat);
// Accesses the container where the timeblocks go
let timeBlock = $('.container');
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// Adds a time block to the page 8 times
for (let i = 0; i < 9; i++) {
    let blockContent = $(`<div class="container">
    <div class="row">
        <div class="col-2 hour d-flex justify-content-center align-items-center">${hours[i]}</div>
        <textarea type="text" class="future col-8 d-flex align-items-center user-input"></textarea>
        <button class="col-2 saveBtn d-flex justify-content-center align-items-center">
    <span class="material-symbols-outlined">save</span>
    </button>
    </div>
</div>`);
// Changes the textarea colour based on the time of day, .future is the default thus not needed in this if/else block
    if (hours[i] < dayjs().hour()) {
        blockContent.find('textarea').addClass('past');
    } else {
        blockContent.find('textarea').addClass('present')
    }
    timeBlock.append(blockContent);
}
console.log(dayjs().hour());