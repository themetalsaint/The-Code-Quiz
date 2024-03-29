var quizTimer = document.getElementById("timer");
var start = document.getElementById("startpage");
var startBtn = document.getElementById("start");
var end = document.getElementById("endScreen");
var endButtons = document.getElementById("endButtons");
var answersEl = document.getElementById("answers");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');

// var time = questions * 15;
var questionIndex = 0;
var timerEl;


//sounds
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


function startGame(){
    var startScreenEl = document.getElementById("startpage");
    startScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");
    timerId = setInterval(tick, 1000);
    // timerEl.textContent = time;
    
    
    showQuestions();


}

function showQuestions(){
    var activeQuestion = questions[questionIndex];

    var titleEl = document.getElementById('question-title');
    titleEl.textContent = activeQuestion.question;

    answersEl.innerHTML = ""; 


    for(var i = 0; i < activeQuestion.options.length; i++)   {
        var option = activeQuestion.options.length[i];
        var optionBtns = document.createElement("button");
        optionBtns.setAttribute("value", option);
        optionBtns.setAttribute("class", "btn") 
        
        optionBtns.textContent = i + 1 + ". " + option;
        optionBtns.onclick = clickQuestions();


        answersEl.appendChild(optionBtns);

            }
        
    }

function clickQuestions(){
 var buttonEl = event.target;

 if (buttonEl.value !== questions[questionIndex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;

    // sfxWrong.play(); //Incorrect Music
    // feedbackEl.textContent = "Wrong!";
  } else {

    sfxRight.play(); //Correct Music
    feedbackEl.textContent = "Correct!";
  }

     feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    questionIndex++;

    if(time <= 0 || questionIndex === questions.length) {
         quizEnd();
     } else {
         showQuestions();
         }
    }

function quizEnd(){
    clearInterval(timerEl)

    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    questionsEl.setAttribute('class', 'hidden');
}

function tick(){
    //update timer
    // time--;
    // timeEl.textContent = time;

//     if(time <= 0){
//         quizEnd();
//     }
}


function saveHighscore() {

    var initials = initials.value.trim();

    if (initials !== '') {

      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      var newScore = {
        score: time,
        initials: initials,
      };
  
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
      window.location.href = 'highscores.html';
    }
  }

// replayGame()



// checkAnswers()


// showHighscores()


// clearHighscores()
function checkForEnter(event){
  if (event.key === 'Enter'){
    saveHighscore();
  }
}

// submitBtn.onclick = saveHighscore;
startBtn.onclick = startGame;
answersEl.onclick = clickQuestions;
initials.onkeyup = checkForEnter;