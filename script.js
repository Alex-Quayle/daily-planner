let date = $('#currentDay');
// Calls upon day.js to access the current weekday, month, and day
let dateFormat = dayjs().format('dddd, MMMM D');
// Appends the date to the p tag
date.append(dateFormat);
// Accesses the container where the timeblocks go
let timeBlock = $('.container');
// Stores the time block content
let blockContent =
    `<div class="container">
    <div class="row">
      <div class="col-2 hour d-flex justify-content-center align-items-center">Hour</div>
      <div class="col-8 future d-flex align-items-center">Description</div>
      <div class="col-2 saveBtn d-flex justify-content-center align-items-center">
        <span class="material-symbols-outlined">save</span>
      </div>
    </div>
  </div>`;

// Adds a time block to the page 8 times
for (let i = 0; i < 8; i++) {
    timeBlock.append(blockContent);
}