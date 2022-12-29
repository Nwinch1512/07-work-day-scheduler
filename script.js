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
  return moment().format("HH");
}

//Checks time every second
// let currentHour = setInterval(checkCurrentHour, 1000);

//Set up div for each timeblock
$.each(getCalendarEntries(), function (key, value) {
  let formattedKey = moment(key, "HH").format("ha");
  let currentHour = parseInt(checkCurrentHour());
  let keyAsInt = parseInt(key);
  let timeBlockDiv = $("<div>");
  timeBlockDiv.addClass("row time-block");
  timeBlockDiv.attr("timeBlock", key);
  let hourDiv = $("<div>");
  hourDiv.text(formattedKey);
  hourDiv.addClass("col-md-1 hour");
  let textAreaEl = $("<textarea>");
  textAreaEl.addClass("col-md-10 description");

  if (keyAsInt < currentHour) {
    textAreaEl.addClass("past");
  }
  if (keyAsInt > currentHour) {
    textAreaEl.addClass("future");
  }
  if (keyAsInt === currentHour) {
    textAreaEl.addClass("present");
  }

  textAreaEl.text(value);
  let timeBlockBtn = $("<button>");
  timeBlockBtn.addClass("btn saveBtn col-md-1");
  timeBlockBtn.attr("timeBlock", key);
  let btnIcon = $("<icon>");
  btnIcon.addClass("fas fa-save");

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
  let timeBlockDiv = btnClicked.parent();
  let timeBlockAttr = timeBlockDiv.attr("timeBlock");
  let textAreaEl = timeBlockDiv.children().eq(1);
  let calendarEntryText = textAreaEl.val();

  setCalendarEntry(timeBlockAttr, calendarEntryText);
}

function getCalendarEntries() {
  let storedCalendarEntries = JSON.parse(
    localStorage.getItem("calendarItemsKey")
  );
  if (storedCalendarEntries) {
    return storedCalendarEntries;
  } else {
    return {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
    };
  }
}

function setCalendarEntry(key, calendarEntry) {
  let storedCalendarEntries = getCalendarEntries();
  storedCalendarEntries[key] = calendarEntry;
  localStorage.setItem(
    "calendarItemsKey",
    JSON.stringify(storedCalendarEntries)
  );
}
