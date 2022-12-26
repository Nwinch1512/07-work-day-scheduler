let timeDisplayEl = $("#currentDay");
let hourNineEl = $("textarea#hour-9");
// let timeBlocks = [];
// timeBlocks["9am"] = "";
// timeBlocks["10am"] = "";
// timeBlocks["11am"] = "";
// timeBlocks["12am"] = "tes";

let timeBlocks = {
  "9am": "",
  "10am": "",
  "11am": "",
  "12pm": "",
  "1pm": "",
  "2pm": "",
  "3pm": "",
  "4pm": "",
  "5pm": "",
};
console.log(timeBlocks);
// Displays day
function displayDay() {
  let today = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(today);
}

//Checks day every second
setInterval(displayDay, 1000);

// Displays currentHour
function checkCurrentHour() {
  let currentHour = moment().format("LT");
  console.log(currentHour);
}

//Checks time every second
let currentHour = setInterval(checkCurrentHour, 1000);
console.log(currentHour);

$each(timeBlocks, function (timeBlockIndex, timeBlockValue) {
  let timeBlockDiv = $("<div></div>");
  $("timeBlockDiv").$(".container").append(timeBlockDiv);
});

// Your Task
// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// Acceptance Criteria
// The app should:

// Display the current day at the top of the calender when a user opens the planner.
// DONE

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// set variable for current time using moment js
// if (moment js = time box) add class of present
// if (moment js > time box) add class of future
// if (moment js < time box) add class of past

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

// The following animation demonstrates the application functionality:
