$(document).ready(function () {
  // Button click to start game
  var $timer = 75;
  var $score = 0;

  //high schores array


  // question bank
  var questionIndex = 0;
  var questions = [
    {
      q: "What color is the sky?",
      o: ["blue", "green", "yellow", "red"],
      a: "blue",
    },
    {
      q: "How many states are in the USA?",
      o: ["20", "40", "45", "50"],
      a: "50",
    },
    {
      q: "What color are clouds?",
      o: ["brown", "green", "white", "red"],
      a: "white",
    },
    {
      q: "How many hours are in a day?",
      o: ["20", "12", "24", "8"],
      a: "24",
    },
    {
      q: "What is the capitol of the USA?",
      o: ["Washington D.C.", "L.A.", "NYC", "Chicago"],
      a: "Washington D.C.",
    },
    {
      q: "What is NOT a color on the US flag?",
      o: ["red", "white", "blue", "yellow"],
      a: "yellow",
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
    //check if last question
    if (questionIndex === questions.length) {

      //if all questions are asked, call function to end the quiz
      endTheQuiz();

      //if all questions are asked, don't run remainder of  questions
      return;
    }
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
    
    //check score between questions
    console.log($score)

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

  // grab button and form input from html
  var submitHS = document.querySelector(".submit-btn");
  var formInput = document.querySelector(".formInput");

  // add event listener for button click
  submitHS.addEventListener("click", function(event) {
    event.preventDefault();
    addHS(event);
    redirectHS(event);
  });

  //function to add high scores
  function addHS() {
  //store initials  and score in variable
    var initialsInput = formInput.value.trim();
    var highScore = $score
  
  // create new variable for the initials + score

    var newHS = " Name: " + initialsInput + " -----" + " Score: " + highScore;
      
    //high score console log check
    console.log(highScores);

  //get existing high scores
  var highScores = JSON.parse(localStorage.getItem("High Score") || "[]");

  //combine new high scores to existing high scores
  highScores.push(newHS);

  //set combined high scores list to localStorage
  localStorage.setItem("High Score", JSON.stringify(highScores))

  //remove form input value after submission
    formInput.value = "";
    
  }

  //redirect to high score page
  
  function redirectHS() {
    window.location.href = "highscores.html";
  }    

  })
   
