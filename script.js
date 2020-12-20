var eventData = document.querySelector(".row");

// Displays current time and date inside <p> tag in HTML document

displayDate = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(displayDate);

function renderLastRegistered(){
eventData = localStorage.getItem(".row");

}

$(document).ready(function () {
console.log("ready")

for(i = 0; i < 9; i++) {


var pastData = $("<div>").addClass(".past");
var presentData = $("<div>").addClass(".present");
var futureData = $("<div>").addClass(".future");

if (moment().isAfter(pastData)){
  $(".hour").addClass(".future");
} else if (moment().isBefore(presentData)) {
  $(".hour").addClass(".past");
  else (moment().isSame(presentData)){
  $(".hour").addClass(".present")
}
}

// Saves to local storage

  $(".saveBtn").click(function () {
    var userInput = $(this).siblings("textarea").val()
    console.log(userInput);
    var key = $(this).attr("saveData");
    localStorage.setItem(key, userInput);
    renderLastRegistered();
  });
});
