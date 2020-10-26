// variable list for score logic

var highScoreslist = document.querySelector(".highScoresList");
var highScores = [];

// initialize high score list
init();

function renderHighScores() {
  // Clear todoList element and update todoCountSpan
  // highScoreslist.innerHTML = "";

  // Render a new li for each high score
  for (var i = 0; i < highScores.length; i++) {
    var hs = highScores[i];

    var li = document.createElement("li");
    li.textContent = hs;
    li.setAttribute("data-index", i);

    highScoreslist.appendChild(li);
  }
}

function init() {
  // Get stored high scores from localStorage
  // Parsing the JSON string to an object
  var storedHighScores = JSON.parse(localStorage.getItem("High Score"));

  // If high scores were retrieved from localStorage, update the todos array to it
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

  // Render todos to the DOM
  renderHighScores();
}
