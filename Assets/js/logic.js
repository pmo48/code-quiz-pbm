$(document).ready(function () {
  // Button click to start game
  var $timer = 75;
  var $score = 0;

  // question bank
  var questionIndex = 0;
  var questions = [
    {
      q: "What color is the sky?",
      o: ["blue", "green", "yellow", "red"],
      a: "blue",
    },
    {
      q: "What color is the grass?",
      o: ["green", "yellow", "blue", "red"],
      a: "blue",
    },
    {
      q: "What color are clouds?",
      o: ["brown", "green", "white", "red"],
      a: "white",
    },
    {
      q: "How many states are in the USA?",
      o: ["20", "40", "45", "50"],
      a: "50",
    },
    {
      q: "What is the capitol of the USA?",
      o: ["Washington D.C.", "L.A.", "NYC", "Chicago"],
      a: "Washington D.C.",
    },
    {
      q: "What is NOT a USA color?",
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

  // grab button and form input from html
  var submitHS = document.querySelector(".submit-btn")
  var formInput = document.querySelector(".formInput")

  // add event listener for button click
  submitHS.addEventListener("click", function(event) {
    event.preventDefault();
    createHS(event);
    // redirectHS(event);
  })

  function createHS() {
  //store initials  and score in variable
    var initialsInput = formInput.value.trim();
    var highScore = $score
  
  // create new variable for the initials + score

    var newHS = {
      name: initialsInput,
      score: highScore,
    }
  //console log initials input and score

    localStorage.setItem("High Score", JSON.stringify(newHS))

    console.log(newHS);
  }
    

    // //redirect to highscores page
    // window.location.href = "highscores.html";
  })

//select submit button variable

// var submitHS = document.querySelector(".submit-btn")
  
// //submit button event listener, add score and redirect to high scores page


// event.stopPropagation();
    // addScore(event);
    // hsRedirect(event);

//   submitHS.addEventListener("click", function(event) {
//     window.location.href = "highscores.html";
//     event.stopPropagation();
//     addScore(event);
//     hsRedirect(event);
//   });

  //function to redirect to high scores page
  
  //function to redirect to high scores page

  // function addScore (event) {
  //   initialsInput = document.getElementById("formInput").value
    
  //   var newScore = {
  //     name: initialsInput.value.trim(),
  //     score: $score.value.trim(),
  //   };

  //   var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  //   highScores.push(newScore)
  //   localStorage.setItem("highScores", JSON.stringify(highScores));
  // }

  

    //check if input is not empty

      //get the old data

      //create the new data

      //add the new data to old data


      //store it

      //redirect the user to other HTML page

      
   
