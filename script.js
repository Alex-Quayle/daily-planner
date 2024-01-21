let date = $('#currentDay');
// Calls upon day.js to access the current weekday, month, and day
let dateFormat = dayjs().format('dddd, MMMM D');
// Appends the date to the p tag
date.append(dateFormat);
// Accesses the container where the timeblocks go
let timeBlock = $('.container');
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// Adds a time block to the page 9 times
for (let i = 0; i < 9; i++) {
    let blockContent = $(`<div class="container">
    <div class="row" data-index-number='${i}'>
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

// Code block responsible for saving user input
timeBlock.on('click', '.saveBtn', function () {
    // Finds the timeblock where the text is entered and assigns it to an variable 
    let index = $(this).closest('.row').data('index-number')
    // Retrieves the user input and stores it in a variable
    let textValue = $(this).siblings('textarea').val();
    // Saves the text into local storage, with the index variable allowing for multiple stored values
    localStorage.setItem('timeBlock ' + index, textValue);
});

// Returns the user input (value) back to its indexed position after a page reload
$(document).ready(function () {
    for (let i = 0; i < 9; i++) {
        let key = 'timeBlock ' + i;
        let value = localStorage.getItem(key);
        if (value !== null) {
            // Finds the row with the corresponding index number and assigns the value
            $('.row[data-index-number="' + i + '"]').find('textarea').val(value);
        }
    }
});
