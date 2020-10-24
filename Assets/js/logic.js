$(document).ready(function () {
  // Button click to start game
  var $timer = 75;
  var $score = 0;

  // question bank
  var questionIndex = 0;
  var questions = [
    {
      q: "What color is the sky?",
      o: ["blue",
        "green",
        "yellow", "red"],
      a: "blue"
    },
    {
      q: "What color is the grass?",
      o: ["blue", "green", "yellow", "red"],
      a: "blue"
    },
    {
      q: "What color is the cloud?",
      o: ["brown", "green", "white", "red"],
      a: "white"
    },
  ];

  // hide end screen

  $(".end-screen").hide();

  ////start button function to start the game 

  $("#startbutton").on("click", function () {

    // clear intro html elements
    $(".intro").hide();
    
    // start timer
    interval = setInterval(function () {
      $timer--;
      $(".timer").text("Time Left: " + $timer);

      //if timer interval === 0
      if ($timer <= 0) {
        endTheQuiz();
      }
    }, 1000);

    //generate the first question
    generateQuestion();
  });

  //set potion to put it
  var questionBank = document.querySelector("#questionbank");

  function generateQuestion() {

    //create question markUp in var
    var questionMarkUp = `
      <div>
        <h4 id="question" class="text-center mt-3">${questions[questionIndex].q}</h4>
      </div>
      <div class="list-group mt-3 text-center">
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[0]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[1]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[2]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[3]}</button>
      </div>
    `;

    //inject the markUp into #questionBank convert to html
    questionBank.innerHTML = questionMarkUp;
  }

  questionBank.addEventListener("click", function (event) {
    //check if answer choice element is selected
    if (event.target.className.indexOf("answer-choice") > -1) {
      processAnswer(event);
    }
  });

  function processAnswer(event) {
    //determine if it is correct
    if (event.target.textContent === questions[questionIndex].a) {
      //add to score
      $score++;
    }
    else {
      //decrement time
      $timer = $timer - 30;
    }

    //increment index
    questionIndex++;

    //check if last question
    if (questionIndex === questions.length) {
      endTheQuiz();
    }

    //show next question
    generateQuestion();
  }

  function endTheQuiz() {
    //clear interval

    clearInterval($timer);
    
    //hide question

    $("#questionbank").hide();

    //hide timers

    $(".timer").hide()

    //update score

    $(".end-screen").show();

    //display score

    $(".final-score").text("Here's your final score: " + $score)

  }

})

  // //submit function
  // document.querySelecton(".submit-btn").addEventListener("click", storeData);

  // function storeData() {
  //   //get the input box value in a var
  //    var userInput = document.querySelector("#end-container input");

  //   //check if input is not empty
  //   if (userInput !== "") {
  //     //get the old data
  //       var data = 
  //     //create the new data

  //     //add the new data to old data

  //     //store it

  //     //redirect the user to other HTML page
   
