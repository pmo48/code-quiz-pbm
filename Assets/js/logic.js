// Button click to start game

$(document).ready(function() {
  
  $("#startbutton").on("click", function () {
    $("#question").text("TestQuestion1?");
    $("#button1").text("TestOption1");
    $("#button2").text("TestOption2");
    $("#button3").text("TestOption3");
    $("#button4").text("TestOption4");
  })

  $("#button1").on("click", function () {
    $("#question").text("TestQuestion2?");
    $("#button1").text("TestQ2Option1");
    $("#button2").text("TestQ2Option2");
    $("#button3").text("TestQ2Option3");
    $("#button4").text("TestQ2Option4");
  })
})