// Variables for current day and time
var currentTime = moment();
var currentDate = currentTime.format("dddd, MMMM Do YYYY");

// Method to set text value to header
$("#currentDay").text(currentDate);



$(document).ready(function() {

    // For loop to get and display tasks from local storage
    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});

// For loop to display time, events and save button
for (i = 0; i < 9; i++) {
    
    var rowData = $("<div>").addClass("row");    
    var timeData = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
    timeData.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));   
    var eventData = $("<textarea>").addClass("col-md-9");    
    var saveBtn = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');   
    $(".container").append(rowData);    
    $(rowData).append(timeData);    
    $(timeData).after(eventData);    
    $(eventData).after(saveBtn);


    // if else statement to color code time of day

    //Displays red for current time

    if (currentTime.isSame(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
        $(eventData).addClass("present");

    //Displays green for future time

    } else if (currentTime.isBefore(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
        $(eventData).addClass("future");

    //Displays gray for past time

    } else if (currentTime.isAfter(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
        $(eventData).addClass("past");
    }
}

// on click event to save to localStorage

$(".saveBtn").on("click", function() {

    localStorage.setItem($(this).siblings("div.hour").attr("data-time"), $(this).siblings("textarea").val())
});


