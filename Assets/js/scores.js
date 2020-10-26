function renderHighScores() {
    // Clear todoList element and update todoCountSpan
    var storedHighScores = JSON.parse(localStorage.getItem("High Scores"));

  // If todos were retrieved from localStorage, update the todos array to it
    if (storedHighScores !== null) {
      highScoreslist = storedHighScores;
    
    $(".highScoreList").text(storedHighScores);

    // Render a new li for each todo
    // for (var i = 0; i < highScores.length; i++) {
    //   var hs = highScores[i];
  
    //   var li = document.createElement("li");
    //   li.textContent = hs;
    //   li.setAttribute("data-index", i);
  
    //   highScoreslist.appendChild(li);
    // }
  }
  }