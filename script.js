let timeDisplayEl = $("#currentDay");
let hourNineEl = $("textarea#hour-9");
let timeBlockContainer = $(".container");

// Displays day
function displayDay() {
  let today = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(today);
}

//Checks day every second
setInterval(displayDay, 1000);

// Displays currentHour
function checkCurrentHour() {
  return moment().format("ha");
}

//Checks time every second
// let currentHour = setInterval(checkCurrentHour, 1000);

//Set up div for each timeblock
$.each(getCalendarEntries(), function (key, value) {
  let timeBlockDiv = $("<div>");
  timeBlockDiv.addClass("row time-block");
  timeBlockDiv.attr("timeBlock", key);
  let hourDiv = $("<div>");
  hourDiv.text(key);
  let currentHour = checkCurrentHour();
  console.log(currentHour);
  console.log(key);

  // if (key < currentHour) {
  //   console.log("past");
  // }
  // if (key > currentHour) {
  //   console.log("future");
  // }
  hourDiv.addClass("col-md-1 hour");
  let textAreaEl = $("<textarea>");
  textAreaEl.addClass("col-md-10 description");
  if (key === currentHour) {
    textAreaEl.addClass("present");
  }
  if (key < currentHour) {
    textAreaEl.addClass("past");
  }
  if (key > currentHour) {
    textAreaEl.addClass("future");
  }
  textAreaEl.text(value);
  let timeBlockBtn = $("<button>");
  timeBlockBtn.addClass("btn saveBtn col-md-1");
  timeBlockBtn.attr("timeBlock", key);
  let btnIcon = $("<icon>");
  btnIcon.addClass("fas fa-save");

  //add value to timeBlock Array and to the div - determined by user input
  //   if(timeBlockIndex = )
  timeBlockBtn.append(btnIcon);
  timeBlockDiv.append(hourDiv);
  timeBlockDiv.append(textAreaEl);
  timeBlockDiv.append(timeBlockBtn);
  timeBlockContainer.append(timeBlockDiv);
  // Add click event listener to each button so that entry is stored
  timeBlockBtn.on("click", saveBtnClick);
});

function saveBtnClick(event) {
  let btnClicked = $(event.target);
  console.log(btnClicked);

  let timeBlockDiv = btnClicked.parent();
  let timeBlockAttr = timeBlockDiv.attr("timeBlock");
  console.log(timeBlockDiv);
  console.log(timeBlockAttr);
  let textAreaEl = timeBlockDiv.children().eq(1);
  console.log(textAreaEl);
  let calendarEntryText = textAreaEl.val();
  console.log(calendarEntryText);

  setCalendarEntry(timeBlockAttr, calendarEntryText);
}

function getCalendarEntries() {
  let storedCalendarEntries = JSON.parse(
    localStorage.getItem("calendarArrayKey")
  );
  if (storedCalendarEntries) {
    return storedCalendarEntries;
  } else {
    return {
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
  }
}

function setCalendarEntry(key, calendarEntry) {
  let storedCalendarEntries = getCalendarEntries();
  storedCalendarEntries[key] = calendarEntry;
  localStorage.setItem(
    "calendarArrayKey",
    JSON.stringify(storedCalendarEntries)
  );
}

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
//DONE
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// set variable for current time using moment js
// if (moment js = time box) add class of present
// if (moment js > time box) add class of future
// if (moment js < time box) add class of past

// Allow a user to enter an event when they click a timeblock
// DONE
// Save the event in local storage when the save button is clicked in that timeblock.
// DONE
// Persist events between refreshes of a page
// DONE
// The following animation demonstrates the application functionality:
