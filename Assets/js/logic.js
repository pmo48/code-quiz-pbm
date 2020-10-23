// Button click to start game
var $timer = 75;
var $score = 0;

$(document).ready(function() {

  $("#startbutton").on("click", function () {
    $(".intro").empty();
    interval = setInterval(function() {
      $timer--;
      $(".timer").text("Time Left: " + $timer);
  }, 1000);

    $("#question").text("TestQuestion1?");
    $("#button1").text("TestOption1");
    $("#button2").text("TestOption2");
    $("#button3").text("TestOption3");
    $("#button4").text("TestOption4");
    
    $("#button1, #button2, #button3, #button4").on("click", function () {
      $("#question").text("TestQuestion2?");
      $("#button1").text("TestQ2Option1");
      $("#button2").text("TestQ2Option2");
      $("#button3").text("TestQ2Option3");
      $("#button4").text("TestQ2Option4");
    })
      $("#button1").on("click", function () {
        $score++;
        console.log($score);
      })
      $("#button2, #button3, #button4").on("click", function () {
        $timer = $timer - 30;
        console.log($timer);
      }
      
      )

  $("#button1, #button2, #button3, #button4").on("click", function () {
    $("#question").text("TestQuestion2?");
    $("#button1").text("TestQ2Option1");
    $("#button2").text("TestQ2Option2");
    $("#button3").text("TestQ2Option3");
    $("#button4").text("TestQ2Option4");
  })

  $("#button1, #button2, #button3, #button4").on("click", function () {
    $("#question").text("TestQuestion45?");
    $("#button1").text("TestQ2Option1");
    $("#button2").text("TestQ2Option2");
    $("#button3").text("TestQ2Option3");
    $("#button4").text("TestQ2Option4");
  })
})
})